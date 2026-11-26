"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, CloudCog, Cpu, Layers } from "lucide-react";

const founderHighlights = [
  {
    icon: Layers,
    label: "Arquitetura Hexagonal & Sistemas Críticos",
    detail: "Java 25 LTS, Go, Python e motores contábeis de partidas dobradas",
  },
  {
    icon: CloudCog,
    label: "Cloud FinOps & Multi-Cloud",
    detail: "Infraestrutura enxuta OpenTofu, Kubernetes, ECS Fargate Spot e Serverless",
  },
  {
    icon: Cpu,
    label: "Produtos Orientados à Eficiência & IA",
    detail: "Pipelines determinísticos + LLMs estruturados com governança LGPD",
  },
];

const Teams = () => {
  return (
    <section id="fundador" className="bg-[#F7F9F5] py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#DEFF8B] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#141D14]">
              <Award className="h-3.5 w-3.5" />
              Liderança Técnica &amp; Visão de Produto
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#141D14] sm:text-4xl">
              Engenharia de Software com DNA de Eficiência
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[24px] border border-[#E6ECE2] bg-white p-8 shadow-pulse sm:p-11"
          >
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border-2 border-[#8CBA51] bg-[#F7F9F5]">
                <Image
                  src="/images/testimonials/auth-02.png"
                  alt="Dantas — Founder & Principal Software Architect"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>

              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-[#DEFF8B] px-3 py-1 text-xs font-bold text-[#141D14]">
                    Founder &amp; Principal Software Architect
                  </span>
                  <span className="rounded-full border border-[#E6ECE2] bg-[#F7F9F5] px-3 py-1 font-mono text-xs font-semibold text-[#4D5E4D]">
                    Soroban • PFM Pulse
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold tracking-tight text-[#141D14] sm:text-3xl">
                  Francisco Claudeilton Dantas (Dantas)
                </h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-[#4D5E4D]">
                  Bacharel em Ciência da Computação e Arquiteto de Software Principal à frente da{" "}
                  <strong className="font-semibold text-[#141D14]">Soroban</strong> e do{" "}
                  <strong className="font-semibold text-[#141D14]">PFM Pulse</strong>. Especialista
                  no desenho de arquiteturas distribuídas de alta resiliência, engenharia Cloud
                  FinOps e plataformas financeiras focadas em simplicidade operacional e ganho real
                  de eficiência para pessoas e empresas.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#E6ECE2] pt-8 md:grid-cols-3">
              {founderHighlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#E6ECE2] bg-[#F7F9F5] p-4"
                  >
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#DEFF8B] text-[#141D14]">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-bold text-[#141D14]">{item.label}</h4>
                    <p className="mt-1 text-xs font-medium leading-relaxed text-[#4D5E4D]">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
