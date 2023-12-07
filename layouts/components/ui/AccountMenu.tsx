import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";

export const AccountMenu = (onClick: any) => (
  <List
    sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        アカウントメニュー
      </ListSubheader>
    }
  >
    <ListItemButton>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <a href="/profile/edit"> プロフィールを変更する</a>
    </ListItemButton>
    {/* <button className="m-5">
          <a href="/profile/emailedit">メールアドレスを変更する</a>
        </button> */}
    <ListItemButton>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <a href="/profile/edit/password">パスワードを変更する</a>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <button className="" onClick={onClick}>
        アカウントを退会する
      </button>
    </ListItemButton>
  </List>
);
