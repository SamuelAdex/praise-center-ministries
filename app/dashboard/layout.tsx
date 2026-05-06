import type { Metadata } from "next";
import "../globals.css";
import Header from "./components/elements/Header";
import Sidebar from "./components/elements/Sidebar";
import BottomNav from "./components/elements/BottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <section className="bg-linear-360 from-purple-950 min-h-screen to-black">
          <Header />
          <Sidebar />
          <BottomNav />
          <main className="md:ml-[10rem] md:px-0 px-5 py-4">
              {children}
          </main>
        </section>
      </body>
    </html>
  );
}
