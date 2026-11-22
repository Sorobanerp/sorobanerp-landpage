"use client";

import { FormEvent, useState } from "react";
import { Building2, CheckCircle2, Mail, Send, Sparkles } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [channel, setChannel] = useState<"pulse" | "corporate">("pulse");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const targetEmail =
    channel === "pulse" ? "pulse-personal@sorobanerp.com.br" : "contato@sorobanerp.com.br";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(
      channel === "pulse"
        ? `[PFM Pulse] Solicitação de Demonstração — ${name || "Contato"}`
        : `[Soroban Institucional] Parceria / Contato Corporativo — ${name || "Contato"}`
    );
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\nCanal: ${targetEmail}\n\nMensagem:\n${message}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="bg-[#F7F9F5] py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#DEFF8B] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#141D14]">
              <Sparkles className="h-3.5 w-3.5" />
              Canais Oficiais Soroban &amp; PFM Pulse
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#141D14] sm:text-4xl">
              Vamos Conversar Sobre Eficiência Financeira.
            </h2>
            <p className="mb-8 text-base font-medium leading-relaxed text-[#4D5E4D]">
              Escolha o canal direto para demonstrações do produto{" "}
              <strong className="text-[#141D14]">PFM Pulse</strong> (B2C / Family Office /
              Executivos) ou atendimento institucional corporativo da{" "}
              <strong className="text-[#141D14]">Soroban</strong>.
            </p>

            <div className="space-y-4">
              {/* Canal 1: Produto PFM Pulse */}
              <a
                href="mailto:pulse-personal@sorobanerp.com.br"
                className="group block rounded-[24px] border border-[#E6ECE2] bg-white p-6 shadow-pulse transition-all duration-200 hover:border-[#8CBA51]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#DEFF8B] px-3 py-1 text-xs font-bold text-[#141D14]">
                    <Mail className="h-3.5 w-3.5" />
                    Canal do Produto PFM Pulse
                  </span>
                  <span className="text-xs font-bold text-[#6E9839]">B2C &amp; Executivos</span>
                </div>
                <p className="font-mono text-base font-extrabold text-[#141D14] group-hover:text-[#6E9839] sm:text-lg">
                  pulse-personal@sorobanerp.com.br
                </p>
                <p className="mt-1 text-xs font-medium text-[#4D5E4D]">
                  Onboarding assistido, acesso ao PFM Pulse e gestão financeira pessoal/familiar.
                </p>
              </a>

              {/* Canal 2: Institucional Corporativo Soroban */}
              <a
                href="mailto:contato@sorobanerp.com.br"
                className="group block rounded-[24px] border border-[#E6ECE2] bg-white p-6 shadow-pulse transition-all duration-200 hover:border-[#8CBA51]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FBCEB5] px-3 py-1 text-xs font-bold text-[#3D1E10]">
                    <Building2 className="h-3.5 w-3.5" />
                    Canal Institucional Corporativo
                  </span>
                  <span className="text-xs font-bold text-[#3D1E10]">B2B &amp; Enterprise</span>
                </div>
                <p className="font-mono text-base font-extrabold text-[#141D14] group-hover:text-[#6E9839] sm:text-lg">
                  contato@sorobanerp.com.br
                </p>
                <p className="mt-1 text-xs font-medium text-[#4D5E4D]">
                  Parcerias corporativas, arquitetura de sistemas e soluções empresariais Soroban.
                </p>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Minimalist Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] border border-[#E6ECE2] bg-white p-7 shadow-pulse sm:p-10">
              <h3 className="mb-2 text-2xl font-extrabold text-[#141D14]">
                Solicitar Demonstração ou Parceria
              </h3>
              <p className="mb-7 text-sm font-medium text-[#4D5E4D]">
                Sua mensagem será direcionada diretamente para{" "}
                <code className="rounded bg-[#F7F9F5] px-2 py-0.5 font-mono text-xs font-bold text-[#141D14]">
                  {targetEmail}
                </code>
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Channel Selector */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setChannel("pulse")}
                    className={`rounded-2xl border p-3.5 text-left transition-all ${
                      channel === "pulse"
                        ? "border-[#8CBA51] bg-[#DEFF8B]/40 text-[#141D14]"
                        : "border-[#E6ECE2] bg-[#F7F9F5] text-[#4D5E4D]"
                    }`}
                  >
                    <p className="text-xs font-bold uppercase">Produto PFM Pulse</p>
                    <p className="mt-0.5 font-mono text-xs font-semibold">
                      pulse-personal@sorobanerp.com.br
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setChannel("corporate")}
                    className={`rounded-2xl border p-3.5 text-left transition-all ${
                      channel === "corporate"
                        ? "border-[#8CBA51] bg-[#FBCEB5]/45 text-[#3D1E10]"
                        : "border-[#E6ECE2] bg-[#F7F9F5] text-[#4D5E4D]"
                    }`}
                  >
                    <p className="text-xs font-bold uppercase">Soroban Corporativo</p>
                    <p className="mt-0.5 font-mono text-xs font-semibold">
                      contato@sorobanerp.com.br
                    </p>
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#141D14]"
                    >
                      Seu Nome
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Ricardo Silva"
                      className="w-full rounded-2xl border border-[#E6ECE2] bg-[#F7F9F5] px-4 py-3.5 text-sm font-medium text-[#141D14] outline-none transition-colors focus:border-[#8CBA51] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#141D14]"
                    >
                      Seu E-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nome@empresa.com.br"
                      className="w-full rounded-2xl border border-[#E6ECE2] bg-[#F7F9F5] px-4 py-3.5 text-sm font-medium text-[#141D14] outline-none transition-colors focus:border-[#8CBA51] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#141D14]"
                  >
                    Objetivo / Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte-nos como podemos apoiar sua gestão financeira pessoal ou operação corporativa..."
                    className="w-full resize-none rounded-2xl border border-[#E6ECE2] bg-[#F7F9F5] px-4 py-3.5 text-sm font-medium text-[#141D14] outline-none transition-colors focus:border-[#8CBA51] focus:bg-white"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#8CBA51] px-8 py-4 text-sm font-bold text-[#141D14] shadow-sm transition-all duration-200 hover:bg-[#7AA842] hover:shadow-md"
                  >
                    <Send className="h-4 w-4" />
                    <span>Enviar Mensagem Direta</span>
                  </button>

                  {submitted && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6E9839]">
                      <CheckCircle2 className="h-4 w-4" />
                      Cliente de e-mail aberto para {targetEmail}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
