import { CommonHead, RELEASE_NOTES } from "layouts/components/ui";
import { SiteTitle } from "layouts/components/text";

export default function ReleaseNotes() {
  return (
    <div className="w-11/12 md:w-full m-auto">
      <CommonHead />
      <SiteTitle text="更新履歴" />
      {RELEASE_NOTES.map(({ version, date, features }) => (
        <div key={version}>
          <h2 className="my-4 mt-8 text-xl font-semibold">
            Manga Study {version}
          </h2>
          <p>{date}</p>
          <h4 className="my-2 text-lg">変更点</h4>
          {features.map((feature, index) => (
            <p key={index}>{feature}</p>
          ))}
        </div>
      ))}
      <h3 className="my-4">Github</h3>
      <p className="mb-8 font-semibold">
        <a
          href="https://github.com/takoyan33/manga--kousatu--net/"
          target="_blank"
        >
          https://github.com/takoyan33/manga--kousatu--net/
        </a>
      </p>
    </div>
  );
}
