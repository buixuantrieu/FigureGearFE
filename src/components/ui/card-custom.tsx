import { cn } from "@/lib/utils";

interface ICardCustomProps {
  children: React.ReactNode;
  className?: string;
}
export default function CardCustom({ children, className }: ICardCustomProps) {
  return (
    <div className={cn("w-full max-w-screen pt-4 pb-12 px-8 rounded-md card", className)}>
      <div className="dot1"></div>
      <div className="dot2"></div>
      {children}
    </div>
  )
}