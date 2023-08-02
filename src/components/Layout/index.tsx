import { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-l from-primary-100 to-secondary-100 overflow-y-hidden">
      <Header />
      <p className="text-3xl font-semibold text-light flex items-start justify-center my-4 lg:hidden md:hidden">
        <span className="text-xs mr-1">Rp</span>{" "}
        <span className="">100.000.000.00</span>
      </p>
      <div className="child-container bg-light min-h-[517px] mt-10 lg:mt-[92px] rounded-t-2xl lg:rounded-tl-[40px] lg:rounded-tr-[0] pt-10 pb-6 overflow-auto px-4 md:px-10 lg:px-10">
        <div className="min-h-[400px] mb-6">{children}</div>
        <div>
          <p>&copy; 2023 - RAJAOTP</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
