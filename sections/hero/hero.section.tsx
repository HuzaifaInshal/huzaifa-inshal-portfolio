import { userData } from "@/config-and-data/user.data";
import { styles_Typography } from "@/styles/typography/typography.styles";
import { cn } from "@/utils/cn.util";

const HeroSection = () => {
  return (
    <div className={cn("flex flex-col gap-52")}>
      <h1 className={cn(styles_Typography.title, "flex flex-col")}>
        <span className="text-left self-start">{userData.firstName}</span>
        <span className="text-right self-end">{userData.lastName}</span>
      </h1>
      <h2 className={styles_Typography.subTitle}>{userData.aboutA}</h2>
    </div>
  );
};

export default HeroSection;
