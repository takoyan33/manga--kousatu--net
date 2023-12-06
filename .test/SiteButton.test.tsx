import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SiteButton } from "../layouts/components/button/SiteButton";
import "@testing-library/jest-dom";
import React from "react";

describe("SiteButton Component", () => {
  test("renders button with correct text", () => {
    render(<SiteButton text="Click me!" className="test-button" />);
    const buttonElement = screen.getByRole("button", { name: /Click me!/i });
    expect(buttonElement).toBeInTheDocument();
  });

  // test("handles click event", () => {
  //   const handleClick = jest.fn();
  //   render(
  //     <SiteButton
  //       text="Click me!"
  //       className="test-button"
  //       onClick={handleClick}
  //     />
  //   );
  //   const buttonElement = screen.getByRole("button", { name: /Click me!/i });
  //   userEvent.click(buttonElement);
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });
});
