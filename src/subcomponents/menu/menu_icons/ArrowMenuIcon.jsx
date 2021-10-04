import ArrowIcon from "../icons/ArrowIcon";

const ArrowMenuIcon = ({ isActive, onClick }) => {
  return (
    <div className="menu-icon">
      <button
        className={
          isActive
            ? "menu-icon menu-icon__container arrow active"
            : "menu-icon menu-icon__container arrow"
        }
        onClick={onClick}
      >
        <ArrowIcon className="menu-icon menu-icon__icon" />
      </button>
    </div>
  );
};

export default ArrowMenuIcon;
