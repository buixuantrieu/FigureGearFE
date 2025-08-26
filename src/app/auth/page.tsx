import Loading from "@/components/shared/loading";
import AuthBanner from "./components/auth-banner";
import SignupForm from "./components/signup-form";

export default function Auth() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <AuthBanner />
      <div className="relative w-full z-100 bg-[#ebebe6] rounded-2xl max-w-[430px] box-shadow py-4 px-8">
        <SignupForm />
      </div>
      <Loading />
    </div>
  )
}