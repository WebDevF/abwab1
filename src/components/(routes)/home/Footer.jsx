export default function Footer() {
    return (
        <footer className="bg-[#F9F9F9] py-8 flex flex-col items-center gap-6">
        <div className=" py-5 w-[316px] h-[67px] flex items-center justify-center">
          <img src="/assets/img/footer/logo 5.svg" className="w-[200px] h-[200px]" alt="Logo" />
        </div>
        <div className="border-t border-gray-300 md:w-[816px] w-[316px] h-[1px]"></div> 
        <div className="flex items-center gap-4">
          <img src="/assets/img/footer/Link - tik tok.svg" alt="TikTok" className="w-[36px] h-[36px]" />
          <img src="/assets/img/footer/Link - facebook.svg" alt="Facebook" className="w-[36px] h-[36px]" />
          <img src="/assets/img/footer/Link - instagram.svg" alt="Instagram" className="w-[36px] h-[36px]" />
          <img src="/assets/img/footer/Link - youtube.svg" alt="YouTube" className="w-[36px] h-[36px]" />
          <img src="/assets/img/footer/Link - linkedin.svg" alt="LinkedIn" className="w-[36px] h-[36px]" />
          <img src="/assets/img/footer/Link - pinterest.svg" alt="Pinterest" className="w-[36px] h-[36px]" />
          <img src="/assets/img/footer/Link - behance.svg" alt="Behance" className="w-[36px] h-[36px]" />
        </div>
      </footer>
    );
  }
  