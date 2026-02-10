import React from "react";
import { cn } from "@/utils/cn.util";
import UnderlinedText from "@/components/underlined-text.component";
import type { ExperienceItem as EI } from "@/config-and-data/experience.data";
import { styles_Typography } from "@/styles/typography/typography.styles";

interface Props {
  item: EI;
}

const ExperienceItem = ({ item }: Props) => {
  return (
    <article className={cn("flex flex-col gap-6")}>
      <h3 className={styles_Typography["heading-2"]}>{item.company}</h3>
      <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-6 items-start")}>
        <div className={cn("lg:col-span-3")}>
          <p className={cn(styles_Typography["paragraph-base-dark"])}>
            {item.short}
          </p>
          <p className={cn(styles_Typography["paragraph-base-dark"], "mt-4")}>
            {item.period}
          </p>
        </div>

        <div className={cn("lg:col-span-4")}>
          <div className={cn("grid grid-cols-3")}>
            <div
              className={cn("col-span-1", styles_Typography["paragraph-base"])}
            >
              <p>Position</p>
              <p className={cn("mt-4")}>Location</p>
              <p className={cn("mt-4")}>Industry</p>
              <p className={cn("mt-4")}>Website</p>
            </div>

            <div
              className={cn(
                "col-span-2",
                styles_Typography["paragraph-base-dark"]
              )}
            >
              <p>{item.title}</p>
              <p className={cn("mt-4")}>{item.location}</p>
              <p className={cn("mt-4")}>{item.industry}</p>
              <div className={cn("mt-4")}>
                <UnderlinedText>
                  <a href={item.website} target="_blank" rel="noreferrer">
                    {item.website.replace(/^https?:\/\//, "")}
                  </a>
                </UnderlinedText>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1"></div>

        <div
          className={cn("lg:col-span-4", styles_Typography["paragraph-base"])}
        >
          <div className={cn("space-y-4")}>
            {item.details.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceItem;
