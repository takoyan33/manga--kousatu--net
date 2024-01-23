/* eslint-disable react/display-name */
import React from "react";

type Props = {
  text: String;
};

//React.memo化
export const SiteTitle: React.VFC<Props> = React.memo(({ text }) => {
  return (
    <h1 className="m-5 my-4 md:my-12 text-center text-2xl font-semibold">
      {text}
    </h1>
  );
});
