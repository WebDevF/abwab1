import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t, i18n } = useTranslation();

  const projectsData = t("projects", { returnObjects: true });

  // نخزن الـ category الأساسي بناءً على أول عنصر في اللغة العربية
  const [activeCategory, setActiveCategory] = useState(
    t("projects.items", { lng: "ar", returnObjects: true })[0].category
  );

  // لما اللغة تتغير نحدث activeCategory بناءً على نفس الـ index
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
        {projectsData.items.map((proj, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(proj.category)}
            className={`cursor-pointer flex items-center gap-2 px-10 py-[10px] rounded-[15px] text-[24px] font-[400] ${
              activeCategory === proj.category
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
              className="w-[28px] h-[28px]"
            />
            {proj.category}
          </button>
        ))}
      </div>

      <div className="bg-[#E7ECF933] my-10 p-5">
        {projectsData.items
          .filter((p) => p.category === activeCategory)
          .map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between gap-10"
            >
              <div className="flex-1 text-right w-full">
                <div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-4 mb-6">
                  <div className="flex-1 text-right">
                    <h2 className="text-[45px] font-[700] text-black">
                      {project.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap justify-start">
                    {projectsData.tags.map((tag, i) => (
                      <button
                        key={i}
                        className="bg-[#E7ECF9] text-[#3D3C3C] px-6 py-2 rounded-full text-[16px] font-[400]"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-[24px] font-[300] leading-[40px] text-black mb-6">
                  {projectsData.default_description}
                </p>

                <div
                  className="flex flex-col md:flex-row justify-between w-full px-[24px] py-[16px] rounded-[20px]"
                  style={{
                    background: `linear-gradient(0deg, rgba(24, 89, 253, 0.47), rgba(221, 231, 255, 0.47)),
                                 linear-gradient(0deg, rgba(255, 255, 255, 0), rgb(255, 255, 255))`,
                  }}
                >
                  {project.stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 ${
                        i !== 0 ? "md:border-r md:border-r-black/10 lg:pr-4" : ""
                      } mt-4 md:mt-0`}
                    >
                      <img
                        className="bg-[#E7ECF980] rounded-[5px] p-2 w-[40px] h-[40px]"
                        src={stat.icon}
                        alt=""
                      />
                      <div>
                        <h1 className="text-[24px] font-[500] text-[#0E0D0D]">
                          {stat.value}
                        </h1>
                        <p className="text-[16px] font-[300] text-[#3D3C3C]">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="bg-[#FFFFFF] text-[#0A40C6] hover:bg-[#0A40C6] hover:text-[#FFFFFF] border border-[#0A40C6] px-6 py-2 rounded-full text-[20px] font-[500] cursor-pointer mt-10">
                  {projectsData.start_project_btn}
                </button>
              </div>

              <div className="flex-1 w-full mt-10 md:mt-0 flex justify-center">
                <img
                  src={project.image}
                  alt="Project preview"
                  className="w-full max-w-[550px] h-auto rounded-[40px] "
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
