"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
} from "lucide-react";

type HorizonKey = "hoje" | "semana" | "mes";

const HORIZON_DATA: Record<
  HorizonKey,
  {
    label: string;
    freeToSpend: string;
    allowanceHint: string;
    committedPct: number;
    forecastBadge: string;
  }
> = {
  hoje: {
    label: "Hoje",
    freeToSpend: "R$ 236,00",
    allowanceHint: "Ritmo seguro diário mantendo R$ 3.400,00 de reserva no mês",
    committedPct: 62,
    forecastBadge: "Fechamento Previsto dentro da meta (+18,4% margem livre)",
  },
  semana: {
    label: "Semana",
    freeToSpend: "R$ 1.652,00",
    allowanceHint: "Disponível para os próximos 7 dias (Competência vs. Caixa sincronizados)",
    committedPct: 68,
    forecastBadge: "Fechamento Previsto dentro da meta (0 estouros de teto)",
  },
  mes: {
    label: "Mês",
    freeToSpend: "R$ 7.080,00",
    allowanceHint: "Livre para gastar após fixos liquidados, faturas atuais e parcelas futuras",
    committedPct: 61,
    forecastBadge: "Fechamento Previsto dentro da meta • 97,6% categorizado via IA",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const [horizon, setHorizon] = useState<HorizonKey>("mes");
  const activeMetrics = HORIZON_DATA[horizon];

  return (
    <section
      id="produto"
      className="relative overflow-hidden bg-[#F7F9F5] pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Subtle Organic Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[540px] w-[960px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#DEFF8B]/45 via-[#8CBA51]/15 to-transparent blur-3xl"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Editorial Headline & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Lime Insight Glow Badge (#DEFF8B with #141D14 text) */}
            <motion.div variants={itemVariants} className="mb-6 inline-flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#8CBA51]/40 bg-[#DEFF8B] px-4 py-1.5 text-xs font-bold tracking-wide text-[#141D14] shadow-sm sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#141D14]" />
                <span>PFM Pulse • Inteligência Financeira &amp; Engenharia Soroban</span>
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-extrabold tracking-tight text-[#141D14] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
            >
              Clareza Financeira Diária.{" "}
              <span className="text-[#6E9839]">Zero Complexidade de Planilhas.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-9 max-w-2xl text-lg font-medium leading-relaxed text-[#4D5E4D] sm:text-xl"
            >
              Projetado pela <strong className="font-semibold text-[#141D14]">Soroban</strong> para
              profissionais exigentes, famílias e organizações que exigem visão exata entre{" "}
              <strong className="font-semibold text-[#141D14]">Competência e Caixa</strong>,
              auditoria de faturas em memória RAM e decisão financeira em 10 segundos por dia.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/#eficiencia-ia"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#8CBA51] px-7 py-4 text-base font-bold text-[#141D14] shadow-pulse transition-all duration-200 hover:bg-[#7AA842] hover:shadow-pulseHover"
              >
                <span>Conhecer o Ecossistema PFM Pulse</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E6ECE2] bg-white px-7 py-4 text-base font-bold text-[#141D14] transition-all duration-200 hover:border-[#8CBA51]"
              >
                <span>Solicitar Demonstração Executiva</span>
              </Link>
            </motion.div>

            {/* Quick Value Strip */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-[#E6ECE2] pt-7"
            >
              <div>
                <p className="font-mono text-2xl font-extrabold tabular-nums text-[#141D14]">
                  10s / dia
                </p>
                <p className="text-xs font-semibold text-[#4D5E4D]">
                  Leitura diária de ritmo sem planilhas
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl font-extrabold tabular-nums text-[#141D14]">
                  &lt; 5%
                </p>
                <p className="text-xs font-semibold text-[#4D5E4D]">
                  Meta máxima em gastos não categorizados
                </p>
              </div>
              <div>
                <p className="font-mono text-2xl font-extrabold tabular-nums text-[#141D14]">
                  100% RLS
                </p>
                <p className="text-xs font-semibold text-[#4D5E4D]">
                  Isolamento criptográfico e conformidade LGPD
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Floating UI Showcase Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="lg:col-span-5"
          >
            <div className="rounded-[24px] border border-[#E6ECE2] bg-white p-6 shadow-pulse sm:p-8">
              {/* Card Top Header */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#DEFF8B] text-[#141D14]">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#4D5E4D]">
                      PFM Pulse • Painel Executivo
                    </p>
                    <p className="text-sm font-bold text-[#141D14]">
                      Ritmo: Hoje • Semana • Mês
                    </p>
                  </div>
                </div>

                {/* Interactive Horizon Pill Selector */}
                <div
                  role="tablist"
                  aria-label="Seletor de Ritmo Financeiro"
                  className="inline-flex rounded-full border border-[#E6ECE2] bg-[#F7F9F5] p-1"
                >
                  {(["hoje", "semana", "mes"] as HorizonKey[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={horizon === key}
                      onClick={() => setHorizon(key)}
                      className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                        horizon === key
                          ? "bg-[#141D14] text-[#DEFF8B] shadow-sm"
                          : "text-[#4D5E4D] hover:text-[#141D14]"
                      }`}
                    >
                      {HORIZON_DATA[key].label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Big Number Display */}
              <div className="mb-6 rounded-2xl border border-[#E6ECE2] bg-[#F7F9F5] p-5">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4D5E4D]">
                    Livre para Gastar ({activeMetrics.label})
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#DEFF8B] px-2.5 py-0.5 text-[11px] font-bold text-[#141D14]">
                    <TrendingUp className="h-3 w-3" />
                    Ritmo Saudável
                  </span>
                </div>

                <p className="font-mono text-3xl font-extrabold tracking-tight tabular-nums text-[#141D14] sm:text-4xl">
                  Livre para Gastar: R$ 7.080,00
                </p>
                {horizon !== "mes" && (
                  <p className="mt-1 font-mono text-sm font-bold tabular-nums text-[#6E9839]">
                    Quota {activeMetrics.label}: {activeMetrics.freeToSpend}
                  </p>
                )}
                <p className="mt-2 text-xs font-medium text-[#4D5E4D]">
                  {activeMetrics.allowanceHint}
                </p>
              </div>

              {/* Cash vs Competence Breakdown */}
              <div className="mb-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[#E6ECE2] bg-white p-4">
                  <span className="text-xs font-semibold text-[#4D5E4D]">
                    Entradas Realizadas
                  </span>
                  <p className="mt-1 font-mono text-lg font-extrabold tabular-nums text-[#141D14]">
                    R$ 18.200,00
                  </p>
                  <span className="mt-1 inline-block text-[11px] font-semibold text-[#6E9839]">
                    100% conciliado
                  </span>
                </div>
                <div className="rounded-2xl border border-[#E6ECE2] bg-white p-4">
                  <span className="text-xs font-semibold text-[#4D5E4D]">
                    Faturas &amp; Compromissos
                  </span>
                  <p className="mt-1 font-mono text-lg font-extrabold tabular-nums text-[#141D14]">
                    R$ 11.120,00
                  </p>
                  <span className="mt-1 inline-block rounded-full bg-[#FBCEB5] px-2 py-0.5 text-[11px] font-bold text-[#3D1E10]">
                    61% da renda líquida
                  </span>
                </div>
              </div>

              {/* Forecast Closing Status Banner */}
              <div className="flex items-center justify-between rounded-2xl bg-[#141D14] px-4 py-3.5 text-white">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#DEFF8B]" />
                  <span className="text-xs font-semibold text-[#DEFF8B]">
                    {activeMetrics.forecastBadge}
                  </span>
                </div>
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#8CBA51]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
