import React from "react";
import { render } from "@testing-library/react";
import { CommonAvatar } from "../layouts/components/text";

test("renders CommonAvatar component", () => {
  const mockProps = {
    photoURL: "example.jpg",
    displayname: "John Doe",
  };

  const { getByText, getByAltText } = render(<CommonAvatar {...mockProps} />);

  const displayNameElement = getByText("John Doe");
  expect(displayNameElement).toBeInTheDocument();

  const avatarElement = getByAltText("Remy Sharp");
  expect(avatarElement).toBeInTheDocument();
});
