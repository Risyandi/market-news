import { Key } from "react";
import { Link } from "react-router-dom";

const DropdownContent = ({
  submenuscontent,
  setIsDrawerOpen,
  handleClick,
}: any) => {
  return (
    <div className="flex text-sm justify-around px-10">
      {submenuscontent.map(
        (
          item: { heading: string; submenu: { label: string; href: string }[] },
          index: Key
        ) => (
          <div key={index}>
            <section>
              <div className="flex p-2 text-center">
                <div className="font-bold text-lg mt-3 leading-5 bg-lime-custom text-black px-1">
                  {item.heading}
                </div>
              </div>
              <ul>
                {item.submenu.map(({ label, href }, index) => (
                  <li
                    className="leading-7 p-2 hover:bg-gray-100 rounded-md"
                    key={index}
                    onClick={() => {
                      setIsDrawerOpen && setIsDrawerOpen(false);
                      handleClick();
                    }}
                  >
                    <Link to={href} className="font-normal text-inherit">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )
      )}
    </div>
  );
};

export default DropdownContent;
