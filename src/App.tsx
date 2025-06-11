import { RootLayout } from "@/components";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider>
        <RootLayout />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
