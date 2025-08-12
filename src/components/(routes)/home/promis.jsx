import { useTranslation } from "react-i18next"

export default function Promis() {
  const { t } = useTranslation()

  const Details = [
    {
      title: t("promis.details.0.title"),
      description: t("promis.details.0.description"),
      icon: "/assets/img/promis/Layer_1.svg",
    },
    {
      title: t("promis.details.1.title"),
      description: t("promis.details.1.description"),
      icon: "/assets/img/promis/Layer_1 (1).svg",
    },
    {
      title: t("promis.details.2.title"),
      description: t("promis.details.2.description"),
      icon: "/assets/img/promis/internet_computer.svg",
    },
    {
      title: t("promis.details.3.title"),
      description: t("promis.details.3.description"),
      icon: "/assets/img/promis/Vector (14).svg",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-6 xl:px-6 max-sm:mt-5 lg:mt-[2rem] md:mt-[2rem]">
      <div className="w-full max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
          <div className="rounded-3xl bg-gradient-to-br from-[#3768E1] to-[#0A40C6] p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[300px] lg:min-h-[400px] bg-[#0A40C6]">
            <div className="flex items-center gap-2 text-sm sm:text-base font-normal bg-white/16 px-4 py-2 rounded-full w-fit mb-4 lg:mb-6">
              <img src="/assets/img/promis/Layer_x0020_1.svg" className="w-5 h-5 sm:w-5 sm:h-5" alt="" />
              <span className="text-white text-[20px]">{t("promis.badge")}</span>
            </div>

            <h1 className="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem] font-[700] text-white mb-4 lg:mb-6 leading-tight">
              {t("promis.heading")}
            </h1>

            <button className="sm:text-[10px] md:text-[12px] lg:text-[18px] xl:text-[20px] font-[500] bg-white text-[#0A40C6] border border-white px-4 py-2 rounded-full w-fit cursor-pointer hover:bg-white/10 hover:text-white transition-all duration-300">
              {t("promis.button")}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {Details.map((detail, index) => (
              <div
                key={index}
                className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-4 sm:p-5 lg:p-6 rounded-3xl transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="bg-[#FFF9F3] rounded-xl p-3 w-fit mb-3 lg:mb-4">
                  <img
                    src={detail.icon || "/placeholder.svg"}
                    alt="icon"
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                  />
                </div>

                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 lg:mb-3 leading-tight">
                  {detail.title}
                </h2>

                <p className="text-sm sm:text-base lg:text-lg font-light text-gray-700 leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
