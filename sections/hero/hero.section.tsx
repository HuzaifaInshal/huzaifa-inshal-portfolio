import { userData } from "@/config-and-data/user.data";
import { styles_SectionContainer } from "@/styles/section/section.styles";
import { styles_Typography } from "@/styles/typography/typography.styles";
import { cn } from "@/utils/cn.util";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className={cn(
        styles_SectionContainer,
        "h-[calc(100dvh-104px)]",
        "flex flex-col justify-evenly gap-15"
      )}
    >
      <h1 className={cn(styles_Typography.title, "flex flex-col")}>
        <span className="text-left self-start">{userData.firstName}</span>
        <span className="text-right self-end">{userData.lastName}</span>
      </h1>
      <h2 className={cn(styles_Typography.subTitle, "max-w-175")}>
        {userData.aboutA}
      </h2>
    </section>
  );
};

export default HeroSection;
