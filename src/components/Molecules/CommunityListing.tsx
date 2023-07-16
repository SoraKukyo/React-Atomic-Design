import { FC } from "react";
import ListItem from "../atoms/ListItem";

interface ListItemProps {
  icon: React.ReactNode;
  name: string;
  variant?: "coloredBorder" | "shadow";
  active?: boolean;
  onClick?: () => void;
  hasBorder?: boolean;
}

interface CommunityListingProps {
  items: ListItemProps[];
}

const CommunityListing: FC<CommunityListingProps> = ({ items }) => {
  return (
    <div className="flex flex-col bg-white space-y-2 ">
      <span className="text-black  pb-4 text-base">Your Community</span>
      {items.length === 0 ? (
        <span className="text-secondary  pb-4 text-sm">
          You are not in any community.
        </span>
      ) : (
        items.map((item, index) => <ListItem key={index} {...item} />)
      )}
    </div>
  );
};

export default CommunityListing;
