import React from "react";
import { render } from "@testing-library/react";
import { AccountMenu } from "../layouts/components/ui/AccountMenu";

describe("AccountMenu Component", () => {
  const mockOnClick = jest.fn();

  it("renders account menu options correctly", () => {
    const { getByText } = render(<AccountMenu onClick={mockOnClick} />);

    expect(getByText("プロフィールを変更する")).toBeInTheDocument();
    expect(getByText("パスワードを変更する")).toBeInTheDocument();
    expect(getByText("アカウントを退会する")).toBeInTheDocument();
  });
});
