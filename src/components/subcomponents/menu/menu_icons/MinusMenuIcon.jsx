import MinusIcon from "../icons/MinusIcon";

const MinusMenuIcon = ({ isHidden, isDisabled, onClick }) => {
  if (!isHidden) {
    return (
      <div className="menu-icon">
        <button
          className={
            isDisabled
              ? "menu-icon menu-icon__container disabled"
              : "menu-icon menu-icon__container"
          }
          disabled={isDisabled}
          onClick={onClick}
        >
          <MinusIcon className="menu-icon menu-icon__icon" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="menu-icon">
        <button
          className="menu-icon menu-icon__container hidden"
          onClick={onClick}
        >
          <MinusIcon className="menu-icon menu-icon__icon" />
        </button>
      </div>
    );
  }
};

export default MinusMenuIcon;
