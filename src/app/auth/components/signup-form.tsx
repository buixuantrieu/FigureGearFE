'use client'

import { useRegister } from "@/api/users/mutations"
import DynamicForm from "@/components/shared/dynamic-form"
import ButtonCustom from "@/components/ui/button-custom"
import { ROUTES } from "@/constants"
import { useSafeTranslate } from "@/hooks/useSafeTranslate"
import { FormControlType } from "@/types/enums/form"
import { IFormConfig, IFormItem } from "@/types/interfaces/form"
import { showMessageError } from "@/utils/form"
import { zodResolver } from "@hookform/resolvers/zod"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

export default function SignupForm() {

  const router = useRouter();

  const { mutateAsync: registerUser, isPending } = useRegister();
  const { t } = useSafeTranslate();

  const signupFormSchema = z.object({
    userName: z.string().trim().nonempty("user name is required"),
    email: z.string().trim().nonempty("email is required").max(100, "email must not exceed 100 characters"),
    password: z.string().trim().nonempty("password is required").max(50, "password must not exceed 50 characters").refine((val) => {
      let strength = 0;
      if (val.length >= 8) strength += 1;
      if (/[A-Z]/.test(val)) strength += 1;
      if (/[0-9]/.test(val)) strength += 1;
      if (/[^A-Za-z0-9]/.test(val)) strength += 1;
      return strength >= 3;
    }, {
      message: "password is too weak",
    }),
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "passwords do not match",
  });
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
          <Link href="" className="text-slate-900 text-[13px] hover:text-blue-400">{t("you already have an account")}</Link>
        </div>
      )
    },
    {
      key: "component",
      formControlType: FormControlType.Component,
      component: <ButtonCustom loading={isPending} type="submit" text={t("submit")} />
    }
  ]

  const handleRegister = async (data: z.infer<typeof signupFormSchema>) => {
    try {
      await registerUser({
        userName: data.userName,
        password: data.password,
        email: data.email
      });
      toast.success(t("account registration successful"),
        {
          position: "top-center",
          description: "ok",
          action: {
            label: t("close"),
            onClick: () => null
          }
        });
      router.push(ROUTES.LOGIN);
    } catch (error) {
      showMessageError(error, signupForm)
    }
  }

  const formConfig: IFormConfig = {
    form: signupForm,
    formItems,
    onSubmit: handleRegister
  }

  return (
    <>
      <h3 className="text-center text-[24px] font-medium text-slate-950">{t("sign up")}</h3>
      <DynamicForm formConfig={formConfig} />
    </>
  )
}