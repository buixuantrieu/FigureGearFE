import { cn } from "@/lib/utils";
import React from "react";


interface IButtonCustomProps {
  type?: "button" | "submit";
  text?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export default function ButtonCustom({ disabled, loading, type, text, onClick }: IButtonCustomProps) {
  return (
    <button
      disabled={disabled}
      type={type ?? "button"}
      className={cn(
        "w-full button-global",
        (loading || disabled) && "button-disable",
        loading && "cursor-progress",
        disabled && "cursor-not-allowed")} onClick={onClick}>
      {text}
    </button >
  );
}
