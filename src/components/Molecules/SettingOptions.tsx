import IconWithText from "../atoms/IconWithText";
import { ReactComponent as Setting } from "./setting.svg";
import { ReactComponent as Notification } from "./notification.svg";
import { ReactComponent as User } from "./user.svg";
import { ReactComponent as Icon } from "./Icon.svg";

function SettingOptions() {
  return (
    <div className="flex flex-col bg-white space-y-3 border-y-[1px] border-secondary py-4 px-4">
      <IconWithText icon={<Setting />} text="Edit" onClick={() => {}} />
      <IconWithText
        icon={<Notification />}
        text="Notification"
        onClick={() => {}}
      />
      <IconWithText icon={<User />} text="Add Permission" onClick={() => {}} />
      <IconWithText
        icon={<Icon />}
        text="Leave and delete"
        variant="alert"
        onClick={() => {}}
      />
    </div>
  );
}

export default SettingOptions;
