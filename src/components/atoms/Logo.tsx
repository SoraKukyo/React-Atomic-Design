import React from "react";

interface LogoAtomProps {
  src?: string;
  alt: string;
  size?: "small" | "medium" | "large";
}

const Logo: React.FC<LogoAtomProps> = ({
  src = "/assets/icons/PolliFy.svg",
  alt,
  size = "medium",
}) => {
  let widthClass = "w-24"; // Default size is medium
  if (size === "small") {
    widthClass = "w-20 xs:w-24";
  } else if (size === "large") {
    widthClass = "w-36";
  }

  return (
    <div className="">
      <img src={src} alt={alt} className={`logo ${widthClass}`} />
    </div>
  );
};

export default Logo;
