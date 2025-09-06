'use client'
import { useSearchParams } from "next/navigation";
import AuthBanner from "./components/auth-banner";
import SignupForm from "./components/signup-form";
import Image from "next/image";
import Link from "next/link";
import SigninForm from "./components/signin-form";
export default function Auth() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  return (
    <div className="w-full min-h-screen flex flex-col ">
      <div className="flex relative justify-between items-center px-4 pt-3 z-100">
        <Link href="/">
          <div className="bg-red-800 border border-white p-1 cursor-pointer hover:scale-110 duration-300 rounded-sm">
            <Image
              width={120}
              height={100}
              priority
              alt="Logo Figure Gear"
              src="/images/Logo.png" />
          </div>
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-full z-100 bg-[#ebebe6] rounded-2xl max-w-[430px] box-shadow py-8 px-8 mb-12">
          {mode == "register" ? <SignupForm /> : <SigninForm />}
        </div>
      </div>
      <AuthBanner />
    </div>
  )
}