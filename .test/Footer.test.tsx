import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "../layouts/components/ui/Footer";
import "@testing-library/jest-dom";

test("renders Footer component", () => {
  const { getByText } = render(<Footer />);
  const currentYear = new Date().getFullYear();
  const footerText = getByText(`Manga Study ©︎${currentYear}`);
  expect(footerText).toBeInTheDocument();
});
