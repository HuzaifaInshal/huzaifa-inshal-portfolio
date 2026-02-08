import { userData } from "@/config-and-data/user.data";
import { cn } from "@/utils/cn.util";
import ActionItem from "../../components/action-item.component";
import HeaderItem from "./section-components/header-item.component";

const HeaderSection = () => {
  return (
    <div className={cn("h-20 w-full", "flex items-center")}>
      <div className={cn("flex items-center justify-between gap-8", "")}>
        <ActionItem
          title="Currently based in"
          description={userData.location}
        />
        <ActionItem
          title="Say Hello"
          link={{ href: userData.emailTo, text: userData.email }}
        />
        <ActionItem
          title="Switch to"
          onClick={{ click: () => {}, text: "Dark Mode" }}
        />
        <div className={cn("flex items-center gap-8")}>
          <HeaderItem>about</HeaderItem>
          <HeaderItem>experience</HeaderItem>
          <HeaderItem>projects</HeaderItem>
          <HeaderItem>contact</HeaderItem>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
