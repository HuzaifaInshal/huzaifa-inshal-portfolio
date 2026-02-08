import SectionHeading from "@/components/section-heading.component";
import { experienceData } from "@/config-and-data/experience.data";
import { styles_SectionContainer } from "@/styles/section/section.styles";
import { cn } from "@/utils/cn.util";
import ExperienceItem from "./section-components/experience-item.component";

const ExperienceSection = () => {
  return (
    <section id="experience" className={cn(styles_SectionContainer)}>
      <div className={cn("container mx-auto")}>
        <SectionHeading>EXPERIENCE</SectionHeading>

        <div className={cn("mt-8 space-y-16")}>
          {experienceData.map((item, idx) => (
            <ExperienceItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
