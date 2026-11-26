"use client";

import { motion } from "framer-motion";
import {
  Database,
  FileKey2,
  Lock,
  Scale,
  ShieldCheck,
} from "lucide-react";

const enterprisePillars = [
  {
    icon: Database,
    tag: "PostgreSQL 16 FORCE RLS",
    title: "Isolamento Multi-Tenant (Row-Level Security)",
    description:
      "Cada transação e regra orçamentária é blindada diretamente no motor do banco de dados via políticas FORCE ROW LEVEL SECURITY por sessão criptográfica.",
  },
  {
    icon: FileKey2,
    tag: "AWS KMS + AES-256-GCM",
    title: "Criptografia de Ponta a Ponta (KMS Envelope Encryption)",
    description:
      "Chaves de dados exclusivas por tenant (DEK) envelopadas pela Master Key no AWS KMS, garantindo sigilo bancário em trânsito e em repouso.",
  },
  {
    icon: Lock,
    tag: "SHA-256 Hash-Chained",
    title: "Trilha de Auditoria Imutável (Append-Only)",
    description:
      "Registro contábil de partidas dobradas e log de auditoria append-only bloqueado contra UPDATE ou DELETE por triggers nativas de integridade.",
  },
  {
    icon: Scale,
    tag: "Art. 18 LGPD • Crypto-Shredding",
    title: "Conformidade Integral LGPD (Lei 13.709/2018)",
    description:
      "Direito ao esquecimento instantâneo via destruição criptográfica de chaves (Crypto-Shredding), portabilidade JSON/CSV e zero PII em telemetria OpenTelemetry.",
  },
];

const AboutSectionOne = () => {
  return (
    <section
      id="seguranca-enterprise"
      className="relative overflow-hidden bg-[#141D14] py-20 text-white md:py-28"
    >
      <div className="container relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#DEFF8B] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#141D14]">
            <ShieldCheck className="h-4 w-4 text-[#141D14]" />
            Segurança Enterprise &amp; Governança Bancária
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            Arquitetura Zero-Trust para{" "}
            <span className="text-[#DEFF8B]">Grandes Empresas e Executivos.</span>
          </h2>
          <p className="text-base font-medium leading-relaxed text-[#D4E0D2] sm:text-lg">
            Construído sobre os mesmos padrões de governança exigidos por instituições
            financeiras: isolamento rígido de dados, criptografia por envelope e conformidade
            auditável com a <strong className="text-white">LGPD (Lei 13.709/2018)</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {enterprisePillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-[24px] border border-[#283828] bg-[#1B271B] p-7 transition-all duration-300 hover:border-[#8CBA51] sm:p-8"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8CBA51]/20 text-[#DEFF8B]">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-[#8CBA51]/40 bg-[#141D14] px-3 py-1 font-mono text-xs font-semibold text-[#DEFF8B]">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="mb-2.5 text-xl font-extrabold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-[#C6D4C4] sm:text-base">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
