import PenIcon from "../icons/PenIcon";

const PenMenuIcon = ({ isHidden }) => {
  return (
    <div className="menu-icon">
      <div
        className={
          isHidden
            ? "menu-icon menu-icon__container hidden"
            : "menu-icon menu-icon__container"
        }
      >
        <PenIcon className="menu-icon menu-icon__icon" />
      </div>
    </div>
  );
};

export default PenMenuIcon;
