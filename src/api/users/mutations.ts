import { useMutation } from "@tanstack/react-query"
import { ILoginDTO, IRegisterDTO } from "./type"
import { confirmEmail, login, register } from "./fetchers"

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: IRegisterDTO) => register(payload)
  })
}

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: ILoginDTO) => login(payload)
  })
}

export const useConfirmEmail = () => {
  return useMutation({
    mutationFn: (token: string) => confirmEmail(token)
  })
}