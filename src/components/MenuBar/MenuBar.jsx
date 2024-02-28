import { menu } from "./config/menu";

import { useNavigate, useLocation } from "react-router-dom";

import "./MenuBar.scss";

const rootClassName = "menu-bar";

const menuItem = `${rootClassName}__menu-item`;
const menuItemButton = `${menuItem}__button`;
const menuItemOptions = `${menuItem}__options`;
const menuItemOption = `${menuItemOptions}__option`;
const menuItemOptionButton = `${menuItemOption}__button`;
const menuItemActiveButton = `${menuItemButton}--active`;

export const MenuBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const scrollIntoView = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    } else {
      console.error(`Element with id '${id}' not found.`);
    }
  };

  const redirectToSelectedPath = (path) => {
    navigate(path);
  };
  return (
    <div className={rootClassName}>
      {menu &&
        menu.length &&
        menu.map((eachItem) => {
          const { label, options, redirectTo } = eachItem;

          const isActiveTab = redirectTo === pathname;
          return (
            <div className={menuItem} key={`${menuItem}__${label}`}>
              <button
                type="button"
                className={`${menuItemButton} ${
                  isActiveTab && menuItemActiveButton
                }`}
                onClick={() => redirectToSelectedPath(redirectTo)}
              >
                {label}
              </button>
              <div className={menuItemOptions}>
                {options &&
                  Boolean(options.length) &&
                  options.map((eachOption) => {
                    const {
                      label,
                      scrollId,
                      redirectTo: itemRedirectTo,
                    } = eachOption;
                    return (
                      <div
                        className={menuItemOption}
                        key={`${menuItemOption}__${label}`}
                      >
                        <button
                          type="button"
                          className={menuItemOptionButton}
                          onClick={async () => {
                            if (itemRedirectTo) {
                              redirectToSelectedPath(itemRedirectTo);
                              return;
                            }
                            await redirectToSelectedPath(redirectTo);
                            scrollIntoView(scrollId);
                          }}
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
