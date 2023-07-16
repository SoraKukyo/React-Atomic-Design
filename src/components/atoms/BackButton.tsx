import React from "react";

interface BackButtonAtomProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonAtomProps> = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7 cursor-pointer hover:text-opacity-80 text-main"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
};

export default BackButton;
