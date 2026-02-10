import React from "react";
import { cn } from "@/utils/cn.util";
import UnderlinedText from "@/components/underlined-text.component";
import { userData } from "@/config-and-data/user.data";
import { styles_Typography } from "@/styles/typography/typography.styles";
import ArrowUpright from "@/components/arrow-upright.component";

const Collaborate = () => {
  return (
    <div className={cn("flex flex-col gap-8", "w-full")}>
      <div className={cn("flex items-center justify-between gap-3", "w-full")}>
        <div
          className={cn("lg:col-span-7", styles_Typography["footer-heading-1"])}
        >
          <h2>Let&apos;s Collaborate</h2>
        </div>
        <UnderlinedText>
          <a
            className={styles_Typography["footer-heading-2"]}
            href={userData.emailTo}
          >
            {userData.email}
          </a>
        </UnderlinedText>
      </div>
      <div className={cn("flex items-center justify-between gap-3", "w-full")}>
        <div
          className={cn(
            "w-full lg:w-auto flex justify-start lg:justify-end items-center"
          )}
        >
          <p className={cn(styles_Typography["paragraph-base"], "uppercase")}>
            © {new Date().getFullYear()} {userData.firstName}{" "}
            {userData.lastName}
          </p>
        </div>
        <div
          className={cn("flex gap-6", styles_Typography["paragraph-base-dark"])}
        >
          <UnderlinedText>
            <a href="#" target="_blank" rel="noreferrer">
              GitHub <ArrowUpright />
            </a>
          </UnderlinedText>
          <UnderlinedText>
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpright />
            </a>
          </UnderlinedText>
          <UnderlinedText>
            <a href="#" target="_blank" rel="noreferrer">
              Medium <ArrowUpright />
            </a>
          </UnderlinedText>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
