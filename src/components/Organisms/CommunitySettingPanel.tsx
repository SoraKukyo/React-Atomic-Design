import CommunityProfile from "../Molecules/CommunityProfile";
import MemberListing from "../Molecules/MemberListing";
import SettingOptions from "../Molecules/SettingOptions";
import Logo from "../atoms/Logo";

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

function CommunitySettingPanel() {
  return (
    <div className="p-4 flex flex-col space-y-10 w-full lg:w-[260px]">
      <CommunityProfile />
      <SettingOptions />
      <MemberListing items={items} />
    </div>
  );
}

export default CommunitySettingPanel;
