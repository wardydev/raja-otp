import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { menuNavItemsUnprotectRoutes } from "../utils/helper";
import IClose from "/icons/IClose.svg";
import ILogoColor from "/ILogoColorApi.svg";
import { ISidebarDrawer } from "../utils/interfaces";

const SidebarDrawerUnprotectRoutes: React.FC<ISidebarDrawer> = ({
  isOpen,
  handleDrawer,
}) => {
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleCloseDrawer = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === sidebarRef.current) {
      handleDrawer();
    }
  };

  return (
    <div
      className={`z-50 w-full h-screen fixed top-0 left-0 transition ${
        isOpen ? "bg-[#0000007e] visible" : "bg-[#0000007e] invisible"
      }`}
      ref={sidebarRef}
      onClick={handleCloseDrawer}
    >
      <div
        className={`w-80 h-full px-4 bg-[white] text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300 overflow-y-auto z-50`}
      >
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center space-x-4 hover:bg-light rounded-md hover:bg-opacity-20 hover:cursor-pointer">
            <img
              src={ILogoColor}
              alt="profile"
              className="rounded-full"
              width={150}
            />
          </div>
          <div className="bg-[#0000003b] rounded p-2" onClick={handleDrawer}>
            <img src={IClose} alt="icon-close" />
          </div>
        </div>
        <nav className="p-4 mt-4">
          <div>
            {menuNavItemsUnprotectRoutes.map((item) => {
              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className={`flex items-center space-x-3 mb-3 px-4 py-3 rounded-lg ${
                    location.pathname === item.path
                      ? "bg-[#00000013]"
                      : "bg-transparent"
                  }`}
                >
                  <img src={item.iconActive} alt="icon-dashboard" />
                  <span className="text-dark font-medium ">{item.title}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SidebarDrawerUnprotectRoutes;
