import Avatar from "@mui/material/Avatar";
import React from "react";

export type avatarProps = {
  photoURL: string;
  displayname: string;
};

//React.memo化
export const CommonAvatar = React.memo(({ photoURL, displayname }: avatarProps) => {
  return (
    <>
      <Avatar alt="Remy Sharp" src={photoURL} />
      <span className="text-xl">{displayname}</span>
    </>
  );
});

