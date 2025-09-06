import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground font-[400] selection:bg-primary selection:text-primary-foreground border border-slate-200 flex h-9 w-full min-w-0 rounded-[4px] bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border focus-visible:border-slate-300",
        "aria-invalid:border-red-300",
        className
      )}
      {...props}
    />
  )
}

export { Input }
