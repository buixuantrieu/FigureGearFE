import { useLogin } from "@/api/users/mutations";
import DynamicForm from "@/components/shared/dynamic-form";
import { ROUTES } from "@/constants";
import { useSafeTranslate } from "@/hooks/useSafeTranslate";
import { FormControlType } from "@/types/enums/form";
import { IFormConfig, IFormItem } from "@/types/interfaces/form";
import { saveToken } from "@/utils/auth";
import { showMessageError } from "@/utils/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const signinFormSchema = z.object({
  userName: z.string().trim().nonempty("user name is required"),
  password: z.string().trim().nonempty("password is required")
})
export default function SigninForm() {
  const { t } = useSafeTranslate();
  const { mutate: loginUser, isPending } = useLogin();
  const router = useRouter();
  const signinForm = useForm<z.infer<typeof signinFormSchema>>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      userName: "",
      password: ""
    }
  })

  const formItems: IFormItem[] = [
    {
      label: "user name",
      key: "userName",
      formControlType: FormControlType.TextField,
      required: true
    },
    {
      label: "password",
      key: "password",
      formControlType: FormControlType.TextField,
      required: true,
      type: "password"
    },
    {
      key: "component",
      formControlType: FormControlType.Component,
      component: (
        <div className="flex justify-end mb-3">
          <Link href="" className="text-slate-900 text-[13px] hover:text-blue-400">{t("forgot password")}</Link>
        </div>
      )
    }
  ]

  const handleLogin = (data: z.infer<typeof signinFormSchema>) => {
    loginUser({
      userName: data.userName,
      password: data.password,
    }, {
      onSuccess: (res) => {
        const token = res?.data?.token;
        if (!token) return;
        saveToken(token);
        toast.success(t("login successful"));
        router.push(ROUTES.USER.HOME);
      },
      onError: (error: any) => {
        signinForm.setError("userName", { message: "" })
        const message = error?.response?.data?.message
        if (message) signinForm.setError("password", { message: t(message) })
      }
    });
  }
  const formConfig: IFormConfig = {
    form: signinForm,
    formItems,
    onSubmit: handleLogin,
    actions: [
      {
        text: "sign in",
        type: "submit",
        loading: isPending
      }
    ]
  }

  return (
    <>
      <h3 className="text-center text-[24px] font-medium text-slate-950">{t("sign in")}</h3>
      <DynamicForm formConfig={formConfig} />
    </>
  )
}