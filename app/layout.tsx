import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ítalo Rodrigues - ortopedia & neurocirurgia de pequenos animais",
  description: "Dr. Ítalo Rodriguis, pequenos animais, formado pela UPIS-DF, com residência em clínica cirúrgica na Hvet UPIS-DF e aperfeiçoamento em neurocirurgia de pequenos animais pela UNESP, Jaboticabal-SP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="relative">
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}
