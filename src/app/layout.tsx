import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import HeaderComponent from "../components/HeaderComponent";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipefy",
  description: "Million of recipes in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <HeaderComponent />
          {children}
        </Providers>
      </body>
    </html>
  );
}
