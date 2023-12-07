import React from "react";
import { render } from "@testing-library/react";
import { ProfilePost } from "../layouts/components/ui/ProfilePost";
import "@testing-library/jest-dom";

describe("ProfilePost Component", () => {
  const mockProfile = {
    id: 1,
    profileImage: "path_to_image.jpg",
    username: "JohnDoe",
    bio: "Lorem ipsum dolor sit amet",
    favorite: ["Manga1", "Manga2"],
  };

  it("renders profile information correctly", () => {
    const { getByText } = render(
      <ProfilePost
        id={mockProfile.id}
        profileImage={mockProfile.profileImage}
        username={mockProfile.username}
        bio={mockProfile.bio}
        favorite={mockProfile.favorite}
      />
    );

    expect(getByText(`名前：${mockProfile.username}`)).toBeInTheDocument();
    expect(getByText(`プロフィール：${mockProfile.bio}`)).toBeInTheDocument();
    expect(
      getByText(`好きな漫画：${mockProfile.favorite.join(", ")}`)
    ).toBeInTheDocument();
  });
});
