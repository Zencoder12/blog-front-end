import MinusIcon from "../icons/MinusIcon";

const MinusMenuIcon = ({ isHidden }) => {
  return (
    <div className="menu-icon">
      <div
        className={
          isHidden
            ? "menu-icon menu-icon__container hidden"
            : "menu-icon menu-icon__container"
        }
      >
        <MinusIcon className="menu-icon menu-icon__icon" />
      </div>
    </div>
  );
};

export default MinusMenuIcon;