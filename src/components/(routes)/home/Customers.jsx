import { useTranslation } from "react-i18next";
import QuoteIcon from "/public/assets/img/customers/Group (2).svg";
import StarIcon from "/public/assets/img/customers/Vector (19).svg";
import StarColoredIcon from "/public/assets/img/customers/Vector (18).svg";

export default function Customers() {
  const { t } = useTranslation();

  const customers = t("customers.items", { returnObjects: true });

  return (
    <div className="py-16 px-6 bg-[#E7ECF9B2]">
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2 text-[16px] font-[400] text-[#0A40C6] bg-[#E7ECF9] px-4 py-2 rounded-full w-fit">
          <img
            src="/assets/img/services/Layer_x0020_1 (1).svg"
            className="w-[20px] h-[20px]"
            alt=""
          />
          <h1 className="text-[20px] font-[400] text-[#0A40C6]">{t("customers.sectionTitle")}</h1>
        </div>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-[43px] font-[700] text-[#000000] leading-[1]">
          {t("customers.mainTitle")}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-7xl mb-8 ">
        {customers.slice(0, 2).map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
        {customers.slice(2).map((item, index) => (
          <Card key={index + 2} item={item} />
        ))}
      </div>
    </div>
  );
}

function Card({ item }) {
  const stars = Array(4).fill(true); 
  return (
    <div
      className="rounded-[12px] p-6 relative shadow-sm"
      style={{
        background: "linear-gradient(260.22deg, #FFFFFF 16.81%, #F1F5FF 99.36%)",
        border: "1px solid #E4EAF2",
      }}
    >
      <div className="absolute -top-7 bg-[#F5F7FD] rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-md">
        <img src={QuoteIcon} alt="quote" className="w-[22px] h-[22px]" />
      </div>

      <div className="flex gap-1 mb-4 justify-end">
        {[...Array(2)].map((_, i) => (
          <img key={`colored-${i}`} src={StarIcon} alt="star" className="w-[22px] h-[22px]" />
        ))}
        {[...Array(3)].map((_, i) => (
          <img key={`gray-${i}`} src={StarColoredIcon} alt="star" className="w-[22px] h-[22px]" />
        ))}
      </div>

      <p className="text-[#000000] text-[24px] font-[400] mb-4">”{item.text}“</p> 

      <div className="w-full h-px bg-[#0000000D] mb-4"></div>

      <div className="flex justify-between items-start mt-4 gap-2">
        <div className="flex flex-col text-right">
          <h3 className="text-[#0A1425] text-[22px] font-[700]">{item.name}</h3>
          <p className="text-[#64728F] text-[16px] font-[400]">{item.role}</p>
        </div>

        <div className="flex flex-col text-right">
          {item.project && <p className="text-[#64728F] text-[16px] font-[400]">{item.project}</p>}
          <p className="text-[#0A1425] text-[22px] font-[500]">{item.platform}</p>
        </div>
      </div>
    </div>
  );
}
