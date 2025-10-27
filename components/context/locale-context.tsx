"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/lib/i18n/locales";
import type { LocaleDictionary } from "@/lib/i18n/dictionaries";

type LocaleContextValue = {
  locale: Locale;
  dictionary: LocaleDictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  value,
  children,
}: {
  value: LocaleContextValue;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocaleContent() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocaleContent must be used within a LocaleProvider");
  }
  return context;
}
