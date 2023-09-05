import CardDrawer from "./CardDrawer";
import { Link, useLocation } from "react-router-dom";
import { menuNavItems } from "../../utils/helper";
import IClose from "/icons/IClose.svg";
import { ISidebarDrawer } from "../../utils/interfaces";
import IKingAvatar from "/icons/IkingAvatar2.png";
import { useGetMeQuery } from "../../api/services/userApi";

const SidebarDrawer: React.FC<ISidebarDrawer> = ({ isOpen, handleDrawer }) => {
  const location = useLocation();
  const { data } = useGetMeQuery();

  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 transition ${
        isOpen ? "bg-[#0000007e] visible" : "bg-[#0000007e] invisible"
      }`}
    >
      <div
        className={`w-80 h-full px-4 bg-[white] text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300 overflow-y-auto z-50`}
      >
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center space-x-4 hover:bg-light rounded-md hover:bg-opacity-20 hover:cursor-pointer">
            <img
              src={IKingAvatar}
              alt="profile"
              className="rounded-full"
              width={50}
            />
            <h5 className="font-medium text-dark capitalize">
              {data?.data.username}
            </h5>
          </div>
          <div className="bg-[#0000003b] rounded p-2" onClick={handleDrawer}>
            <img src={IClose} alt="icon-close" />
          </div>
        </div>
        <CardDrawer />
        <nav className="p-4 mt-4">
          <div>
            {menuNavItems.map((item, index) => {
              return (
                <Link
                  key={index}
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

export default SidebarDrawer;
