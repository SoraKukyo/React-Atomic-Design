import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Additional custom props specific to the button atom
  variant?: "primary";
  outlineColor?: "default" | "black";
  placeholder: string;
}

// Styling Setup
const primary = `h-[40px] min-w-[200px] w-full
                 border-[1px] border-outlinedBorder
                 text-sm text-black placeholder-outlinedBorder
                 py-2 px-4 rounded shadow-sm outline-none border delayed-1000
     `;

const defaultOutlineColor = `focus:border-blue-500 focus:ring-blue-500`;
const blackOutlineColor = `focus:border-black focus:ring-black`;

const getOutlineColor = (outlineColor: string) => {
  switch (outlineColor) {
    case "black":
      return blackOutlineColor;
    default:
      return defaultOutlineColor;
  }
};

function Input({
  variant = "primary",
  outlineColor = "default",
  placeholder,
  ...rest
}: TextInputProps) {
  // Apply appropriate styling based on the variant prop
  let buttonClasses = primary + getOutlineColor(outlineColor);
  return (
    <div>
      <input className={buttonClasses} {...rest} placeholder={placeholder} />
    </div>
  );
}

export default Input;
