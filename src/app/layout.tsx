import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/themeProvider";

const arimo = Arimo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my website"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${arimo.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
