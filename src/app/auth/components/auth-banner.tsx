import { AUTH_BANNER_IMAGES } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AuthBanner() {
  const renderBannerAuthImages = AUTH_BANNER_IMAGES.map((image, index) => (
    <Image
      key={`${index}-banner-auth-image`}
      width={200}
      height={300}
      alt={image.alt}
      src={image.src}
      priority
      className={cn("absolute border-6 border-white object-cover duration-500 cursor-pointer hover:scale-[1.05]", image.className)}
    />
  ))

  return (
    <div className="fixed top-[-3%] left-0 w-full h-[30vh]">
      {renderBannerAuthImages}
    </div>
  )
}
