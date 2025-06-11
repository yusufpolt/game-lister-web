import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/contexts/LanguageContext";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<"tr" | "en">("tr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "tr" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleSetLanguage = (lang: "tr" | "en") => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
