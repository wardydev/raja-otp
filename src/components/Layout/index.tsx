import React, { useCallback, useState } from "react";
import Header from "./Header";
import Menus from "./Menus";
import { CardWallet } from "..";
import SidebarDrawer from "./SidebarDrawer";
import { ILayout } from "../../utils/interfaces";
import ModalSettings from "./ModalSettings";

const Layout: React.FC<ILayout> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggleSidebarDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <div className="container h-screen bg-gradient-to-l from-primary-100 to-secondary-100 overflow-y-hidden max-w-full w-full">
      <Header
        handleDrawer={toggleSidebarDrawer}
        onCloseModal={handleCloseModal}
      />
      <ModalSettings isOpen={isOpenModal} onClose={handleCloseModal} />
      <div className="hidden md:block lg:flex items-end justify-between px-10">
        <Menus />
        <CardWallet />
      </div>
      <p className="text-3xl font-semibold text-light flex items-start justify-center my-4 lg:hidden md:hidden">
        <span className="text-xs mr-1">Rp</span>{" "}
        <span className="">100.000.000.00</span>
      </p>
      <div className="bg-[#faf3ec] mt-10 lg:mt-5 rounded-t-2xl lg:rounded-tl-[40px] lg:rounded-tr-[0] pt-10 pb-6 overflow-auto px-4 md:px-10 lg:px-10 h-full">
        <div className="child-container mb-6">{children}</div>
        <div>
          <p>&copy; 2023 - RAJAOTP</p>
        </div>
      </div>
      <SidebarDrawer isOpen={isOpen} handleDrawer={toggleSidebarDrawer} />
    </div>
  );
};

export default Layout;
