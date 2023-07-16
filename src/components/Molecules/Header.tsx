import React from "react";
import Logo from "../atoms/Logo";
import BackButton from "../atoms/BackButton";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="flex sm:hidden flex-row justify-between items-center relative w-full max-h-[200px] border-b-[1px] border-gray-200 px-4 py-4">
      {/* Render the logo only on the Home page when not on mobile */}
      {currentPage === "Home" && <Logo alt="logo" size="small" />}

      {/* Render back button and page title on the Community and Poll pages */}
      {(currentPage === "Community" || currentPage === "Poll") && (
        <div className="flex flex-row items-center justify-center space-x-2">
          {/* Use a back button icon instead of an image */}
          <BackButton
            onClick={() => {
              // Handle back button click here
              setCurrentPage(
                currentPage === "Community" ? "Home" : "Community"
              );
            }}
          />

          <span className="text-lg text-[#666973] font-bold">
            {currentPage}
          </span>
        </div>
      )}

      <div className="flex flex-row space-x-4 justify-center items-center pr-2 md:pr-4 lg:pr-8">
        <img
          src="/assets/icons/notification.png"
          alt="Notification"
          className="w-6 h-6 xs:w-7 xs:h-7 cursor-pointer opacity-50 hover:opacity-100"
          onClick={() => {
            // Handle notification icon click here
            console.log("Notification icon clicked");
          }}
        />

        <div
          onClick={() => {
            // Handle back button click here
            setCurrentPage(currentPage === "Community" ? "Poll" : currentPage);
          }}
          className="border-[1px] border-secondary h-7 w-7 xs:h-8 xs:w-8 rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default Header;
