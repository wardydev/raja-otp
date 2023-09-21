import { useState } from "react";
import ILogoColorApi from "/ILogoColorApi.svg";
import IWhatsapp from "/icons/IWhatsapp.svg";
import { ApiMenus, ApiMenusContent } from "../../utils/helper";

const ApiDeveloper = () => {
  const [activeMenu, setActiveMenu] = useState(1);

  const renderContent = () => {
    return <div>{ApiMenusContent[activeMenu - 1].content}</div>;
  };

  return (
    <div>
      <div className="min-h-screen w-[360px] bg-[#F5F7FA] shadow-lg py-4 px-7 fixed left-0 top-0 z-20">
        <div>
          <div className="flex flex-col items-center justify-center pr-7">
            <img src={ILogoColorApi} alt="logo" width={180} />
            <span className="text-[gray]">V.1.0.0</span>
          </div>
          <div className="flex items-center border border-[#cfcfcf] rounded-lg mt-10">
            <div className="w-12 h-8 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-[gray]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="cari api"
              className="w-full py-3 rounded-tr-lg rounded-br-lg focus:outline-none font-medium bg-[#F5F7FA]"
            />
          </div>
          <div className="mt-6 flex flex-col justify-between min-h-[480px]">
            <ul>
              {ApiMenus.map((item) => {
                return (
                  <li
                    className={
                      item.id !== activeMenu
                        ? "text-[gray] cursor-pointer py-3 px-4 transition-all"
                        : "bg-[white] font-medium cursor-pointer py-3 px-4 rounded-md transition-all text-primary-100 flex items-center justify-between transition-all"
                    }
                    onClick={() => setActiveMenu(item.id)}
                    key={item.id}
                  >
                    {item.title}
                    {item.id === activeMenu && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-primary-100"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="text-center text-[gray]">
              <p>&copy; copyright RAJAOTP 2023</p>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="ml-[395px] py-12 pr-16">{renderContent()}</div>
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

export default ApiDeveloper;
