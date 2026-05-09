"use client";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import PageContainer from "./page-container";

import { Button } from "@/components/ui/button";

const navLinks = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-2xl">
      <PageContainer>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold tracking-tight text-white"
          >
            FitTrack
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/onboarding">
              <Button className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 text-white hover:opacity-90">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="flex items-center justify-center text-white md:hidden"
          >
            {isOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </PageContainer>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <PageContainer>
              <div className="flex flex-col gap-6 py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className="text-lg text-zinc-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <Link
                  href="/onboarding"
                  onClick={() =>
                    setIsOpen(false)
                  }
                >
                  <Button className="mt-4 w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:opacity-90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </PageContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}