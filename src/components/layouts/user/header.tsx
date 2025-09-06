import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./navigation-bar";
import Utility from "./utility";

export default function Header() {
  return (
    <header className="flex fixed justify-between items-center w-full px-4 pt-3 z-100">
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
      <NavigationBar />
      <Utility />
    </header>
  )
}