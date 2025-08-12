import { useTranslation } from "react-i18next";

export default function Tools() {
  const { t } = useTranslation();

  const tools = [
    { src: "/assets/img/tools/devicon_php.svg", bgColor: "#777BB3" },
    { src: "/assets/img/tools/devicon_vuejs.svg", bgColor: "#FFFFFF" },
    { src: "/assets/img/tools/logos_javascript.svg", bgColor: "#F7DF1E" },
    { src: "/assets/img/tools/skill-icons_angular-light.svg", bgColor: "#F4F2ED" },
    { src: "/assets/img/tools/logos_nodejs.svg", bgColor: "#FFFFFF" },
    { src: "/assets/img/tools/Vector (17).svg", bgColor: "#E14E1D" },
    { src: "/assets/img/tools/vscode-icons_file-type-reactjs.svg", bgColor: "#FFFFFF" },
    { src: "/assets/img/tools/devicon_php.svg", bgColor: "#777BB3" },
    { src: "/assets/img/tools/devicon_vuejs.svg", bgColor: "#FFFFFF" },
    { src: "/assets/img/tools/logos_javascript.svg", bgColor: "#F7DF1E" },
    { src: "/assets/img/tools/skill-icons_angular-light.svg", bgColor: "#F4F2ED" },
    { src: "/assets/img/tools/logos_nodejs.svg", bgColor: "#FFFFFF" },
    { src: "/assets/img/tools/Vector (17).svg", bgColor: "#E14E1D" },
    { src: "/assets/img/tools/vscode-icons_file-type-reactjs.svg", bgColor: "#FFFFFF" },
    { src: "/assets/img/tools/devicon_php.svg", bgColor: "#777BB3" },
    { src: "/assets/img/tools/devicon_vuejs.svg", bgColor: "#FFFFFF" },
    { src: "/assets/img/tools/logos_javascript.svg", bgColor: "#F7DF1E" },
    { src: "/assets/img/tools/skill-icons_angular-light.svg", bgColor: "#F4F2ED" },
    { src: "/assets/img/tools/logos_nodejs.svg", bgColor: "#FFFFFF" },
    { src: "/assets/img/tools/Vector (17).svg", bgColor: "#E14E1D" },
    { src: "/assets/img/tools/vscode-icons_file-type-reactjs.svg", bgColor: "#FFFFFF" },
    { src: "/assets/img/tools/devicon_php.svg", bgColor: "#777BB3" },
    { src: "/assets/img/tools/devicon_vuejs.svg", bgColor: "#FFFFFF" },
    { src: "/assets/img/tools/logos_javascript.svg", bgColor: "#F7DF1E" },
    { src: "/assets/img/tools/skill-icons_angular-light.svg", bgColor: "#F4F2ED" },
    { src: "/assets/img/tools/logos_nodejs.svg", bgColor: "#FFFFFF" },
    { src: "/assets/img/tools/Vector (17).svg", bgColor: "#E14E1D" },
    { src: "/assets/img/tools/vscode-icons_file-type-reactjs.svg", bgColor: "#FFFFFF" },
  ];

  const doubledTools = [...tools, ...tools];

  return (
    <div className="bg-[#E7ECF933] py-16 px-6 overflow-hidden">
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2 text-[16px] font-[400] text-[#0A40C6] bg-[#E7ECF9] px-4 py-2 rounded-full w-fit">
          <img
            src="/assets/img/services/Layer_x0020_1 (1).svg"
            className="w-[18px] h-[18px]"
            alt=""
          />
          <h1 className="text-[16px] font-[400] text-[#0A40C6]">{t("tools.sectionTag")}</h1>
        </div>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-[43px] font-[700] text-[#000000] leading-[1]">
          {t("tools.sectionTitle")}
        </h1>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-bounceX gap-8">
          {doubledTools.map((tool, index) => (
            <div
              key={index}
              className="w-[179px] h-[80px] rounded-[20px] shadow flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: tool.bgColor }}
            >
              <img
                src={tool.src}
                alt=""
                className="w-[130px] h-[50px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto justify-center">
        {t("tools.partners", { returnObjects: true }).map((partner, i) => (
          <div
            key={i}
            className="flex items-center justify-center p-6 rounded-[12px]"
            style={{
              background:
                i === 0 ? "#FDFBF5" : i === 1 ? "#4EA0571A" : "#F3F5F7",
            }}
          >
            <h1
              className={`text-xl md:text-[20px] font-[600] text-center ${
                i === 0
                  ? "text-[#E0B13E]"
                  : i === 1
                  ? "text-[#4EA057]"
                  : "text-[#102952]"
              }`}
            >
              {partner}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
