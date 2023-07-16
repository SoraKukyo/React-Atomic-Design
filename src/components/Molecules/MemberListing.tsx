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

interface MemberListingProps {
  items: ListItemProps[];
}

const MemberListing: FC<MemberListingProps> = ({ items }) => {
  return (
    <div className="flex flex-col bg-white space-y-2 ">
      <span className="text-black  pb-4 text-base">Members</span>
      {items.length === 0 ? (
        <span className="text-secondary  pb-4 text-sm">
          You are not in any community.
        </span>
      ) : (
        items.map((item, index) => (
          <ListItem key={index} {...item} variant="shadow" hasBorder={true} />
        ))
      )}
    </div>
  );
};

export default MemberListing;
