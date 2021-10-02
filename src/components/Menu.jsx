import { useState } from "react";
import ArrowMenuIcon from "../subcomponents/menu/menu_icons/ArrowMenuIcon";
import PlusMenuIcon from "../subcomponents/menu/menu_icons/plusMenuIcon";
import MinusMenuIcon from "../subcomponents/menu/menu_icons/MinusMenuIcon";
import PenMenuIcon from "../subcomponents/menu/menu_icons/PenMenuIcon";

const Menu = () => {
  const [isActive, setActive] = useState(false);
  const [isHidden, setHidden] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
    setHidden(!isHidden);
  };

  return (
    <div className={isHidden ? "menu menu__frame hidden" : "menu menu__frame"}>
      <div className="menu menu__icons-box">
        <ArrowMenuIcon onClick={toggleClass} isActive={isActive} />
        <PlusMenuIcon isHidden={isHidden} />
        <MinusMenuIcon isHidden={isHidden} />
        <PenMenuIcon isHidden={isHidden} />
      </div>
    </div>
  );
};

export default Menu;
