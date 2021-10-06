import { useState } from "react";
import { useHistory } from "react-router";
import ArrowMenuIcon from "./subcomponents/menu/menu_icons/ArrowMenuIcon";
import PlusMenuIcon from "./subcomponents/menu/menu_icons/PlusMenuIcon";
import MinusMenuIcon from "./subcomponents/menu/menu_icons/MinusMenuIcon";
import PenMenuIcon from "./subcomponents/menu/menu_icons/PenMenuIcon";

const Menu = ({ isMainPage, toDeletePost, toEditPost }) => {
  const history = useHistory();
  const isDisabled = isMainPage;

  const [isActive, setActive] = useState(false);
  const [isHidden, setHidden] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
    setHidden(!isHidden);
  };

  const toCreatePost = () => {
    history.push("/create");
  };

  return (
    <div className="menu menu__icons-box">
      <ArrowMenuIcon onClick={toggleClass} isActive={isActive} />
      <PlusMenuIcon onClick={toCreatePost} isHidden={isHidden} />
      <MinusMenuIcon
        onClick={toDeletePost}
        isHidden={isHidden}
        isDisabled={isDisabled}
      />
      <PenMenuIcon
        onClick={toEditPost}
        isHidden={isHidden}
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default Menu;
