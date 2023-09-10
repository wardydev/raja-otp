import { Link, useLocation } from "react-router-dom";
import { menuNavItems } from "../../utils/helper";

const Menus = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        {menuNavItems.map((tabItem) => (
          <Link
            key={tabItem.path}
            to={tabItem.path}
            className={`menuItem flex items-center space-x-2 px-4 py-4 font-medium rounded-md ${
              location.pathname === tabItem.path
                ? "bg-[white] bg-opacity-30 hover:bg-opacity-40 text-[white] active"
                : "text-[#ffffffb7] hover:text-[white]"
            }`}
          >
            <img
              src={
                location.pathname === tabItem.path
                  ? tabItem.iconActive
                  : tabItem.icon
              }
              alt={tabItem.title}
              className="w-5 h-5"
            />
            <span>{tabItem.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menus;
