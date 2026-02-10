import ActionItem from "@/components/action-item.component";
import SectionHeading from "@/components/section-heading.component";
import { userData } from "@/config-and-data/user.data";
import AboutDetails from "./section-components/about-details.component";
import { styles_SectionContainer } from "@/styles/section/section.styles";
import { cn } from "@/utils/cn.util";
import { styles_Typography } from "@/styles/typography/typography.styles";

const AboutSection = () => {
  return (
    <section id="about" className={styles_SectionContainer}>
      <div className="container mx-auto">
        <SectionHeading>ABOUT</SectionHeading>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-2 justify-between h-full">
            <p className={cn(styles_Typography["paragraph-thick"], "mb-8")}>
              {userData.aboutB}
            </p>
            <div className="grid grid-cols-3 gap-6 items-start">
              <ActionItem
                title="Product Development"
                description="UX/UI & Design"
              />
              <ActionItem
                title="Say hello"
                link={{
                  href: userData.emailTo,
                  text: userData.email
                }}
              />
              <ActionItem
                title="Explore LinkedIn"
                link={{
                  href: userData.linkedIn,
                  text: "Visit here"
                }}
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <AboutDetails items={userData.aboutC} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
