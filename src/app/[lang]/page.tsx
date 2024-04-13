import { Locale } from "../../i18n.config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">palote</h1>
        <p className="text-gray-500">palo</p>
      </div>
    </section>
  );
}
