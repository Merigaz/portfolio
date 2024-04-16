"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n.config";
import Image from "next/image";
import flagSpanish from "/public/es.svg";
import flagEnglish from "/public/en.svg";
export default function SwitchLanguage() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex gap-x-3 mx-7">
      {i18n.locales.map((locale) => {
        switch (locale) {
          case "en": {
            return (
              <li key={locale}>
                <Link
                  href={redirectedPathName(locale)}
                  className="switch-lang"
                >
                  <Image
                    src={flagEnglish}
                    alt="Español"
                    width={20}
                    height={20}
                  />
                  {"English"}
                </Link>
              </li>
            );
          }
          case "es": {
            return (
              <li key={locale}>
                <Link
                  href={redirectedPathName(locale)}
                  className="switch-lang"
                >
                  <Image
                    src={flagSpanish}
                    alt="Español"
                    width={20}
                    height={20}
                  />
                  {"Español"}
                </Link>
              </li>
            );
          }
        }
      })}
    </ul>
  );
}
