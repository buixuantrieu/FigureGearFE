'use client'
import { ROUTES } from "@/constants"
import { showMessageError } from "@/utils/form"
import { useRegister } from "@/api/users/mutations"
import { FormControlType } from "@/types/enums/form"
import { zodResolver } from "@hookform/resolvers/zod"
import DynamicForm from "@/components/shared/dynamic-form"
import { useSafeTranslate } from "@/hooks/useSafeTranslate"
import { IFormAction, IFormConfig, IFormItem } from "@/types/interfaces/form"

import z from "zod"
import Link from "next/link"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

const signupFormSchema = z.object({
  userName: z.string().trim().nonempty("user name is required"),
  email: z.string().trim().nonempty("email is required").max(100, "email must not exceed 100 characters"),
  confirmPassword: z.string(),
  password: z.string().trim().nonempty("password is required").max(50, "password must not exceed 50 characters").refine((val) => {
    let strength = 0;
    if (val.length >= 8) strength += 1;
    if (/[A-Z]/.test(val)) strength += 1;
    if (/[0-9]/.test(val)) strength += 1;
    if (/[^A-Za-z0-9]/.test(val)) strength += 1;
    return strength >= 3;
  }, { message: "password is too weak" })
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "passwords do not match"
});

export default function SignupForm() {
  const router = useRouter();

  const { mutate: registerUser, isPending } = useRegister();
  const { t } = useSafeTranslate();

  const signupForm = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      userName: "",
      password: "",
      confirmPassword: "",
      email: ""
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
      label: "email",
      key: "email",
      formControlType: FormControlType.TextField,
      required: true
    },
    {
      label: "password",
      key: "password",
      formControlType: FormControlType.TextField,
      required: true,
      type: "password",
      showStrength: true
    },
    {
      label: "confirm password",
      key: "confirmPassword",
      type: "password",
      formControlType: FormControlType.TextField,
      required: true
    },
    {
      key: "component",
      formControlType: FormControlType.Component,
      component: (
        <div className="flex justify-end mb-3">
          <Link href={ROUTES.LOGIN} className="text-slate-900 text-[13px] hover:text-blue-400">
            {t("you already have an account")}
          </Link>
        </div>
      )
    }
  ]

  const handleRegister = async (data: z.infer<typeof signupFormSchema>) => {
    registerUser(
      {
        userName: data.userName,
        password: data.password,
        email: data.email
      },
      {
        onSuccess: () => {
          toast.success(t("account registration successful"));
          router.push(ROUTES.LOGIN);
        },
        onError: (error) => {
          showMessageError(error, signupForm)
        }
      });
  }

  const formActions: IFormAction[] = [
    {
      text: "sign up",
      type: "submit",
      loading: isPending
    }
  ]

  const formConfig: IFormConfig = {
    form: signupForm,
    formItems,
    onSubmit: handleRegister,
    actions: formActions
  }

  return (
    <>
      <h3 className="text-center text-[24px] font-medium text-slate-950">{t("sign up")}</h3>
      <DynamicForm formConfig={formConfig} />
    </>
  )
}