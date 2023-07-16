import Button from "../atoms/Button";

function CommunityProfile() {
  const communityName = "Moringa";
  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      <div className="w-16 h-16 border rounded-full border-main"></div>
      <div className="pb-4">{communityName}</div>
      <Button variant="createQr">
        <span className="text-white text-sm">Copy Link</span>
      </Button>
    </div>
  );
}

export default CommunityProfile;
