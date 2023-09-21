import { useCallback, useState, ReactNode } from "react";
import { Link } from "react-router-dom";

import IResize from "/icons/IResize.svg";
import IHamburger from "/icons/IHamburgerMenu.svg";
import Ilogo from "/ILogo.svg";
import IWhatsapp from "/icons/IWhatsapp.svg";
import { MenusUnprotectRoutes, SidebarDrawerUnprotectRoutes } from ".";
import { enterFullscreen, exitFullscreen } from "../utils/helper";

const LayoutUnprotectRoutes = ({ children }: { children: ReactNode }) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const toggleFullscreen = useCallback(() => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);
  return (
    <div className="container h-auto lg:h-screen overflow-y-hidden max-w-full w-full relative bg-[#faf3ec]">
      <SidebarDrawerUnprotectRoutes
        handleDrawer={() => setIsOpenDrawer(!isOpenDrawer)}
        isOpen={isOpenDrawer}
      />
      <header className="px-4 md:px-10 lg:px-10 py-6 bg-gradient-to-l from-primary-100 to-secondary-100">
        <div className="flex justify-between items-center">
          <div
            className="hover:bg-light p-2 rounded-md hover:bg-opacity-20 hover:cursor-pointer block md:hidden lg:hidden"
            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
          >
            <img src={IHamburger} alt="hamburger menu" />
          </div>
          <Link to="/">
            <img src={Ilogo} alt="Logo Rajaotp" width={120} />
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex lg:flex items-center space-x-4">
              <div
                className="cursor-pointer hover:bg-[#ffffff4a] rounded p-2"
                onClick={toggleFullscreen}
              >
                <img src={IResize} alt="resize-icons" />
              </div>
            </div>
            <span className="h-12 w-[1.5px] bg-[#ffffff41] hidden md:block lg:block"></span>
          </div>
        </div>
      </header>
      <div className="hidden md:block lg:flex items-end justify-between px-10 bg-gradient-to-l from-primary-100 to-secondary-100 py-4">
        <MenusUnprotectRoutes />
      </div>
      <div className="bg-[#faf3ec] mt-2 lg:mt-5 rounded-t-2xl lg:rounded-tl-[40px] lg:rounded-tr-[0] pt-4 lg:pt-10 pb-6 overflow-auto px-4 md:px-10 lg:px-10 h-full">
        <div className="child-container mb-6">{children}</div>
        <div>
          <p>&copy; 2023 - RAJAOTP</p>
        </div>
      </div>
      <a
        href="https://wa.me/087754175829"
        className="fixed bottom-8 right-8 w-[70px] h-[70px] rounded-full bg-[#479622] hover:bg-[green] p-5 shadow-xl shadow-[#00000033] transition-all"
        target="_blank"
      >
        <img src={IWhatsapp} alt="icon-whatsapp" />
      </a>
    </div>
  );
};

export default LayoutUnprotectRoutes;
