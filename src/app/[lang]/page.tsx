import { Locale } from "../../i18n.config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <h1>home</h1>
  );
}
