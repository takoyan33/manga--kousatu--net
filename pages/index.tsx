import { CommonHead } from "layouts/components/ui/CommonHead";
import { SiteButton } from "layouts/components/button";
import { getAuth } from "firebase/auth";
import { SiteTitle } from "layouts/components/text";
import Image from "next/image";

export default function Top() {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <div>
      <CommonHead />
      <div className="my-10 md:my-20 m-auto flex flex-col flex-wrap justify-center md:flex-row w-11/12 md:w-full">
        <div className="w-100 md:w-6/12">
          <Image
            className="m-auto md:mx-0"
            height={100}
            width={300}
            src="/logo.png"
            alt="ロゴ"
          />
          <p className="m-auto my-6 text-xl">
            Manga Studyでは、人気漫画の考察を
            <br />
            自由に投稿・閲覧できるwebサイトです。
          </p>
        </div>
        <div className="w-100 md:w-6/12">
          <div className="text-center">
            <img
              src="./images/top-home.png"
              className="m-auto my-6 w-64"
              alt="漫画のイラスト"
            />
          </div>
        </div>
      </div>
      <hr></hr>
      <SiteTitle text="機能" />
      <div className="my-10 md:my-20 m-auto flex flex-col flex-wrap justify-center md:flex-row w-11/12 md:w-full">
        <div className="w-full md:w-1/3">
          <Image
            className="m-auto my-6 w-64"
            src="/images/top-1.png"
            alt="漫画のイラスト"
            width={500}
            height={300}
          />
          <h2 className="my-6 text-center text-2xl font-semibold text-sky-600">
            記事の投稿
          </h2>
          <p className="my-6 px-4">
            語りたい漫画の考察があったら、 <br />
            ログインをして、 記事を投稿しましょう。
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <Image
            className="m-auto my-6 w-64"
            src="/images/top-2.png"
            alt="漫画のイラスト"
            width={500}
            height={300}
          />
          <h2 className="my-6 text-center text-2xl font-semibold text-sky-600">
            記事の閲覧
          </h2>
          <p className="my-6 px-4">
            Manga Studyでは、様々な記事が投稿されているため、
            <br />
            記事の閲覧や好きな漫画の考察を検索できます
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <Image
            className="m-auto my-6 w-64"
            src="/images/top-3.png"
            alt="漫画のイラスト"
            width={500}
            height={300}
          />
          <h2 className="my-6 text-center text-2xl font-semibold text-sky-600">
            コメント機能
          </h2>
          <p className="my-6 px-4">
            コメント機能で、考察の内容について語ることができ、
            <br />
            より考察を深められます
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="bg-blue-200 p-10">
        <div className="my-20 my-10 md:my-20 m-auto flex flex-col flex-wrap justify-center md:flex-row w-11/12 md:w-full">
          <div className="w-full md:w-6/12">
            <h2 className="my-6 text-left text-4xl font-semibold text-sky-600">
              Join Manga Study
            </h2>
            <p className="my-6 text-xl">漫画の考察記事を投稿、閲覧しよう</p>
            {!user && (
              <>
                <SiteButton
                  href="/register"
                  text="新規登録"
                  className="w-50 m-auto my-2 inline-block text-left"
                />
                <SiteButton
                  href="/login"
                  text="ログイン"
                  className="w-50 text-lef m-auto my-2 mx-4 inline-block"
                />
              </>
            )}
            <SiteButton
              href="/top"
              text="記事を見る"
              className="w-50 text-lef m-auto my-2 inline-block"
            />
          </div>
          <div className="w-full md:w-6/12">
            <div className="text-center">
              <img
                src="./images/top-search.png"
                className="m-auto my-6 w-64"
                alt="漫画のイラスト"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
