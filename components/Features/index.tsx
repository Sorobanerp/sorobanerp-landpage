"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Calculator,
  FileCheck2,
  QrCode,
  Sparkles,
  TrendingDown,
} from "lucide-react";

const bentoCards = [
  {
    id: "card-ritmo",
    badge: "Ritmo em 10 Segundos",
    badgeStyle: "bg-[#DEFF8B] text-[#141D14]",
    icon: Activity,
    title: "Ritmo Diário, Semanal e Mensal",
    description:
      "Acompanhe o orçamento em 10 segundos por dia sem tabelas poluídas. O motor separa automaticamente o regime de Competência do fluxo real de Caixa.",
    metricLabel: "Quota Diária Segura",
    metricValue: "R$ 236,00 / dia",
    subMetric: "Hoje • Semana (R$ 1.652,00) • Mês (R$ 7.080,00)",
    colSpan: "lg:col-span-7",
  },
  {
    id: "card-pdf-ia",
    badge: "Zero-Persistence RAM + IA",
    badgeStyle: "bg-[#8CBA51]/20 text-[#141D14]",
    icon: FileCheck2,
    title: "Auditoria de Faturas PDF & IA",
    description:
      "Leitura inteligente em memória RAM com validação matemática de checksum (soma dos itens vs. total da fatura) e erradicação automática de gastos não classificados.",
    metricLabel: "Gastos em 'Outros'",
    metricValue: "< 5% (Meta Atingida: 2,4%)",
    subMetric: "Pipeline de 3 camadas: Regras Locais → pgvector → Gemini 2.5 Flash",
    colSpan: "lg:col-span-5",
  },
  {
    id: "card-nfce",
    badge: "Inflação Pessoal por Item",
    badgeStyle: "bg-[#FBCEB5] text-[#3D1E10]",
    icon: QrCode,
    title: "Radar de Consumo & NFC-e",
    description:
      "Leitura instantânea de cupons fiscais via QR Code SEFAZ com reconciliação automática no cartão e alertas preventivos de variação de preço por produto.",
    metricLabel: "Reconciliação de Cupom",
    metricValue: "< 800ms por QR Code",
    subMetric: "Alerta automático de variação de preço acima da média histórica",
    colSpan: "lg:col-span-5",
  },
  {
    id: "card-contratos",
    badge: "Matemática Decimal Exata",
    badgeStyle: "bg-[#DEFF8B] text-[#141D14]",
    icon: Calculator,
    title: "Simulador de Contratos de Longo Prazo",
    description:
      "Projeção quantitativa de amortização (SAC, Tabela Price e Consórcios) comparando redução de prazo vs. redução de parcela com cálculo exato de ROI.",
    metricLabel: "Economia Simulada (Aporte R$ 20k)",
    metricValue: "-R$ 42.840,00 em juros",
    subMetric: "Redução imediata de 28 parcelas no financiamento imobiliário SAC",
    colSpan: "lg:col-span-7",
  },
];

const Features = () => {
  return (
    <section id="eficiencia-ia" className="bg-[#F7F9F5] py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#DEFF8B] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#141D14]">
            <Sparkles className="h-3.5 w-3.5" />
            Engenharia de Eficiência &amp; Produto
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#141D14] sm:text-4xl lg:text-[2.65rem]">
            Quatro Motores de Precisão.{" "}
            <span className="text-[#6E9839]">Uma Experiência Minimalista.</span>
          </h2>
          <p className="text-base font-medium leading-relaxed text-[#4D5E4D] sm:text-lg">
            O <strong className="font-semibold text-[#141D14]">PFM Pulse</strong> substitui
            planilhas frágeis por motores contábeis de partidas dobradas, inteligência artificial
            estruturada e simulação financeira em tempo real.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {bentoCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#E6ECE2] bg-white p-7 shadow-pulse transition-all duration-300 hover:border-[#8CBA51] hover:shadow-pulseHover sm:p-9 ${card.colSpan}`}
              >
                {/* Top Row: Icon & Semantic Badge */}
                <div>
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F9F5] text-[#141D14] transition-colors duration-300 group-hover:bg-[#DEFF8B]">
                      <IconComponent className="h-6 w-6 text-[#141D14]" />
                    </div>
                    <span
                      className={`rounded-full px-3.5 py-1 text-xs font-bold ${card.badgeStyle}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-[#141D14]">
                    {card.title}
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-[#4D5E4D]">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Metric Highlight Box */}
                <div className="rounded-2xl border border-[#E6ECE2] bg-[#F7F9F5] p-4 transition-colors duration-300 group-hover:border-[#8CBA51]/50">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4D5E4D]">
                      {card.metricLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-lg font-extrabold tabular-nums text-[#141D14]">
                      <TrendingDown className="h-4 w-4 text-[#6E9839]" />
                      {card.metricValue}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs font-semibold text-[#4D5E4D]">
                    {card.subMetric}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
