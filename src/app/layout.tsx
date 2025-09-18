import type { Metadata } from "next";
import "./css/globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { globalData } from "./lib/fetch";

export const metadata: Metadata = {
  title: "TILArt - Today I Learn ART",
  description: "Discover the Stories Behind the Strokes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header title={globalData.title} links={globalData.navigationLink} />
        {children}
        <Footer title={globalData.title}/>
      </body>
    </html>
  );
}
