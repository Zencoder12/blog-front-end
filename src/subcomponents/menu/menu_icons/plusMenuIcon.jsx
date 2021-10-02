import PlusIcon from "../icons/PlusIcon";

const PlusMenuIcon = ({ isHidden }) => {
  return (
    <div className="menu-icon">
      <div
        className={
          isHidden
            ? "menu-icon menu-icon__container hidden"
            : "menu-icon menu-icon__container"
        }
      >
        <PlusIcon className="menu-icon menu-icon__icon" />
      </div>
    </div>
  );
};

export default PlusMenuIcon;
