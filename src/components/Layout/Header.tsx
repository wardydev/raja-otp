import Ilogo from "/ILogo.svg";
import { Link } from "react-router-dom";
import IHamburger from "/icons/IHamburgerMenu.svg";
import IResize from "/icons/IResize.svg";
import ISettings from "/icons/ISettings.svg";

const Header = () => {
  return (
    <header className="px-4 md:px-10 lg:px-10 py-4">
      <div className="flex justify-between items-center">
        <div className="hover:bg-light p-2 rounded-md hover:bg-opacity-20 hover:cursor-pointer block md:hidden lg:hidden">
          <img src={IHamburger} alt="hamburger menu" />
        </div>
        <Link to="/">
          <img src={Ilogo} alt="Logo Rajaotp" width={150} />
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex lg:flex items-center space-x-4">
            <img
              src={IResize}
              alt="resize-icons"
              className="hover:opacity-50 cursor-pointer"
            />
            <img
              src={ISettings}
              alt="settings-icon"
              className="hover:opacity-50 cursor-pointer"
            />
          </div>
          <span className="h-12 w-[1.5px] bg-[#ffffff41] hidden md:block lg:block"></span>
          <div className="flex items-center space-x-0 lg:space-x-3 hover:bg-light p-2 lg:px-5 rounded-md hover:bg-opacity-20 hover:cursor-pointer">
            <h5 className="font-medium text-light hidden md:block lg:block">
              Wardi
            </h5>
            <img
              src="https://wellgroomedgentleman.com/media/images/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg"
              alt="profile"
              className="rounded-full ml-4"
              width={50}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
