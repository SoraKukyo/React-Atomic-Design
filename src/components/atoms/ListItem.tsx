interface ListItemProps {
  icon: React.ReactNode;
  name: string;
  variant?: "coloredBorder" | "shadow";
  active?: boolean;
  onClick?: () => void;
  hasBorder?: boolean;
}

function ListItem({
  icon,
  name,
  variant = "shadow",
  active = false,
  onClick,
  hasBorder = false,
}: ListItemProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // Styling Setup
  const getVariant = () => {
    switch (variant) {
      case "coloredBorder":
        return "border-main group hover:bg-gradient-to-r hover:bg-lightBlue hover:cursor-pointer text-secondary ";
      case "shadow":
        return "border-secondary hover:cursor-pointer";
      default:
        return "";
    }
  };

  const containerClasses = `relative flex items-center py-2 sm:px-3  leading-5 ${
    hasBorder ? "border-b border-gray-300" : ""
  } ${
    active &&
    variant === "coloredBorder" &&
    "border-main group hover:bg-gradient-to-r hover:bg-lightBlue hover:cursor-pointer"
  } ${getVariant()} ${
    hasBorder && "border-b-[1px] border-lightSecondary py-4"
  }`;

  const iconClasses = `border-[1px] w-10 h-10 rounded-full flex items-center justify-center  ${
    variant === "coloredBorder"
      ? "border-main text-secondary"
      : "shadow-md text-black"
  }`;

  return (
    <div className={containerClasses} onClick={handleClick}>
      {variant === "coloredBorder" && (
        <div className="group-hover:absolute group-hover:left-0 group-hover:top-0 group-hover:w-[6px] group-hover:h-full group-hover:rounded-br-2xl group-hover:rounded-tr-2xl group-hover:bg-gradient-to-b group-hover:from-main group-hover:to-lightMain" />
      )}
      <div className={iconClasses}>{icon}</div>
      <div className="pl-4 sm:text-base md:text-lg lg:text-base">{name}</div>
    </div>
  );
}

export default ListItem;
