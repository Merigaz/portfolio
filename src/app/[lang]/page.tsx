import { Locale } from "../../i18n.config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main className="bg-bgHome bg-contain bg-no-repeat bg-center grow w-[86%]">
    </main>
  );
}
