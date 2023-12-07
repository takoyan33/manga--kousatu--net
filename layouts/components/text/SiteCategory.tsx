import { memo } from "react";

export type siteCategoryProps = {
  href: string;
  text: string;
  className: string;
};

export const SiteCategory = memo(({ href, text, className }: siteCategoryProps) => {
  return (
    <span className={className}>
      <a href={href}>{text}</a>
    </span>
  );
});

SiteCategory.displayName = "SiteCategory";
