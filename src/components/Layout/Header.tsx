import Ilogo from "/ILogo.svg";
import { Link } from "react-router-dom";
import IHamburger from "/icons/IHamburgerMenu.svg";

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
          <p className="text-2xl font-semibold text-light flex items-start">
            <span className="text-xs mr-1 hidden md:block lg:block">Rp</span>{" "}
            <span className="hidden md:block lg:block">100.000.000.00</span>
          </p>
          <span className="h-12 w-[1.5px] bg-[#ffffff41] hidden md:block lg:block"></span>
          <div className="flex items-center space-x-0 lg:space-x-3 hover:bg-light p-2 lg:px-5 rounded-md hover:bg-opacity-20 hover:cursor-pointer">
            <img
              src="https://wellgroomedgentleman.com/media/images/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg"
              alt="profile"
              className="rounded-full"
              width={50}
            />
            <h5 className="font-medium text-light hidden md:block lg:block">
              Wardi
            </h5>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
