"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n.config";
import { useDictionary } from "@/libs/dictionaryProvider";

export default function SwitchLanguage() {
  const dictionary = useDictionary();
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex gap-x-3 text-xs text-white">
      {i18n.locales.map((locale) => {
        switch (locale) {
          case "en": {
            return (
              <li key={locale}>
                <Link href={redirectedPathName(locale)} >
                  {"English"}
                </Link>
              </li>
            );
          }
          case "es": {
            return (
                <li key={locale}>
                  <Link href={redirectedPathName(locale)}>
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
