"use client";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/btn";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { id: 1, label: "Home", page: "/" },
    { id: 2, label: "FAQ", page: "/faq" },
    { id: 3, label: "Privacy Policy", page: "/privacy" },
    { id: 4, label: "Terms of Service", page: "/terms" },
  ];
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-zinc-900/40 backdrop-blur-xs border border-zinc-800/60 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl shadow-xl shadow-black/20 transition-all">
          <div className="flex items-center gap-2">
            <div className="flex flex-col justify-center -space-y-1">
              <span className="text-white font-extrabold font-serif text-2xl tracking-tighter leading-none">
                Maps
              </span>
              <span className="text-gray-400 font-pacifico text-[10px] tracking-wide animate-flicker">
                by ducklabs
              </span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => router.push(link.page)}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  pathname === link.page
                    ? "text-white border-b border-white"
                    : "text-gray-400"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <Button size="sm" className="hidden md:block">
            Book Now
          </Button>
        </div>
      </div>

      <div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-900/40 mt-18 rounded-4xl backdrop-blur-[3px] border border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push(link.page);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-3xl text-base font-medium ${
                    pathname === link.page
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
