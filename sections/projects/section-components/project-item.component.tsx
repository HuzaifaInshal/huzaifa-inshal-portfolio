import React from "react";
import { cn } from "@/utils/cn.util";
import UnderlinedText from "@/components/underlined-text.component";
import type { ProjectItem as PI } from "@/config-and-data/projects.data";

interface Props {
  item: PI;
  index: number;
}

const ProjectItem = ({ item, index }: Props) => {
  const isEven = index % 2 === 0;

  const imageWrapper = cn(
    "bg-black p-6",
    "flex items-center justify-center",
    "overflow-hidden"
  );

  const imageClasses = cn("max-w-full h-auto block");

  return (
    <article
      className={cn("grid grid-cols-1 lg:grid-cols-12 gap-8 items-start")}
    >
      <div
        className={cn(
          isEven ? "lg:col-span-7" : "lg:col-span-5 lg:col-start-2"
        )}
      >
        <div className={imageWrapper}>
          <img src={item.image} alt={item.title} className={imageClasses} />
        </div>
      </div>

      <div
        className={cn(
          isEven ? "lg:col-span-5" : "lg:col-span-5 lg:col-start-8"
        )}
      >
        <h3>{item.title}</h3>
        <p className={cn("mt-2")}>{item.subtitle}</p>
        <p className={cn("mt-4")}>{item.year}</p>

        <div className={cn("mt-6 space-y-4")}>
          <p>{item.short}</p>
          {item.description.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>

        <div className={cn("mt-6")}>
          <UnderlinedText>
            <a href={item.website} target="_blank" rel="noreferrer">
              {item.website.replace(/^https?:\/\//, "")}
            </a>
          </UnderlinedText>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
