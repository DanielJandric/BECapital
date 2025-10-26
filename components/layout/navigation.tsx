"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fadeIn, staggerChildren } from "@/lib/animations/variants";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
] as const;

export function NavigationBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/35 backdrop-blur-2xl">
      <Container className="flex items-center justify-between py-[clamp(1.1rem,3vw,1.8rem)]">
        <Link
          href="#top"
          onClick={closeMenu}
          className="text-foreground/90 hover:text-foreground flex items-center gap-3 text-sm font-medium tracking-[0.32em] uppercase transition-colors"
        >
          <span className="border-accent/35 h-9 w-9 rounded-full border bg-black/40 shadow-[0_0_25px_rgba(176,141,87,0.15)]" />
          BE Capital SA
        </Link>
        <nav className="text-muted hidden items-center gap-9 text-sm font-light md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group hover:text-foreground relative transition-colors"
            >
              {item.label}
              <span className="bg-accent absolute inset-x-0 -bottom-2 h-px scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="secondary">
            <Link href="#contact">Schedule a conversation</Link>
          </Button>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
          className="text-foreground hover:border-accent/60 hover:text-foreground/90 relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 transition-colors md:hidden"
        >
          <span
            className={cn(
              "h-0.5 w-5 origin-center transform rounded-full bg-current transition-all duration-200",
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5",
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-5 rounded-full bg-current transition-opacity duration-200",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 origin-center transform rounded-full bg-current transition-all duration-200",
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5",
            )}
          />
        </button>
      </Container>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeIn()}
            className="md:hidden"
          >
            <motion.nav
              variants={staggerChildren()}
              className="border-t border-white/5 bg-black/85 px-[clamp(1.5rem,6vw,3rem)] pt-6 pb-8 text-lg"
            >
              {navItems.map((item) => (
                <motion.div key={item.href} variants={fadeIn()}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="text-foreground/80 hover:text-foreground block py-3 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Button className="mt-6 w-full" onClick={closeMenu} asChild>
                <Link href="#contact">Schedule a conversation</Link>
              </Button>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
