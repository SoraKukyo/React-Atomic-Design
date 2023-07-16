import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Additional custom props specific to the button atom
  variant?:
    | "primary"
    | "login"
    | "createCommunity"
    | "createPoll"
    | "createQr"
    | "delete";
}

// Styling Setup
const primary = `h-[40px] min-w-[200px] w-full
                 bg-main hover:bg-blue-500
                 text-white py-2 px-4 rounded shadow-lg delay-100`;

const loginButton = `h-[40px] min-w-[200px] w-full
                     bg-main hover:bg-blue-500
                     text-white py-2 px-4 rounded shadow-lg delay-100`;

const createCommunityButton = `w-[40px] h-[40px] 
                               rounded-full bg-main hover:bg-blue-500 delay-100`;

const createPollButton = `w-[115px] h-[36px] 
                          bg-main hover:bg-blue-500 rounded-full delay-100`;

const createQrButton = `w-[90px] h-[30px] 
                        bg-main hover:bg-blue-500 rounded-sm delay-100`;

const deleteButton = `w-[100px] h-[36px] bg-alert 
                      hover:bg-opacity-80 rounded-full delay-100`;

const getVariants = (variant: string) => {
  switch (variant) {
    case "login":
      return loginButton;
    case "createCommunity":
      return createCommunityButton;
    case "createPoll":
      return createPollButton;
    case "createQr":
      return createQrButton;
    case "delete":
      return deleteButton;
    default:
      return primary;
  }
};

function Button({
  variant = "primary",
  children,
  onClick,
  ...rest
}: ButtonProps) {
  // Apply appropriate styling based on the variant prop
  let buttonClasses = getVariants(variant);

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      <span className="flex items-center justify-center">{children}</span>
    </button>
  );
}

export default Button;
