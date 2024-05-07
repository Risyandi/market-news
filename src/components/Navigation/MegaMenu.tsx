import { DataMenu } from './DataMenu';
import MenuItem from './MenuItem';
import { NavLink } from 'react-router-dom';

const MegaMenu = ({ handleToggle, clicked, setIsDrawerOpen }: any) => {
  return (
    <div className="flex items-center justify-between">
      <NavLink to={"/"}>
        <div className="flex items-center rounded-full bg-black py-2">
          <div className="text-2xl font-bold text-white px-3">ALPHA</div>
        </div>
      </NavLink>
      <div className="flex items-center px-5">
        {DataMenu.map(({ label, href, children }, index) => {
          return (
            <MenuItem
              key={index}
              {...{
                label,
                href,
                children,
                setIsDrawerOpen,
              }}
              onToggle={() => handleToggle && handleToggle(index)}
              active={clicked === index}
            />
          );
        })}
      </div>
      <div className="lg:ml-8">
        <NavLink to={"/"}>
          <div className="text-black font-semibold px-8 py-2 rounded-full hover:bg-black hover:text-white border-2 border-black">
            Contact Us
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default MegaMenu;
