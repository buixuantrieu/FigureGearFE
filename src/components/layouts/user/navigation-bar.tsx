import { HOME_NAVIGATION } from "@/constants"
import { useSafeTranslate } from "@/hooks/useSafeTranslate"
import Link from "next/link"

export default function NavigationBar() {
  const { t } = useSafeTranslate();

  const renderNavigation = HOME_NAVIGATION.map((nav, index) => {
    return (
      <Link href={nav.url} key={`${index}-nav`}>
        {t(nav.label)}
      </Link>
    )
  })
  return (
    <nav>
      {renderNavigation}
    </nav>
  )
}