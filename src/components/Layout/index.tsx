import React, { useCallback, useState } from "react";
import Header from "./Header";
import Menus from "./Menus";
import { CardWallet } from "..";
import SidebarDrawer from "./SidebarDrawer";
import { ILayout } from "../../utils/interfaces";
import ModalSettings from "./ModalSettings";
import CardDrawer from "./CardDrawer";
import IWhatsapp from "/icons/IWhatsapp.svg";

const Layout: React.FC<ILayout> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggleSidebarDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal, setIsOpen]);

  return (
    <div className="container h-auto lg:h-screen bg-gradient-to-l from-primary-100 to-secondary-100 overflow-y-hidden max-w-full w-full relative pb-0 lg:pb-16">
      <Header
        handleDrawer={toggleSidebarDrawer}
        onCloseModal={handleCloseModal}
      />
      <ModalSettings isOpen={isOpenModal} onClose={handleCloseModal} />
      <div className="hidden md:block lg:flex items-end justify-between px-10">
        <Menus />
        <CardWallet />
      </div>
      <div className="px-6 block lg:hidden">
        <CardDrawer />
      </div>
      <div className="bg-[#faf3ec] mt-10 lg:mt-5 rounded-t-2xl lg:rounded-tl-[40px] lg:rounded-tr-[0] pt-10 pb-6 overflow-auto px-4 md:px-10 lg:px-10 h-4/5">
        <div className="mb-6">{children}</div>
        <div className="flex items-center justify-center">
          <p>&copy; 2023 - RAJAOTP</p>
        </div>
      </div>
      <SidebarDrawer
        isOpen={isOpen}
        handleDrawer={toggleSidebarDrawer}
        openModal={handleCloseModal}
      />
      <a
        href="https://api.whatsapp.com/send/?phone=6285739515629"
        className="fixed bottom-8 right-8 w-[70px] h-[70px] rounded-full bg-[#479622] hover:bg-[green] p-5 shadow-xl shadow-[#00000033] transition-all"
        target="_blank"
      >
        <img src={IWhatsapp} alt="icon-whatsapp" />
      </a>
    </div>
  );
};

export default Layout;
