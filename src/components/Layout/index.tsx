import React, { useState } from "react";
import Header from "./Header";
import Menus from "./Menus";
import { CardWallet } from "..";
import SidebarDrawer from "./SidebarDrawer";
import { ILayout } from "../../utils/interfaces";

const Layout: React.FC<ILayout> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebarDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container min-h-screen bg-gradient-to-l from-primary-100 to-secondary-100 overflow-y-hidden max-w-full w-full">
      <Header handleDrawer={toggleSidebarDrawer} />
      <div className="hidden md:block lg:flex items-center justify-between px-10">
        <Menus />
        <CardWallet />
      </div>
      <p className="text-3xl font-semibold text-light flex items-start justify-center my-4 lg:hidden md:hidden">
        <span className="text-xs mr-1">Rp</span>{" "}
        <span className="">100.000.000.00</span>
      </p>
      <div className="child-container min-h-[709px] h-[709px] bg-light mt-10 lg:mt-[20px] rounded-t-2xl lg:rounded-tl-[40px] lg:rounded-tr-[0] pt-10 pb-6 overflow-auto px-4 md:px-10 lg:px-10">
        <div className="mb-6">{children}</div>
        <div>
          <p>&copy; 2023 - RAJAOTP</p>
        </div>
      </div>
      <SidebarDrawer isOpen={isOpen} handleDrawer={toggleSidebarDrawer} />
    </div>
  );
};

export default Layout;
