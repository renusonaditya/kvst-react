import { menu } from "./config/menu";

import "./MenuBar.scss";

import { useNavigate } from "react-router-dom";

const rootClassName = "menu-bar";

const menuItem = `${rootClassName}__menu-item`;
const menuItemButton = `${menuItem}__button`;
const menuItemOptions = `${menuItem}__options`;
const menuItemOption = `${menuItemOptions}__option`;
const menuItemOptionButton = `${menuItemOption}__button`;

export const MenuBar = () => {
  const navigate = useNavigate();

  const redirectToSelectedPath = (path) => {
    navigate(path);
  };
  return (
    <div className={rootClassName}>
      {menu &&
        menu.length &&
        menu.map((eachItem) => {
          const { label, options, redirectTo } = eachItem;
          return (
            <div className={menuItem} key={`${menuItem}__${label}`}>
              <button
                type="button"
                className={menuItemButton}
                onClick={() => redirectToSelectedPath(redirectTo)}
              >
                {label}
              </button>
              <div className={menuItemOptions}>
                {options &&
                  Boolean(options.length) &&
                  options.map((eachOption) => {
                    const { label } = eachOption;
                    return (
                      <div
                        className={menuItemOption}
                        key={`${menuItemOption}__${label}`}
                      >
                        <button
                          type="button"
                          className={menuItemOptionButton}
                          onClick={() => redirectToSelectedPath(redirectTo)}
                        >
                          {label}
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
};
