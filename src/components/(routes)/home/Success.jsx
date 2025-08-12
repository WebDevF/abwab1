import { useTranslation } from "react-i18next";

export default function Success() {
  const { t } = useTranslation();

  const stats = [
    {
      img: "/assets/img/success/Vector (15).svg",
      number: t("success.stats.0.number"),
      label: t("success.stats.0.label"),
    },
    {
      img: "/assets/img/success/fi_15252912.svg",
      number: t("success.stats.1.number"),
      label: t("success.stats.1.label"),
    },
    {
      img: "/assets/img/success/fi_2020773.svg",
      number: t("success.stats.2.number"),
      label: t("success.stats.2.label"),
    },
  ];

  return (
    <div className="bg-[#E7ECF933] py-16 px-6">
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2 text-[16px] font-[400] text-[#0A40C6] bg-[#E7ECF9] px-4 py-2 rounded-full w-fit">
          <img
            src="/assets/img/services/Layer_x0020_1 (1).svg"
            className="w-[18px] h-[18px]"
            alt=""
          />
          <h1 className="text-[16px] font-[400] text-[#0A40C6]">
            {t("success.badge")}
          </h1>
        </div>
      </div>

      <div className="text-center mb-16 px-2">
        <h1 className="text-[22px] sm:text-[28px] md:text-[40px] font-[700] text-[#000000] leading-normal md:leading-[0.5]">
          {t("success.heading")}
        </h1>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center lg:gap-30 gap-10 max-w-4xl mx-auto">
        {stats.map((item, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-4">
            <img
              className="bg-[#E7ECF980] rounded-[5px] p-1 w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] md:w-[60px] md:h-[60px]"
              src={item.img}
              alt={item.label}
            />
            <div className="text-right">
              <h1 className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] text-[#0E0D0D]">
                {item.number}
              </h1>
              <p className="text-[14px] sm:text-[18px] md:text-[24px] font-[300] text-[#3D3C3C]">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
