import { RootLayout } from "@/components";
import { LanguageProvider } from "@/providers/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <RootLayout />
    </LanguageProvider>
  );
}

export default App;
