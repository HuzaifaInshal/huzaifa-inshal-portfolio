import React from "react";
import { cn } from "@/utils/cn.util";
import UnderlinedText from "@/components/underlined-text.component";
import { userData } from "@/config-and-data/user.data";

const Collaborate = () => {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-6 items-start")}>
      <div className={cn("lg:col-span-7")}>
        <h2>Let&apos;s Collaborate</h2>
      </div>

      <div
        className={cn("lg:col-span-5 flex flex-col items-start lg:items-end")}
      >
        <UnderlinedText>
          <a href={userData.emailTo}>{userData.email}</a>
        </UnderlinedText>

        <div className={cn("mt-8 flex gap-6 text-sm")}>
          <UnderlinedText>
            <a href="#" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </UnderlinedText>
          <UnderlinedText>
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </UnderlinedText>
          <UnderlinedText>
            <a href="#" target="_blank" rel="noreferrer">
              Medium ↗
            </a>
          </UnderlinedText>
        </div>

        <div
          className={cn(
            "mt-8 w-full lg:w-auto flex justify-start lg:justify-end items-center"
          )}
        >
          <p className={cn("text-xs")}>
            © {new Date().getFullYear()} {userData.firstName}{" "}
            {userData.lastName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
