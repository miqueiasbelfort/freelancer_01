import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ítalo Rodrigues - Ortopedia & Neurocirurgia Veterinária",
  description: "Bem-vindo ao consultório do Dr. Ítalo Rodrigues, especializado em ortopedia e neurocirurgia veterinária. Oferecemos cuidados especializados e avançados para seus animais de estimação, garantindo o melhor tratamento para suas necessidades ortopédicas e neurológicas. Conte com nossa experiência e dedicação para cuidar da saúde e bem-estar do seu companheiro peludo.",
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
