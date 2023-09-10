import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import Ilogo from "/ILogo.svg";
import IHamburger from "/icons/IHamburgerMenu.svg";
import IResize from "/icons/IResize.svg";
import ISettings from "/icons/ISettings.svg";
import { enterFullscreen, exitFullscreen } from "../../utils/helper";
import CardProfile from "./CardProfile";
import { IHeader } from "../../utils/interfaces";
import IKingAvatar from "/icons/IkingAvatar2.png";
import { useGetMeQuery } from "../../api/services/userApi";

const Header: React.FC<IHeader> = ({ handleDrawer }) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isShowCardProfile, setIsShowCardProfile] = useState<boolean>(false);
  const { data } = useGetMeQuery();

  const toggleFullscreen = useCallback(() => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  const toggleShowCardProfile = () => {
    setIsShowCardProfile(!isShowCardProfile);
  };
  return (
    <header className="px-4 md:px-10 lg:px-10 py-2">
      <div className="flex justify-between items-center">
        <div
          className="hover:bg-light p-2 rounded-md hover:bg-opacity-20 hover:cursor-pointer block md:hidden lg:hidden"
          onClick={handleDrawer}
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
            <img
              src={ISettings}
              alt="settings-icon"
              className="hover:opacity-50 cursor-pointer"
            />
          </div>
          <span className="h-12 w-[1.5px] bg-[#ffffff41] hidden md:block lg:block"></span>
          <div className="relative">
            <div
              className="flex items-center space-x-0 lg:space-x-3 hover:bg-light p-2 lg:px-5 rounded-md hover:bg-opacity-20 hover:cursor-pointer"
              onClick={toggleShowCardProfile}
            >
              <h5 className="font-medium text-light hidden md:block lg:block capitalize">
                {data?.data.username}
              </h5>
              <img
                src={IKingAvatar}
                alt="profile"
                className="rounded-full ml-4"
                width={50}
              />
            </div>
            {isShowCardProfile && <CardProfile />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
