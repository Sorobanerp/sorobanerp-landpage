"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu as MenuIcon, X } from "lucide-react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-[1320px] rounded-full transition-all duration-300 ${
          sticky
            ? "border border-[#E6ECE2] bg-white/85 px-5 py-3 shadow-pulse backdrop-blur-md"
            : "border border-[#E6ECE2]/80 bg-white/75 px-6 py-3.5 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Original Soroban Logo Preserved Intact */}
          <Link href="/" className="flex items-center focus:outline-none">
            <Image
              src="/images/logo/logo-2.svg"
              alt="Soroban ERP & PFM Pulse Logo"
              width={138}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex" aria-label="Navegação Principal">
            {menuData.map((item) => (
              <Link
                key={item.id}
                href={item.path || "/"}
                className="text-sm font-semibold text-[#141D14]/80 transition-colors duration-200 hover:text-[#141D14]"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Primary CTA Button (#8CBA51) */}
          <div className="hidden items-center space-x-3 lg:flex">
            <Link
              href="/#produto"
              className="group inline-flex items-center gap-2 rounded-full bg-[#8CBA51] px-5 py-2.5 text-sm font-bold text-[#141D14] shadow-sm transition-all duration-200 hover:bg-[#7AA842] hover:shadow-md"
            >
              <span>Explorar PFM Pulse</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setNavbarOpen((prev) => !prev)}
            aria-label="Abrir Menu de Navegação"
            className="inline-flex items-center justify-center rounded-full border border-[#E6ECE2] bg-white p-2.5 text-[#141D14] lg:hidden"
          >
            {navbarOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {navbarOpen && (
          <div className="mt-3 rounded-3xl border border-[#E6ECE2] bg-white p-5 shadow-pulse lg:hidden">
            <ul className="flex flex-col space-y-3">
              {menuData.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path || "/"}
                    onClick={() => setNavbarOpen(false)}
                    className="block rounded-xl px-3 py-2 text-base font-semibold text-[#141D14] hover:bg-[#F7F9F5]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/#produto"
                  onClick={() => setNavbarOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#8CBA51] px-5 py-3 text-sm font-bold text-[#141D14]"
                >
                  <span>Explorar PFM Pulse</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
