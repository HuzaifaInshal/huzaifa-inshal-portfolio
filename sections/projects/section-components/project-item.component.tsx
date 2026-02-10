import { cn } from "@/utils/cn.util";
import UnderlinedText from "@/components/underlined-text.component";
import type { ProjectItem as PI } from "@/config-and-data/projects.data";
import { styles_Typography } from "@/styles/typography/typography.styles";
import ArrowUpright from "@/components/arrow-upright.component";

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
      style={{
        direction: isEven ? "rtl" : undefined
      }}
      className={cn("grid grid-cols-1 lg:grid-cols-12 gap-8 items-start")}
    >
      <div className={cn("lg:col-span-7")}>
        <div className={imageWrapper}>
          <img src={item.image} alt={item.title} className={imageClasses} />
        </div>
      </div>

      <div className="lg:col-span-2" />

      <div
        style={{ direction: "ltr" }}
        className={cn("lg:col-span-3", "h-full")}
      >
        <h3 className={styles_Typography["heading-3"]}>{item.title}</h3>
        <p className={cn(styles_Typography["paragraph-base-dark"], "mt-2")}>
          {item.subtitle}
        </p>
        <p className={cn(styles_Typography["paragraph-base-dark"], "mt-4")}>
          {item.year}
        </p>

        <div
          className={cn("mt-6 space-y-4", styles_Typography["paragraph-base"])}
        >
          <p>{item.short}</p>
          {item.description.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>

        <div className={cn("mt-6")}>
          <UnderlinedText>
            <a
              href={item.website}
              target="_blank"
              rel="noreferrer"
              className={styles_Typography["paragraph-base-dark"]}
            >
              {item.website.replace(/^https?:\/\//, "")} <ArrowUpright />
            </a>
          </UnderlinedText>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
