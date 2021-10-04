import PenIcon from "../icons/PenIcon";

const PenMenuIcon = ({ isHidden, onClick }) => {
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
        <PenIcon className="menu-icon menu-icon__icon" />
      </button>
    </div>
  );
};

export default PenMenuIcon;
