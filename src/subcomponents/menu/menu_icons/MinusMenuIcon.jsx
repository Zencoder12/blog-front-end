import MinusIcon from "../icons/MinusIcon";

const MinusMenuIcon = ({ isHidden, onClick }) => {
  return (
    <div className="menu-icon">
      <button
        className={
          isHidden
            ? "menu-icon menu-icon__container hidden"
            : "menu-icon menu-icon__container"
        }
        onClick={onClick}
      >
        <MinusIcon className="menu-icon menu-icon__icon" />
      </button>
    </div>
  );
};

export default MinusMenuIcon;
