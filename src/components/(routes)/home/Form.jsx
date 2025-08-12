import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <div className="max-w-8xl p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1/5 md:p-8 p-4 rounded-[50px] bg-[#093AB4] text-white">
            <form className="space-y-4">
              <div className="flex items-center justify-between gap-4 flex-nowrap mb-6">
                <div className="max-sm:p-4">
                  <h1 className="md:text-[36px] text-[24px] font-[700] text-[#FFFFFF]">{t("form.exclusiveOffer")}</h1>
                  <p className="md:text-[24px] text-[16px] font-[400] max-w-[400px] my-5 text-[#FFFFFF]">
                    {t("form.offerDescription")}
                  </p>
                </div>

                <img
                  src="/assets/img/form/fi_6662930 (1).svg"
                  alt=""
                  className="w-[80px] h-[80px] md:w-[182px] md:h-[182px]"
                />
              </div>

              <div>
                <label className="block text-[20px] font-[400] mb-1">{t("form.fullName")}</label>
                <div className="relative">
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-80">
                    <img src="/assets/img/form/user.svg" alt="user icon" className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder={t("form.fullNamePlaceholder")}
                    className="w-full pr-7 py-3 rounded-md bg-white/15 text-[17px] font-[300] text-white placeholder:text-white/50 outline-none focus:outline-none border border-white/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[20px] font-[400] mb-1">{t("form.email")}</label>
                <div className="relative">
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-80">
                    <img src="/assets/img/form/sms.svg" alt="email icon" className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    placeholder={t("form.emailPlaceholder")}
                    className="w-full pr-7 py-3 rounded-md bg-white/15 text-[17px] font-[300] text-white placeholder:text-white/50 outline-none focus:outline-none border border-white/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[20px] font-[400] mb-1">{t("form.phone")}</label>
                <div className="relative">
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-80">
                    <img src="/assets/img/form/call (1).svg" alt="phone icon" className="w-4 h-4" />
                  </span>
                  <input
                    type=""
                    placeholder={t("form.phonePlaceholder")}
                    className="w-full pr-7 py-3 rounded-md bg-white/15 text-[17px] font-[300] text-white placeholder:text-white/50 outline-none focus:outline-none border border-white/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[20px] font-[400] mb-1">{t("form.projectIdea")}</label>
                <div className="relative">
                  <span className="absolute right-2 top-[17px] transform opacity-80">
                    <img src="/assets/img/form/messages.svg" alt="message icon" className="w-4 h-4" />
                  </span>
                  <textarea
                    placeholder={t("form.projectIdeaPlaceholder")}
                    rows={4}
                    className="w-full pr-7 py-3 rounded-md bg-white/15 text-[17px] font-[300] text-white placeholder:text-white/50 outline-none focus:outline-none border border-white/50"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-white text-[#0A40C6] text-[18px] font-[500] rounded-3xl hover:bg-[#0A40C6] hover:text-white transition cursor-pointer"
              >
                {t("form.submitBtn")}
              </button>
            </form>
          </div>

          <div className="flex-1 flex flex-col items-center relative">

            <div className="bg-[#E7ECF9B2] rounded-[50px] mt-10 relative overflow-visible w-[75%] h-[50%] max-sm:w-[20rem] max-sm:h-[20rem]">
              <img
                src="/assets/img/form/man-white-shirt-is-using-laptop-laptop-saudi-arabia 1.png"
                className="
                  md:absolute md:-top-[150px] md:left-[60%] md:-translate-x-1/2 md:w-[100%] md:h-[548px]
                  w-full h-[100%] relative  max-sm:w-[20rem] max-sm:h-[20rem] max-sm:left-[10%] 
                "
                alt="Man using laptop"
              />
            </div>

            <div className="w-[75%] bg-[#F7BC28] mt-10 p-6 rounded-3xl text-[#0A40C6] max-sm:w-[20rem] max-sm:h-[20rem]">
              <h2 className="text-[36px] font-[500] max-w-[300px] text-[#000000] my-2">
                {t("form.warningTitle")}
              </h2>
              <p className="text-[20px] font-[400] text-[#3D3C3C] max-w-[300px] max-sm:text-[22px]">
                {t("form.warningDescription")}
              </p>
              <h2 className="text-[20px] font-[400] text-[#000000] my-2 max-sm:text-[26px]">
                {t("form.warningFillNow")}
              </h2>
            </div>

          </div>


           
        </div>
      </div>
    </section>
  );
}
