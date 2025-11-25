import Link from "next/link";
import { Button } from "../ui/btn";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 relative overflow-hidden border-t border-zinc-900">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <title>IDK</title>
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Ready to be seen?
        </h2>
        <p className="text-zinc-500 text-lg mb-8 max-w-2xl mx-auto">
          Join hundreds of local businesses who are getting more customers
          through better maps presence.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button>Book a Free Audit</Button>
          <p className="text-sm text-zinc-600 mt-4 md:mt-0">
            No credit card required.
          </p>
        </div>

        <div className="mt-20 border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-bold text-zinc-400">Mapped.lk</span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-zinc-300 transition-colors"
            >
              Terms
            </Link>
            <Link href="/faq" className="hover:text-zinc-300 transition-colors">
              FAQ
            </Link>
          </div>
          <div className="mt-4 md:mt-0">© MMXXV DuckLabs Inc.</div>
        </div>
      </div>
    </footer>
  );
}
