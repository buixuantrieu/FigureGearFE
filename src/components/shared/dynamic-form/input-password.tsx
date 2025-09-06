import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

export default function InputPassword({ item, ...field }: any) {
  const isPassword = item.type === "password";
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const password = field.value || "";

  if (!isPassword) {
    return (
      <Input
        type={item.type ?? "text"}
        className={item.formControlClass}
        placeholder={item.placeholder}
        {...field}
      />
    );
  }
  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };
  const strength = getPasswordStrength(password);

  const strengthColor = ["bg-red-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"];
  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={item.formControlClass}
        placeholder={item.placeholder}
        {...field}
      />
      <div
        className="absolute right-3 top-5 -translate-y-[8px] cursor-pointer text-muted-foreground"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <Eye size={13} /> : <EyeOff size={13} />}
      </div>
      {item.showStrength && (
        <div className="h-1 w-full bg-slate-100 rounded mt-1">
          <div
            className={`h-full rounded transition-all duration-300 ${strengthColor[strength - 1]}`}
            style={{ width: `${(strength / 4) * 100}%` }}
          >
          </div>
        </div>
      )}
    </div>
  );
}

