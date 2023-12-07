import React from "react";
import { render } from "@testing-library/react";
import { SiteCategory } from "../layouts/components/text";

test("renders SiteCategory component", () => {
  const mockProps = {
    href: "/example",
    text: "ワンピース",
    className: "category-link",
  };

  const { getByText } = render(<SiteCategory {...mockProps} />);

  const linkElement = getByText("ワンピース");
  expect(linkElement).toBeInTheDocument();
});
