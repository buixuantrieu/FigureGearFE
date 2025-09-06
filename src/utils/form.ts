import axios from "axios";
import { UseFormReturn } from "react-hook-form";

const toCamelCase = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);

export const showMessageError = (error: unknown, form?: UseFormReturn<any>): string => {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data;
    if (data && typeof data === "object") {
      const entries = Object.entries(data);

      for (const [key, value] of entries) {
        const fieldKey = toCamelCase(key);

        if (Array.isArray(value)) form?.setError?.(fieldKey, { type: "manual", message: value[0] });
      }

      const firstKey = Object.keys(data)[0];
      const firstError = Array.isArray(data[firstKey]) ? data[firstKey][0] : "Something went wrong";
      return firstError;
    }
  }
  console.error("Unknown error:", error);
  return "Something went wrong";
};
