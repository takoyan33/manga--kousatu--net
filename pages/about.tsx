import { CommonHead } from "layouts/components/ui/CommonHead";
import { SiteTitle } from "layouts/components/text";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center w-11/12 md:w-full m-auto">
      <CommonHead />
      <SiteTitle text="About" />
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-6 text-lg">
          Manga Studyでは、漫画の考察などを自由に投稿・閲覧できるwebサイトです。
        </p>
        <ul className="list-disc">
          <li className="mb-2">
            運営者: <span className="font-medium">阿部 舜平</span>
          </li>
          <li className="mb-2">
            メールアドレス:
            <a
              href="mailto:harrier2070@gmail.com"
              className="text-blue-500 hover:underline"
            >
              harrier2070@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
