import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NavigationBar } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { LocaleProvider } from "@/components/context/locale-context";
import { LanguageSetter } from "@/components/context/language-setter";
import { getDictionary, isLocale } from "@/lib/i18n/dictionaries";
import { locales, type Locale } from "@/lib/i18n/locales";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }
  const locale = lang as Locale;
  const dictionary = getDictionary(locale);
  const url = `https://becapital.swiss/${locale}`;

  return {
    title: {
      default: dictionary.metadata.title,
      template: `%s | BE Capital SA`,
    },
    description: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    openGraph: {
      title: dictionary.metadata.ogTitle,
      description: dictionary.metadata.ogDescription,
      locale: locale === "fr" ? "fr_CH" : locale === "de" ? "de_CH" : "en_CH",
      siteName: "BE Capital SA",
      url,
      type: "website",
    },
    alternates: {
      canonical: url,
      languages: locales.reduce<Record<string, string>>((acc, code) => {
        acc[code] = `https://becapital.swiss/${code}`;
        return acc;
      }, {}),
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dictionary = getDictionary(locale);

  return (
    <LocaleProvider value={{ locale, dictionary }}>
      <LanguageSetter locale={locale} />
      <div className="relative flex min-h-screen flex-col">
        <NavigationBar />
        {children}
        <Footer />
      </div>
    </LocaleProvider>
  );
}
