import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t, i18n } = useTranslation();

  const projectsData = t("projects", { returnObjects: true });

  const [activeCategory, setActiveCategory] = useState(
    t("projects.items", { lng: "ar", returnObjects: true })[0].category
  );

  useEffect(() => {
    const firstCategory = t("projects.items", {
      lng: i18n.language,
      returnObjects: true,
    })[0].category;
    setActiveCategory(firstCategory);
  }, [i18n.language, t]);

  return (
    <div className="py-16">
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <div className="w-full flex flex-col items-center text-center gap-4 px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:mt-10">
          <div className="flex items-center gap-2 text-sm sm:text-base font-normal text-[#0A40C6] bg-[#E7ECF9] px-3 sm:px-4 py-2 rounded-full w-fit">
            <img src="/assets/img/services/Layer_x0020_1 (1).svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
            <span className="text-[0.6rem] sm:text-[1rem] lg:text-[1.2rem] font-[400] text-[#0A40C6]">{t("projects.badge")}</span>
          </div>

          <h1 className="text-[1rem] sm:text-[1.2rem] md:text-[2.3rem] lg:text-[2.2rem] xl:text-[2.3rem] font-[700] text-black max-w-4xl leading-tight">
            {t("projects.heading")}
          </h1>
        </div>

        <div className="flex gap-4 mb-10 overflow-x-auto flex-nowrap px-4 sm:px-0">
          {projectsData.items.map((proj, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(proj.category)}
              className={`flex-shrink-0 cursor-pointer flex items-center gap-2 
                px-4 sm:px-6 lg:px-10 
                py-2 sm:py-[8px] lg:py-[10px] 
                rounded-[10px] sm:rounded-[12px] lg:rounded-[15px] 
                text-[14px] sm:text-[18px] lg:text-[24px] font-[400] 
                ${activeCategory === proj.category
                  ? "bg-[#0A40C6] text-white"
                  : "bg-white text-[#0A40C6] border border-[#0A40C6]"
                }`}
            >
              <img
                src={
                  i === 0
                    ? "/assets/img/projects/fi_9641463.svg"
                    : i === 1
                    ? "/assets/img/projects/Mobile-Coding.svg"
                    : i === 2
                    ? "/assets/img/projects/fi_4940786.svg"
                    : "/assets/img/projects/fi_2939047.svg"
                }
                alt="icon"
                className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] lg:w-[28px] lg:h-[28px]"
              />
              {proj.category}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#E7ECF933] my-10 p-5">
        {projectsData.items
          .filter((p) => p.category === activeCategory)
          .map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between gap-10"
            >
              <div className="flex-1 w-full flex justify-center order-1 md:order-2">
                <img
                  src={project.image}
                  alt="Project preview"
                  className="w-full max-w-[550px] h-auto rounded-[40px]"
                />
              </div>

              <div className="flex-1 text-right w-full order-2 md:order-1">
                <div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-4 mb-6">
                  <div className="flex-1 text-right">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[45px] font-[700] text-black">
                      {project.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap justify-start">
                    {projectsData.tags.map((tag, i) => (
                      <button
                        key={i}
                        className="bg-[#E7ECF9] text-[#3D3C3C] px-6 py-2 rounded-full text-[14px] sm:text-[16px] font-[400]"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-[16px] sm:text-[20px] md:text-[24px] font-[300] leading-[28px] sm:leading-[32px] md:leading-[40px] text-black mb-6">
                  {projectsData.default_description}
                </p>

                <div className="flex flex-row flex-wrap justify-between w-full gap-4 px-[16px] sm:px-[20px] md:px-[24px] py-[12px] sm:py-[14px] md:py-[16px] rounded-[20px] bg-[#FDFDFF]">
                  {project.stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 ${
                        i !== 0 ? "md:border-r md:border-r-black/10 lg:pr-4" : ""
                      }`}
                    >
                      <img
                        className="bg-[#E7ECF980] rounded-[5px] p-2 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]"
                        src={stat.icon}
                        alt=""
                      />
                      <div>
                        <h1 className="text-[18px] sm:text-[20px] md:text-[24px] font-[500] text-[#0E0D0D]">
                          {stat.value}
                        </h1>
                        <p className="text-[14px] sm:text-[16px] font-[300] text-[#3D3C3C]">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="bg-[#FFFFFF] text-[#0A40C6] hover:bg-[#0A40C6] hover:text-[#FFFFFF] border border-[#0A40C6] px-6 py-2 rounded-full text-[16px] sm:text-[18px] md:text-[20px] font-[500] cursor-pointer mt-10">
                  {projectsData.start_project_btn}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
