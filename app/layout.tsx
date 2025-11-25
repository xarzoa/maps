import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme";
import "./globals.css";
import { Pacifico } from "next/font/google";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export const metadata: Metadata = {
  title: "Maps by DuckLabs",
  description: "Get",
};

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${pacifico.variable} mt-20`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
