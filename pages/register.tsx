import { CommonHead } from 'layouts/components/ui/CommonHead'
import { SiteTitle } from "layouts/components/text";
import SignUp from 'layouts/api/auth/SignUp'

export default function Register() {
  return (
    <div>
      <CommonHead />
      <SiteTitle text="新規登録" />
      <SignUp />
    </div>
  );
}
