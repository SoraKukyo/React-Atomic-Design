import React from "react";
import Search from "../atoms/Search";
import Button from "../atoms/Button";
import CommunityListing from "../Molecules/CommunityListing";
import { ReactComponent as AddIcon } from "./addIcon.svg";
import Logo from "../atoms/Logo";

interface ListItemProps {
  icon: React.ReactNode;
  name: string;
  variant?: "coloredBorder" | "shadow";
  active?: boolean;
  onClick?: () => void;
  hasBorder?: boolean;
}

interface CommunityPanelProps {
  communities: ListItemProps[]; // Replace with your actual data type for the community list
  onSearchChange: (value: string) => void;
  onButtonClick: () => void;
}

const CommunityPanel: React.FC<CommunityPanelProps> = ({
  communities,
  onSearchChange,
  onButtonClick,
}) => {
  return (
    <div className="p-4 flex flex-col space-y-10 w-full lg:w-[260px]">
      <div className="hidden lg:flex h-[60px] pt-4">
        <Logo alt="logo" size="large" />
      </div>

      <div className="w-full">
        <Search onSearch={onSearchChange} placeholder="Search Community" />
      </div>

      <div className="flex flex-row space-x-3 items-center ">
        <Button onClick={onButtonClick} variant="createCommunity">
          <AddIcon />
        </Button>
        <span className="text-secondary">Create Community</span>
      </div>

      <CommunityListing items={communities} />
    </div>
  );
};

export default CommunityPanel;
