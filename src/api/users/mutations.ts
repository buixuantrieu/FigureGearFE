import { useMutation } from "@tanstack/react-query"
import { IRegisterDTO } from "./type"
import { register } from "./fetchers"

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: IRegisterDTO) => register(payload)
  })
}