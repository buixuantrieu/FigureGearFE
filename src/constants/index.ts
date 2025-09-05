// #region Auth Banner
export const AUTH_BANNER_IMAGES = [
  {
    src: "/images/banner-auth/Kamado-Tanjirou.JPG",
    alt: "Kamado-Tanjirou",
    className: `left-[-5%] w-[45%] -rotate-2 z-0
                md:left-[-4%] md:-rotate-4 md:w-[32%] lg:left-[-2%]
                lg:w-[21%] lg:-rotate-4
                xl:left-[0%] xl:w-[18%]`
  },
  {
    src: "/images/banner-auth/Kamado-Nezuko.JPG",
    alt: "Kamado-Nezuko",
    className: `left-[36%] w-[43%] rotate-6 top-[6%] z-30
                md:left-[24%] md:w-[29%]
                lg:left-[17%] lg:w-[18%]
                xl:left-[15%] xl:w-[15%]`
  },
  {
    src: "/images/banner-auth/Rengoku-Kyoujurou.JPG",
    alt: "Rengoku-Kyoujurou",
    className: `left-[70%] w-[45%] -top-2 -rotate-12 z-20
                md:w-[30%] md:left-[50%] md:-rotate-6
                lg:left-[33%] lg:w-[20%]
                xl:left-[27%] xl:w-[15%]`
  },
  {
    src: "/images/banner-auth/Luffy.JPG",
    alt: "Luffy",
    className: `hidden top-[6%] z-10 rotate-4
                xl:block xl:left-[39%] xl:w-[27%]`
  },
  {
    src: "/images/banner-auth/Kanroji-Mitsuri.JPG",
    alt: "Kanroji-Mitsuri",
    className: `hidden z-20 rotate-9
                lg:block lg:left-[50%] lg:w-[21%] lg:-top-[22%] lg:rotate-6
                xl:left-[63%] xl:-top-[4%] xl:w-[15%]`
  },
  {
    src: "/images/banner-auth/Tokito-Muichiro.JPG",
    alt: "Tokito-Muichiro",
    className: `hidden top-[2%] -rotate-10 z-30
                md:w-[33%] md:left-[73%] md:block
                lg:left-[68%] lg:w-[19%] lg:-rotate-8
                xl:left-[75%] xl:w-[15%]`
  },
  {
    src: "/images/banner-auth/Kochou-Shinobu.JPG",
    alt: "Kochou-Shinobu",
    className: `top-[12%] z-30 rotate-6 hidden
                lg:left-[84%] lg:w-[21%] lg:block
                xl:left-[87%] xl:w-[17%]`
  }
]
// #endregion

//#region LocalStorage
export const STORAGE_KEY = {
  APP_ID: "FigureGearId",
  TOKEN: "FigureGearToken"
};
//#endregion

//#region  Route
export const ROUTES = {
  USER: {
    HOME: "/",
    STORE: "/store",
    COMMUNITY: "/community",
    NEWS: "/news",
    ABOUT: "/about"
  },
  ADMIN: {},
  LOGIN: "/auth?mode=login",
  REGISTER: "/auth?mode=register",
  NOT_FOUND: "/not-found"
}

export const HOME_NAVIGATION = [
  {
    label: "store",
    url: ROUTES.USER.STORE
  },
  {
    label: "community",
    url: ROUTES.USER.COMMUNITY
  },
  {
    label: "news",
    url: ROUTES.USER.NEWS
  },
  {
    label: "about",
    url: ROUTES.USER.ABOUT
  }
]
//#endregion

