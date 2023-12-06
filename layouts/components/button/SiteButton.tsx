import { Button } from "@mui/material";
import Link from "next/link";
import { DOMAttributes, memo } from "react";

export type SiteButtonProps = {
  href?: string;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
  text: string;
  className: string;
  disabled?: boolean;
};

export const SiteButton = memo(
  ({ href = "", onClick, text, className, disabled }: SiteButtonProps) => {
    return (
      <div className={className}>
        <a href={href}>
          <Button
            variant="outlined"
            onClick={onClick}
            disabled={disabled}
            type="submit"
          >
            {text}
          </Button>
        </a>
      </div>
    );
  }
);

SiteButton.displayName = "SiteButton";
