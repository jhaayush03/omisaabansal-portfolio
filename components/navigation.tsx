"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 px-4 py-4 sm:px-8 sm:py-6 transition-all duration-300 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between">
        <a href="/" className="text-lg font-semibold text-white">
          Omisaa Bansal
        </a>

        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-sm font-medium text-white hover:underline"
          >
            Omisaa Bansal
          </a>

          <a
            href="/resume"
            className="text-sm font-medium text-white hover:underline"
          >
            Resume
          </a>
          <a
            href="/certificates"
            className="text-sm font-medium text-white hover:underline"
          >
            Certificates
          </a>
          <a
            href="/experiences"
            className="text-sm font-medium text-white hover:underline"
          >
            Experiences
          </a>
          <a
            href="/researchpaper"
            className="text-sm font-medium text-white hover:underline"
          >
            Research Paper
          </a>
          <a
            href="/extracurricular"
            className="text-sm font-medium text-white hover:underline"
          >
            Extracurricular Activities
          </a>

          <Button
            asChild
            variant="secondary"
            className="bg-white text-black hover:bg-white/90"
          >
            <a href="/contact">Contact Me</a>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden items-center justify-between">
        <a href="/" className="text-lg font-semibold text-white">
          Omisaa Bansal
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-sm border-t border-white/10">
          <div className="flex flex-col p-4 space-y-1">
            <a
              href="/resume"
              className="px-4 py-3 text-sm font-medium text-white hover:bg-white/10 rounded-md"
            >
              Resume
            </a>

            {/* Portfolio Section */}
            <div className="space-y-1">
              <a
                href="/portfolio"
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-white hover:bg-white/10 rounded-md"
              >
                Certificates
              </a>
            </div>

            {/* Leadership Section */}
            <div className="space-y-1">
              <a
                href="/experiences"
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-white hover:bg-white/10 rounded-md"
              >
                Experiences
              </a>
            </div>

            {/* Academics Section */}
            <div className="space-y-1">
              <a
                href="/researchpaper"
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-white hover:bg-white/10 rounded-md"
              >
                Research Paper
              </a>
            </div>

            {/* Research Section */}
            <div className="space-y-1">
              <a
                href="/extracurricular"
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-white hover:bg-white/10 rounded-md"
              >
                Extracurricular Activities
              </a>
            </div>

            <Button
              asChild
              variant="secondary"
              className="bg-white text-black hover:bg-white/90 mt-4"
            >
              <a href="/contact">Contact Me</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
