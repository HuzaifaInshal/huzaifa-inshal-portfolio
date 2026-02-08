import React from "react";
import { cn } from "@/utils/cn.util";
import UnderlinedText from "@/components/underlined-text.component";
import type { ExperienceItem as EI } from "@/config-and-data/experience.data";

interface Props {
  item: EI;
}

const ExperienceItem = ({ item }: Props) => {
  return (
    <article
      className={cn("grid grid-cols-1 lg:grid-cols-12 gap-6 items-start")}
    >
      <div className={cn("lg:col-span-3")}>
        <h3>{item.company}</h3>
        <p className={cn("mt-4")}>{item.short}</p>
        <p className={cn("mt-4")}>{item.period}</p>
      </div>

      <div className={cn("lg:col-span-5")}>
        <div className={cn("grid grid-cols-2 gap-4")}>
          <div>
            <p>Position</p>
            <p className={cn("mt-4")}>Location</p>
            <p className={cn("mt-4")}>Industry</p>
            <p className={cn("mt-4")}>Website</p>
          </div>

          <div>
            <p>{item.title}</p>
            <p className={cn("mt-4")}>{item.location}</p>
            <p className={cn("mt-4")}>{item.industry}</p>
            <p className={cn("mt-4")}>
              <UnderlinedText>
                <a href={item.website} target="_blank" rel="noreferrer">
                  {item.website.replace(/^https?:\/\//, "")}
                </a>
              </UnderlinedText>
            </p>
          </div>
        </div>
      </div>

      <div className={cn("lg:col-span-4")}>
        <div className={cn("space-y-4")}>
          {item.details.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceItem;
