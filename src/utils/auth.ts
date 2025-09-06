import { STORAGE_KEY } from "@/constants";

export const getAccessToken = () => {
  const token = localStorage.getItem(STORAGE_KEY.APP_ID) ?? "";
  return token.split(process.env.NEXT_PUBLIC_KEY_TOKEN as string)[0];
};

export const getRefreshToken = () => {
  const token = localStorage.getItem(STORAGE_KEY.APP_ID) ?? "";
  return token.split(process.env.NEXT_PUBLIC_KEY_TOKEN as string)[1];
};

export const saveToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY.TOKEN, token)
  }
}