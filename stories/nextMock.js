import React from "react";

// Next.js Linkコンポーネントのモックを作成し、Storybookでのエラーを回避します
const NextLink = ({ children, href }) => {
  return <a href={href}>{children}</a>;
};

export default NextLink;
