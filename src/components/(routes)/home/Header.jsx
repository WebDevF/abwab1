
"use client"

import { useTranslation } from "react-i18next"

export default function Header() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-6 xl:px-6 py-3 relative">
      <div
        className="grid w-full max-w-[390px] sm:max-w-[600px] md:max-w-[900px] lg-mid:max-w-[1100px] lg:max-w-[1200px] xl:max-w-[1300px]  2xl:max-w-[1460px]
        h-[400px] sm:h-[500px] md:h-[550px] lg-mid:h-[560px] lg:h-[575px] 
        rounded-[2.5rem] md:rounded-[3.5rem] lg-mid:rounded-[4rem] lg:rounded-[4.5rem] 
        py-4 md:p-6 lg-mid:p-7 lg:p-8 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/assets/img/header/image 23.png')" }}
      >
        <div className="flex items-start justify-between w-full px-6 sm:px-8 md:px-10 lg-mid:px-7 lg:px-6 pt-0 pb-6 md:pt-1 md:pb-1 z-10"> 
          <img
            src="/assets/img/header/Layer 1.svg"
            alt=""
            className="w-[80px] sm:w-[100px] md:w-[140px] lg-mid:w-[160px] lg:w-[180px] pt-2"
          />

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-white text-[14px] sm:text-[16px] md:text-[20px] lg-mid:text-[22px] lg:text-[24px] xl:text-[30px] cursor-pointer"
            >
              {i18n.language === "ar" ? "ع" : "EN"}
              <img
                src="/assets/img/header/ic_round-language.svg"
                alt=""
                className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]"
              />
            </button>

            <button className="flex items-center gap-1 text-white text-[10px] sm:text-[12px] md:text-[16px] lg-mid:text-[18px] lg:text-[20px] xl:text-[25px] border border-white px-3 sm:px-4 md:px-6 lg-mid:px-5 lg:px-5 xl:px-8 py-1.5 sm:py-2 md:py-1.5 lg-mid:py-2.5 lg:py-3 rounded-full font-[400] cursor-pointer hover:bg-[#FFFFFF3A] hover:text-white transition-all duration-300">
              {t("header.contact_us")}
              <img
                src="/assets/img/header/SVG.svg"
                alt=""
                className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg-mid:w-[22px] lg:w-[25px] lg:h-[25px]"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center text-white p-4 sm:p-5 md:p-6 lg-mid:p-5 lg:p-4 xl:p-4 z-10 -translate-y-8 sm:-translate-y-10 md:-translate-y-12 lg-mid:-translate-y-14 lg:-translate-y-16 xl:-translate-y-20">
          <h1 className="text-[1rem] sm:text-[1.4rem] md:text-[1.5rem] lg-mid:text-[1.8rem] lg:text-[2rem] xl:text-[2.8rem] font-[600] mb-3 sm:mb-4 leading-tight max-w-7xl">
            {t("header.header_title")}
          </h1>
          <p className="text-[9px] sm:text-[14px] md:text-[18px] lg-mid:text-[20px] lg:text-[25px] xl:text-[24px] font-[500] mb-3 sm:mb-4 max-w-5xl leading-relaxed max-w-[50rem]">
            {t("header.header_desc")}
          </p>
          <button className="text-white text-[8px] sm:text-[10px] md:text-[14px] lg-mid:text-[16px] lg:text-[18px] xl:text-[22px] border border-white mt-2 px-3 sm:px-4 md:px-6 lg-mid:px-7 lg:px-8 xl:px-10 py-1 sm:py-2 md:py-3 lg-mid:py-3 lg:py-4 rounded-full font-[400] cursor-pointer hover:bg-[#FFFFFF3A] hover:text-white transition-all duration-300 max-sm:w-[8rem]">
            {t("header.header_btn")}
          </button>
        </div>
      </div>

      <div className="mt-[-60px] sm:mt-[-80px] md:mt-[-100px] lg-mid:mt-[-110px] lg:mt-[-120px] xl:mt-[-130px] w-[95%] sm:w-[90%] md:w-[85%] lg-mid:w-[1050px] lg:w-[955px] xl:w-[1200px] h-[45px] sm:h-[60px] md:h-[80px] lg-mid:h-[90px] lg:h-[100px] xl:h-[113px] bg-white/10 rounded-[0.75rem] sm:rounded-[1rem] md:rounded-[1.5rem] lg-mid:rounded-[1.75rem] lg:rounded-[2rem] py-2 sm:py-3 md:py-4 lg-mid:py-5 lg:py-6 xl:py-7 px-2 sm:px-4 md:px-6 lg-mid:px-7 lg:px-8 xl:px-10 z-10 flex flex-row justify-between items-center text-white backdrop-blur-sm">
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 md:pr-6 lg-mid:pr-7 lg:pr-8 xl:pr-10">
          <img
            src="/assets/img/header/Frame 1597883596.svg"
            alt="icon1"
            className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg-mid:w-[30px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px]"
          />
          <div className="flex flex-col">
            <h1 className="text-[8px] sm:text-[10px] md:text-[14px] lg-mid:text-[18px] lg:text-[20px] xl:text-[24px] font-bold">
              {t("header.stats.0.value")}
            </h1>
            <p className="text-[7px] sm:text-[9px] md:text-[12px] lg-mid:text-[14px] lg:text-[16px] xl:text-[18px] font-light">
              {t("header.stats.0.label")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          <img
            src="/assets/img/header/Frame 1597883596 (1).svg"
            alt="icon2"
            className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg-mid:w-[30px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px]"
          />
          <div className="flex flex-col">
            <h1 className="text-[8px] sm:text-[10px] md:text-[14px] lg-mid:text-[18px] lg:text-[20px] xl:text-[24px] font-bold">
              {t("header.stats.1.value")}
            </h1>
            <p className="text-[7px] sm:text-[9px] md:text-[12px] lg-mid:text-[14px] lg:text-[16px] xl:text-[18px] font-light">
              {t("header.stats.1.label")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 md:pl-6 lg-mid:pl-7 lg:pl-8 xl:pl-10">
          <img
            src="/assets/img/header/Frame 1597883596 (2).svg"
            alt="icon3"
            className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg-mid:w-[30px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px]"
          />
          <div className="flex flex-col">
            <h1 className="text-[8px] sm:text-[10px] md:text-[14px] lg-mid:text-[18px] lg:text-[20px] xl:text-[24px] font-bold">
              {t("header.stats.2.value")}
            </h1>
            <p className="text-[7px] sm:text-[9px] md:text-[12px] lg-mid:text-[14px] lg:text-[16px] xl:text-[18px] font-light">
              {t("header.stats.2.label")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

