import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header";
import { Locale, i18n } from "../../i18n.config";
import { getDictionary } from "@/libs/getDictionary";
import DictionaryProvider from "@/libs/dictionaryProvider";

const openSans = Open_Sans({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Pineda",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={openSans.className}>
        <DictionaryProvider dictionary={dictionary}>
          <HeaderComponent lang={params.lang} />
          {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}
