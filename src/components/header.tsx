import Image from "next/image";
import Logo from "../../public/logo.png";
import { getDictionary } from "@/libs/getDictionary";
import { Locale } from "@/i18n.config";
import SwitchLanguage from "./switch-lang";

export default async function HeaderComponent({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);
  return (
    <div className="flex bg-[#D6CFFE] h-10 w-full rounded-xl bg-opacity-25">
      <Image
        src={Logo}
        alt="Logo"
        width={68}
        height={72}
        className="py-2 px-2 mx-5"
      />
      <nav>
        <ul className="flex flex-row">
          <li>{navigation.home}</li>
          <li>{navigation.home}</li>
        </ul>
      </nav>
      <SwitchLanguage />
    </div>
  );
}
