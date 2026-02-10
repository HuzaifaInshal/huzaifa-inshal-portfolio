import { userData } from "@/config-and-data/user.data";
import { cn } from "@/utils/cn.util";
import ActionItem from "../../components/action-item.component";
import HeaderItem from "./section-components/header-item.component";

const HeaderSection = () => {
  return (
    <div
      className={cn("h-22 w-full", "mt-4", "flex items-center justify-center")}
    >
      <div className={cn("flex justify-between gap-8", "w-full")}>
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
        <div className={cn("flex gap-10")}>
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
