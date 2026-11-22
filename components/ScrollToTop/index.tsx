"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6ECE2] bg-[#141D14] text-[#DEFF8B] shadow-pulse transition-all duration-200 hover:bg-[#8CBA51] hover:text-[#141D14]"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
