import { NavLink } from "react-router-dom";
import DropdownContent from "./DropdownContent";

const MenuItem = ({
  label,
  href,
  children,
  active,
  setIsDrawerOpen,
}: any) => {
  const handleClick = () => {
    // Blur the active element to lose focus
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className="group">
      {/* main menu */}
      <div className="p-3 relative flex items-center justify-between">
        <NavLink
          to={href}
          className={({ isActive }) =>
            isActive ? "font-bold" : "hover:font-bold"
          }
          onClick={() => {
            setIsDrawerOpen && setIsDrawerOpen(false);
            handleClick();
          }}
        >
          {label}
        </NavLink>
      </div>

      {/* mega menu */}
      {children && (
        <div
          role="menu"
          className={`group-focus-within:visible group-hover:visible absolute invisible bg-white w-full z-10 py-8 rounded-lg left-0 shadow-md ${
            active ? "h-auto" : "h-0 overflow-hidden md:h-auto"
          }`}
        >
          <DropdownContent
            submenuscontent={children}
            setIsDrawerOpen={setIsDrawerOpen}
            handleClick={handleClick}
          />
        </div>
      )}
    </div>
  );
};

export default MenuItem;
