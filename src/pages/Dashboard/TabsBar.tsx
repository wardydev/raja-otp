import { useState } from "react";
import { itemsTabbar } from "../../utils/helper";

const TabsBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap items-center justify-center lg:justify-normal space-x-0 lg:space-x-4 bg-[rgba(63,82,109,10%)] w-full lg:w-[78%] rounded-md h-auto lg:h-12">
        {itemsTabbar.map((item, index) => (
          <button
            key={index}
            className={`tab-item lg:h-full px-4 py-2 lg:py-0 rounded-md font-medium my-2 lg:my-0 ${
              activeTab === index
                ? "bg-light text-primary-100 shadow-lg shadow-primary-100/10 active"
                : "text-[#3f526d96] hover:text-[#3f526dd9]"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {itemsTabbar.map((item, index) => (
          <div
            key={index}
            className={`${
              activeTab === index ? "block" : "hidden"
            } bg-white p-4 rounded-md`}
          >
            <ul className="list-decimal">{item.content}</ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsBar;
