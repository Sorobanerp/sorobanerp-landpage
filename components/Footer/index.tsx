import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#E6ECE2] bg-white pt-14 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-12">
          {/* Brand & Original Soroban Logo Preserved */}
          <div className="md:col-span-5">
            <Link href="/" className="mb-5 inline-block">
              <Image
                src="/images/logo/logo-2.svg"
                alt="Soroban ERP Logo"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-[#4D5E4D]">
              Ecossistema <strong className="text-[#141D14]">Soroban</strong> &amp;{" "}
              <strong className="text-[#141D14]">PFM Pulse</strong> — Engenharia de software,
              inteligência financeira pessoal e governança corporativa orientadas à eficiência.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#141D14]">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold text-[#4D5E4D]">
              <li>
                <Link href="/#produto" className="hover:text-[#141D14]">
                  Produto PFM Pulse
                </Link>
              </li>
              <li>
                <Link href="/#eficiencia-ia" className="hover:text-[#141D14]">
                  Eficiência &amp; IA
                </Link>
              </li>
              <li>
                <Link href="/#seguranca-enterprise" className="hover:text-[#141D14]">
                  Segurança Enterprise &amp; LGPD
                </Link>
              </li>
              <li>
                <Link href="/#fundador" className="hover:text-[#141D14]">
                  Fundador
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Channels */}
          <div className="md:col-span-4">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#141D14]">
              Canais Oficiais
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-[#4D5E4D]">
              <li>
                <span className="block text-xs font-bold text-[#141D14]">Produto PFM Pulse:</span>
                <a
                  href="mailto:pulse-personal@sorobanerp.com.br"
                  className="font-mono text-xs font-semibold text-[#6E9839] hover:underline"
                >
                  pulse-personal@sorobanerp.com.br
                </a>
              </li>
              <li>
                <span className="block text-xs font-bold text-[#141D14]">
                  Institucional Corporativo:
                </span>
                <a
                  href="mailto:contato@sorobanerp.com.br"
                  className="font-mono text-xs font-semibold text-[#6E9839] hover:underline"
                >
                  contato@sorobanerp.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E6ECE2] pt-6 text-xs font-semibold text-[#4D5E4D] sm:flex-row">
          <p>
            Soroban Soluções Digitais &amp; PFM Pulse •{" "}
            <a
              href="https://sorobanerp.com.br"
              rel="nofollow noopener"
              className="hover:text-[#141D14]"
            >
              sorobanerp.com.br
            </a>{" "}
            | Todos os direitos reservados.
          </p>
          <p className="font-mono">IDS PFM Pulse • LGPD Compliant (Lei 13.709/2018)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
