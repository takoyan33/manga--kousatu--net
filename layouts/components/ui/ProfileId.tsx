import React from "react";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export type ProfileIdProps = {
  profileImage: string;
  id: number;
  username: string;
  bio: string;
  favorite: string[];
};

export const ProfileId = React.memo(
  ({ id, profileImage, username, bio, favorite }: ProfileIdProps) => {
    return (
      <>
        <div className="m-auto flex max-w-md">
          <div key={id}>
            <Avatar
              className="m-auto max-w-sm border text-center"
              alt="プロフィール"
              sx={{ width: 150, height: 150 }}
              src={profileImage}
            />
          </div>
          <div>
            <p className="m-5 text-lg">
              <AccountBoxIcon /> {username}
            </p>
            <h2 className="m-5">
              <FavoriteIcon /> 好きな漫画
            </h2>
            <div className="m-5">
              {favorite &&
                favorite.map((fav, index) => (
                  <p className="my-2 text-cyan-700" key={index}>
                    ＃{fav}　
                  </p>
                ))}
              {favorite.length === 0 && <p>好きな漫画はありません</p>}
            </div>
          </div>
        </div>
        <div className="m-auto my-10 max-w-md">
          <h2 className="m-5">
            <BorderColorIcon className="mr-2" /> プロフィール
          </h2>
          <p className="m-5">{bio ? bio : "プロフィールはまだありません"}</p>
        </div>
      </>
    );
  }
);
