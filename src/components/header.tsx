import Image from "next/image";
import Logo from "../../public/logo.png";
import { getDictionary } from "@/libs/getDictionary";
import { Locale } from "@/i18n.config";
import SwitchLanguage from "./switch-lang";
import Link from "next/link";

export default async function HeaderComponent({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);
  return (
    <header className="flex flex-row bg-[#D6CFFE] px-10 h-16 w-[89%] rounded-xl bg-opacity-25 justify-between items-center text-white text-xl">
      <Image
        src={Logo}
        alt="Logo"
        width={100}
        height={100}
        className="m-7"
      />
      <nav>
        <ul className="flex flex-row gap-6">
          <li><Link href={`/${lang}`}>{navigation.home}</Link></li>
          <li> <Link href={`/${lang}/about`}>{navigation.about}</Link></li>
          <li> <Link href={`/${lang}/projects`}>{navigation.projects}</Link></li>
          <li> <Link href={`/${lang}/contact`}>{navigation.contact}</Link></li>
        </ul>
      </nav>
      <SwitchLanguage/>
    </header>
  );
}
