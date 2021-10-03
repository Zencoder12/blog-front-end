import PlusIcon from "../icons/PlusIcon";

const PlusMenuIcon = ({ isHidden, onClick }) => {
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
        <PlusIcon className="menu-icon menu-icon__icon" />
      </button>
    </div>
  );
};

export default PlusMenuIcon;
