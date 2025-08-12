import { useTranslation } from "react-i18next";

export default function Methodology() {
  const { t } = useTranslation();

  const stepsData = [
    {
      id: 1,
      icon: "/assets/img/methodology/fi_3721746.svg",
      number: t("methodology.steps.1.number"),
      title: t("methodology.steps.1.title"),
      duration: t("methodology.steps.1.duration"),
      description: t("methodology.steps.1.description"),
      list: t("methodology.steps.1.list", { returnObjects: true }),
      image: "/assets/img/methodology/fi_12002122 (1).png",
    },
    {
      id: 2,
      icon: "/assets/img/methodology/fi_3159310.svg",
      number: t("methodology.steps.2.number"),
      title: t("methodology.steps.2.title"),
      duration: t("methodology.steps.2.duration"),
      description: t("methodology.steps.2.description"),
      list: t("methodology.steps.2.list", { returnObjects: true }),
      image: "/assets/img/methodology/fi_1221344 (1).png",
    },
    {
      id: 3,
      icon: "/assets/img/methodology/fi_8750730.svg",
      number: t("methodology.steps.3.number"),
      title: t("methodology.steps.3.title"),
      duration: t("methodology.steps.3.duration"),
      description: t("methodology.steps.3.description"),
      list: t("methodology.steps.3.list", { returnObjects: true }),
      image: "/assets/img/methodology/fi_6404558 (1).png",
    },
    {
      id: 4,
      icon: "/assets/img/methodology/fi_2498074.svg",
      number: t("methodology.steps.4.number"),
      title: t("methodology.steps.4.title"),
      duration: t("methodology.steps.4.duration"),
      description: t("methodology.steps.4.description"),
      list: t("methodology.steps.4.list", { returnObjects: true }),
      image: "/assets/img/methodology/fi_4710098 (1).png",
    },
    {
      id: 5,
      icon: "/assets/img/methodology/fi_12914850.svg",
      number: t("methodology.steps.5.number"),
      title: t("methodology.steps.5.title"),
      duration: t("methodology.steps.5.duration"),
      description: t("methodology.steps.5.description"),
      list: t("methodology.steps.5.list", { returnObjects: true }),
      image: "/assets/img/methodology/fi_3247363 (1).png",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col items-center text-center gap-4 px-4 py-5 md:px-8 lg:px-16">
        <div className="flex items-center gap-2 text-[16px] font-[400] text-[#0A40C6] bg-[#E7ECF9] px-4 py-2 rounded-full w-fit">
          <img
            src="/assets/img/services/Layer_x0020_1 (1).svg"
            className="w-[18px] h-[18px]"
            alt=""
          />
          <h1 className="text-[16px] font-[400] text-[#0A40C6]">
            {t("methodology.sectionTag")}
          </h1>
        </div>
        <div className="px-4">
          <h1 className="text-[32px] sm:text-[36px] md:text-[42px] font-[500] text-[#000000]">
            {t("methodology.sectionTitle")}
          </h1>
          <p className="text-[#3D3C3C] text-[18px] sm:text-[20px] font-[300]">
            {t("methodology.sectionSubtitle")}
          </p>
        </div>
      </div>

      {stepsData.map((step, index) => (
        <div
          key={step.id}
          className={`w-full flex flex-col-reverse ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-6 px-4 sm:px-6 md:px-10 py-8 md:py-10 group cursor-pointer relative`}
        >
          <div className="hidden lg:block absolute top-[0%] bottom-[0%] left-1/2 w-[2px] bg-[#0000001A] transform -translate-x-1/2"></div>

          <div
            className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2  
             w-[20px] h-[20px] rounded-full border-[4px] border-white 
             bg-[#0A40C6] shadow-[0_0_20px_#0041E830] opacity-50 group-hover:opacity-100 transition-all duration-300"
            style={{ top: "13%" }}
          ></div>


          <div
            className={`w-full lg:w-1/2 bg-[#FAFAFA] rounded-[2rem] p-5 flex flex-col gap-6 
            ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}
          >
            <div className="flex items-start gap-4 flex-row-reverse">
              <div className="bg-[#3768E1] p-3 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-[16px] flex items-center justify-center">
                <img
                  src={step.icon}
                  className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]"
                  alt=""
                />
              </div>

              <div className="flex flex-row-reverse items-start gap-4 flex-grow justify-end">
                <div className="flex flex-col">
                  <h1 className="text-[22px] sm:text-[24px] md:text-[26px] font-[700] text-[#000000]">
                    {step.title}
                  </h1>
                  <p className="bg-[#F3F3F3] rounded-[8px] w-[80px] h-[30px] flex items-center justify-center text-[#3D3C3C] text-[14px] font-[300]">
                    {step.duration}
                  </p>
                </div>
                <div className="bg-[#E7ECF9] rounded-[16px] w-[50px] h-[60px] sm:w-[60px] sm:h-[70px] flex items-center justify-center text-[36px] sm:text-[48px] font-[400] text-[#0A40C6]">
                  {step.number}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[18px] sm:text-[20px] md:text-[24px] font-[400] text-[#3D3C3C]">
                {step.description}
              </p>
              <ul className="flex flex-col gap-2">
                {step.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-[14px] sm:text-[16px] font-[300] text-[#3D3C3C]"
                  >
                    <img
                      className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]"
                      src="/assets/img/methodology/Vector (16).svg"
                      alt=""
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center p-4 sm:p-8 md:p-15">
            <img
              src={step.image}
              alt={`Step ${step.number} Visual`}
              className="rounded-[2rem] w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] md:w-[282px] md:h-[282px] max-sm:opacity-100 md:opacity-50 md:group-hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </>
  );
}
