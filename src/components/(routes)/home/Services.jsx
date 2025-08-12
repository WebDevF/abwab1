// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// export default function Services() {
//   const { t } = useTranslation();

//   const images = [
//     { id: 1, img: "/assets/img/services/9afa8704-cbe4-4101-a4e4-0bc9f3f10efa 1.png" },
//     { id: 2, img: "/assets/img/services/Bear Sculptures Display.png" },
//     { id: 3, img: "/assets/img/services/Blurred Data Center View.png" },
//     { id: 4, img: "/assets/img/services/Minimalist Chair Design.png" },
//     { id: 5, img: "/assets/img/services/High-Quality Audio Speakers.png" },
//     { id: 6, img: "/assets/img/services/Server Rack Close-Up.png" }
//   ];

//   const [selectedImage, setSelectedImage] = useState(images[0].img);
//   const buttons = t("services.buttons", { returnObjects: true });

//   return (
//     <>
//       <div className="w-full flex flex-col items-center text-center gap-4 px-4 py-10">
//         <div className="flex items-center gap-2 text-[16px] font-[400] text-[#0A40C6] bg-[#E7ECF9] px-4 py-2 rounded-full w-fit">
//           <img src="/assets/img/services/Layer_x0020_1 (1).svg" className="w-[20px] h-[20px]" alt="" />
//           <h1 className="text-[24px] font-[400] text-[#0A40C6]">{t("services.badge")}</h1>
//         </div>
//         <div>
//           <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-[500] text-[#000000]">
//             {t("services.heading")}
//           </h1>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row lg:justify-between lg:items-center justify-center items-center min-h-screen lg:h-screen py-10 px-4 md:px-8 lg:px-15 gap-6 lg:gap-2">
//         <div className="flex flex-col gap-6 w-full md:w-auto">
//           {buttons.map((text, index) => (
//             <button
//               key={index}
//               className={`text-start text-[18px] md:text-[20px] lg:text-[24px] font-[400] px-6 md:px-7 lg:px-8 py-4 lg:py-5 rounded-2xl cursor-pointer ${
//                 selectedImage === images[index].img
//                   ? 'bg-[#0A40C6] text-[#FFFFFF]'
//                   : 'bg-[#F8F8F8] text-[#3D3C3C]'
//               }`}
//               onClick={() => setSelectedImage(images[index].img)}
//             >
//               {text}
//             </button>
//           ))}
//         </div>

//         <div className="flex-1 flex justify-center order-last md:order-none">
//           <img
//             src={selectedImage}
//             alt="Large"
//             className="rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] w-full lg:w-[655px] h-[300px] md:h-[400px] lg:h-[535px] object-cover"
//           />
//         </div>

//         <div className="flex md:flex-col gap-3 justify-center">
//           <img
//             src="/assets/img/services/Frame 1597883614.png"
//             alt="Top Left"
//             className="rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] shadow w-[150px] md:w-[250px] lg:w-[320px] h-[150px] md:h-[150px] lg:h-[203px] object-cover"
//           />
//           <img
//             src="/assets/img/services/happy-man.png"
//             alt="Bottom Left"
//             className="rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] shadow w-[150px] md:w-[250px] lg:w-[320px] h-[150px] md:h-[200px] lg:h-[325px] object-cover"
//           />
//         </div>
//       </div>
//     </>
//   );
// }


"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Services() {
  const { t } = useTranslation()

  const images = [
    { id: 1, img: "/assets/img/services/9afa8704-cbe4-4101-a4e4-0bc9f3f10efa 1.png" },
    { id: 2, img: "/assets/img/services/Bear Sculptures Display.png" },
    { id: 3, img: "/assets/img/services/Blurred Data Center View.png" },
    { id: 4, img: "/assets/img/services/Minimalist Chair Design.png" },
    { id: 5, img: "/assets/img/services/High-Quality Audio Speakers.png" },
    { id: 6, img: "/assets/img/services/Server Rack Close-Up.png" },
  ]

  const [selectedImage, setSelectedImage] = useState(images[0].img)
  const buttons = t("services.buttons", { returnObjects: true })

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center text-center gap-4 px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:mt-10">
        <div className="flex items-center gap-2 text-sm sm:text-base font-normal text-[#0A40C6] bg-[#E7ECF9] px-3 sm:px-4 py-2 rounded-full w-fit">
          <img src="/assets/img/services/Layer_x0020_1 (1).svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
          <span className="text-[0.6rem] sm:text-[1rem] lg:text-[1rem] font-normal text-[#0A40C6]">{t("services.badge")}</span>
        </div>

        <h1 className="text-[1rem] sm:text-[1.2rem] md:text-[2.4rem] lg:text-[2.8rem] xl:text-[2.3rem] font-medium text-black max-w-4xl leading-tight">
          {t("services.heading")}
        </h1>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 ">
        <div className="block lg:hidden">
          <div className="w-full mb-8">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Selected service"
              className="w-full h-64 sm:h-80 object-cover rounded-2xl sm:rounded-3xl"
            />
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {buttons.map((text, index) => (
              <button
                key={index}
                className={`text-left text-base sm:text-lg font-normal px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-200 ${
                  selectedImage === images[index].img
                    ? "bg-[#0A40C6] text-white shadow-lg"
                    : "bg-[#F8F8F8] text-[#3D3C3C] hover:bg-[#EEEEEE]"
                }`}
                onClick={() => setSelectedImage(images[index].img)}
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-6 xl:gap-8 2xl:gap-12 items-center min-h-[600px] xl:min-h-[580px]">
            <div className="col-span-12 lg:col-span-3 xl:col-span-3">
              <div className="flex flex-col gap-7 xl:gap-7">
                {buttons.map((text, index) => (
                  <button
                    key={index}
                    className={`text-right text-[1.6rem] xl:text-[1.3rem] 2xl:text-[1.5rem] font-[700] px-5 xl:px-8 py-4 xl:py-5 2xl:py-6 rounded-2xl xl:rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      selectedImage === images[index].img
                        ? "bg-[#0A40C6] text-white shadow-lg transform scale-[1.02]"
                        : "bg-[#F8F8F8] text-[#3D3C3C] hover:bg-[#EEEEEE] hover:transform hover:scale-[1.01]"
                    }`}
                    onClick={() => setSelectedImage(images[index].img)}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 xl:col-span-6">
              <div className="flex justify-center">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Selected service"
                  className="w-full h-[400px] xl:h-[530px] 2xl:h-[680px] object-cover rounded-3xl xl:rounded-[1rem] shadow-lg transition-all duration-300"
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-3 xl:col-span-3">
              <div className="flex flex-col gap-5 xl:gap-5">
                <img
                  src="/assets/img/services/Frame 1597883614.png"
                  alt="Service feature 1"
                  className="w-full max-w-[280px] xl:max-w-[320px] 2xl:max-w-[380px] h-[180px] xl:h-[200px] 2xl:h-[240px] object-cover rounded-2xl xl:rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200 mx-auto lg:mx-0"
                />
                <img
                  src="/assets/img/services/happy-man.png"
                  alt="Service feature 2"
                  className="w-full max-w-[280px] xl:max-w-[320px] 2xl:max-w-[380px] h-[280px] xl:h-[320px] 2xl:h-[380px] object-cover rounded-2xl xl:rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200 mx-auto lg:mx-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col gap-8">
            <div className="w-full">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Selected service"
                className="w-full h-[400px] object-cover rounded-3xl mx-auto"
              />
            </div>

            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-8">
                <div className="grid grid-cols-2 gap-3">
                  {buttons.map((text, index) => (
                    <button
                      key={index}
                      className={`text-right text-[1.6rem] font-[700] px-6 xl:px-8 py-4 xl:py-5 2xl:py-6 rounded-2xl xl:rounded-3xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                        selectedImage === images[index].img
                          ? "bg-[#0A40C6] text-white shadow-lg"
                          : "bg-[#F8F8F8] text-[#3D3C3C] hover:bg-[#EEEEEE]"
                      }`}
                      onClick={() => setSelectedImage(images[index].img)}
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-span-4">
                <div className="flex flex-col gap-4">
                  <img
                    src="/assets/img/services/Frame 1597883614.png"
                    alt="Service feature 1"
                    className="w-full h-[120px] object-cover rounded-2xl shadow-md"
                  />
                  <img
                    src="/assets/img/services/happy-man.png"
                    alt="Service feature 2"
                    className="w-full h-[180px] object-cover rounded-2xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
