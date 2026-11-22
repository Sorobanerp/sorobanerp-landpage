import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "PFM Pulse • Inteligência Financeira & Engenharia Soroban",
  description:
    "Clareza financeira diária com zero complexidade de planilhas. Gestão financeira pessoal e governança enterprise projetadas pela Soroban.",
  openGraph: {
    title: "PFM Pulse • Inteligência Financeira & Engenharia Soroban",
    description:
      "Clareza financeira diária com zero complexidade de planilhas. Ritmo diário, auditoria de faturas via IA e conformidade integral LGPD.",
    url: "https://sorobanerp.com.br",
    siteName: "Soroban & PFM Pulse",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-[#F7F9F5] text-[#141D14] antialiased">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
