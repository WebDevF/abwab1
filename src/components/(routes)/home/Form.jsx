import { useTranslation } from "react-i18next"

export default function Form() {
  const { t } = useTranslation()

  return (
    <section className="py-20">
    <div className="max-w-8xl mx-auto px-6 md:px-20">
      <div className="flex flex-col md:flex-row gap-8 xl:gap-12 items-stretch">
        
      <div className="flex-[30rem] bg-[#093AB4] text-white rounded-[20px] p-6 md:p-8 flex flex-col h-[45rem] 2xl:h-[48rem]">
  <form className="flex flex-col flex-1">
    
    <div className="flex items-center justify-between gap-4 flex-nowrap mb-2">
      <div>
        <h1 className="md:text-[36px] text-[24px] font-[700]">{t("form.exclusiveOffer")}</h1>
        <p className="md:text-[24px] text-[16px] font-[400] max-w-[400px] my-5">
          {t("form.offerDescription")}
        </p>
      </div>
      <img
        src="/assets/img/form/fi_6662930 (1).svg"
        alt=""
        className="w-[80px] h-[80px] md:w-[182px] md:h-[182px]"
      />
    </div>

    <div className="space-y-4 flex-1">
      {[
        {
          label: t("form.fullName"),
          placeholder: t("form.fullNamePlaceholder"),
          icon: "/assets/img/form/user.svg",
          type: "text",
        },
        {
          label: t("form.email"),
          placeholder: t("form.emailPlaceholder"),
          icon: "/assets/img/form/sms.svg",
          type: "email",
        },
        {
          label: t("form.phone"),
          placeholder: t("form.phonePlaceholder"),
          icon: "/assets/img/form/call (1).svg",
          type: "text",
        },
      ].map((field, idx) => (
        <div key={idx}>

          <label className="block text-[20px] font-[400] mb-1">{field.label}</label>
          <div className="relative">
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-80">
              <img src={field.icon} alt="" className="w-4 h-4" />
            </span>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="w-full pr-7 py-3 rounded-md bg-white/15 text-[17px] font-[300] placeholder:text-white/50 outline-none border border-white/50"
            />
          </div>
          </div>
              ))}

              <div>
                <label className="block text-[20px] font-[400] mb-1">{t("form.projectIdea")}</label>
                <div className="relative">
                  <span className="absolute right-2 top-[17px] opacity-80">
                    <img src="/assets/img/form/messages.svg" alt="" className="w-4 h-4" />
                  </span>
                  <textarea
                    placeholder={t("form.projectIdeaPlaceholder")}
                    rows={2}
                    className="w-full pr-7 py-3 rounded-md bg-white/15 text-[17px] font-[300] placeholder:text-white/50 outline-none border border-white/50"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-white text-[#0A40C6] text-[18px] font-[500] rounded-3xl hover:bg-[#0A40C6] hover:text-white transition cursor-pointer"
              >
                {t("form.submitBtn")}
              </button>
            </div>
          </form>
        </div>

  
        <div className="flex-1 flex flex-col justify-center">
          <div className="bg-[#E7ECF9B2] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] relative overflow-hidden">
            <img
              src="/assets/img/form/man-white-shirt-is-using-laptop-laptop-saudi-arabia 1.png"
              alt="Man using laptop"
              className="
                hidden md:block
                w-full h-auto object-cover
                md:w-[28rem] md:h-[20rem]
                lg:w-[32rem] lg:h-[24rem]
                xl:w-[36rem] xl:h-[26rem]
                2xl:w-[40rem] 2xl:h-[30rem]
                relative top-[-3px] lg:left-4 xl:left-7
              "
            />
          </div>
  
          <div className="bg-[#F7BC28] mt-5 p-6 rounded-3xl text-[#0A40C6]">
            <h2 className="text-[28px] md:text-[36px] font-[500] max-w-[300px] text-black my-2">
              {t("form.warningTitle")}
            </h2>
            <p className="text-[16px] md:text-[20px] font-[400] text-[#3D3C3C] max-w-[300px]">
              {t("form.warningDescription")}
            </p>
            <h2 className="text-[16px] md:text-[20px] font-[400] text-black my-2">
              {t("form.warningFillNow")}
            </h2>
          </div>
        </div>
  
      </div>
    </div>
  </section>
  
  )
}
