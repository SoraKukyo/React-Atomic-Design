import React from "react";

interface IconWithTextProps {
  icon: React.ReactNode;
  text: string;
  variant?: "alert";
  onClick: () => void;
}

const IconWithText: React.FC<IconWithTextProps> = ({
  icon,
  text,
  variant,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center  space-x-4 hover:cursor-pointer hover:bg-gray-50 h-10">
      {icon}
      <span
        className={`${
          variant === "alert" ? "text-red-500" : "text-secondary"
        } text-base lg:text-l`}
      >
        {text}
      </span>
    </div>
  );
};

export default IconWithText;
