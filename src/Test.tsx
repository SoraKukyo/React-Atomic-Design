import { useState } from "react";
import Header from "./components/Molecules/Header";
import Logo from "./components/atoms/Logo";
import CommunityListing from "./components/Molecules/CommunityListing";
import CommunityPanel from "./components/Organisms/CommunityPanel";
import IconWithText from "./components/atoms/IconWithText";
import { ReactComponent as Icon } from "./logo.svg";
import SettingOptions from "./components/Molecules/SettingOptions";
import MemberListing from "./components/Molecules/MemberListing";
import CommunityProfile from "./components/Molecules/CommunityProfile";

const items = [
  {
    icon: <Logo alt="logo" />, // Replace with your custom icon component
    name: "KIT",
    variant: "coloredBorder" as "coloredBorder",
    active: true,
    onClick: () => {
      // Handle item click for Community 1
      console.log("Community 1 clicked");
    },
    hasBorder: false,
  },
  {
    icon: <Logo alt="logo" />, // Replace with your custom icon component
    name: "Moringa",
    variant: "coloredBorder" as "coloredBorder",
    active: true,
    onClick: () => {
      // Handle item click for Community 1
      console.log("Community 1 clicked");
    },
    hasBorder: false,
  },
  {
    icon: <Logo alt="logo" />, // Replace with your custom icon component
    name: "PVK",
    variant: "coloredBorder" as "coloredBorder",
    active: false,
    onClick: () => {
      // Handle item click for Community 1
      console.log("Community 1 clicked");
    },
    hasBorder: false,
  },
  {
    icon: <Logo alt="logo" />, // Replace with your custom icon component
    name: "Audithorium",
    variant: "coloredBorder" as "coloredBorder",
    active: false,
    onClick: () => {
      // Handle item click for Community 1
      console.log("Community 1 clicked");
    },
    hasBorder: false,
  },

  // Add more items as needed
];

function Test() {
  const [currentPage, setCurrentPage] = useState("Poll");
  function onSearch(value: string) {}
  function onClick() {}

  return (
    <div className="w-screen h-screen  ">
      <CommunityProfile />
    </div>
  );
}

export default Test;
