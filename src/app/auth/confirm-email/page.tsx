/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useConfirmEmail } from "@/api/users/mutations";
import { ROUTES } from "@/constants";
import { saveToken } from "@/utils/auth";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";

export default function ConfirmEmail() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const { mutate: confirmEmail } = useConfirmEmail();

  useEffect(() => {
    if (token) handleConfirmEmail(token.replace(/ /g, "+"));
  }, [token])

  const handleConfirmEmail = (token: string) => {
    confirmEmail(token, {
      onSuccess: (res) => {
        const token = res?.data?.token;
        if (!token) return router.push(ROUTES.NOT_FOUND);
        saveToken(token);
        router.push(ROUTES.USER.HOME);
      },
      onError: () => {
        router.push(ROUTES.NOT_FOUND);
      }
    });
  }
  return <></>
}