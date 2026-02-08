import React from "react";
import SectionHeading from "@/components/section-heading.component";
import { cn } from "@/utils/cn.util";
import Collaborate from "./section-components/collaborate.component";
import { styles_SectionContainer } from "@/styles/section/section.styles";

const FooterSection = () => {
  return (
    <>
      <section id="contact" className={cn(styles_SectionContainer)}>
        <div className={cn("container mx-auto")}>
          <SectionHeading>Let&apos;s Collaborate</SectionHeading>

          <div className={cn("mt-8")}>
            <Collaborate />
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
