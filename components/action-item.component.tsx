import UnderlinedText from "@/components/underlined-text.component";
import { styles_Typography } from "@/styles/typography/typography.styles";
import { cn } from "@/utils/cn.util";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  title: string;
  description?: string;
  link?: {
    text: string;
    href: string;
  };
  onClick?: {
    text: string;
    click: MouseEventHandler<HTMLButtonElement>;
  };
}

const containerClass = cn(styles_Typography["paragraph-base"], "flex flex-col");

const ActionItem = ({ title, description, link, onClick }: Props) => {
  const InnerContent = () => (
    <Fragment>
      <p>{title}</p>
      {description && <p>{description}</p>}
      {link && <UnderlinedText>{link.text}</UnderlinedText>}
      {onClick && <UnderlinedText>{onClick.text}</UnderlinedText>}
    </Fragment>
  );

  if (link) {
    return (
      <Link href={link} className={containerClass}>
        {InnerContent()}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick.click} className={containerClass}>
        {InnerContent()}
      </button>
    );
  }

  return <div className={containerClass}>{InnerContent()}</div>;
};

export default ActionItem;
