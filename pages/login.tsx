import LoginAuth from "layouts/api/auth/LoginAuth";
import { CommonHead } from "layouts/components/ui";
import { SiteTitle } from "layouts/components/text";

export default function Login() {
  return (
    <div>
      <CommonHead />
      <SiteTitle text="ログイン" />
      <LoginAuth />
    </div>
  );
}
