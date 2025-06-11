import { Toaster } from "@/components/ui/sonner";
import Header from "./Header";
import Footer from "./Footer";
import background from "@/assets/img/background.png";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#090909] bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <main className="container mx-auto pt-24 pb-20">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default RootLayout;
