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
    <header className="border-border/60 sticky top-0 z-40 border-b bg-white/75 backdrop-blur-md">
      <Container className="flex items-center justify-between py-[clamp(1.1rem,3vw,1.6rem)]">
        <Link
          href="#top"
          onClick={closeMenu}
          className="text-foreground/80 hover:text-foreground flex items-center gap-3 text-sm font-semibold tracking-[0.32em] uppercase transition-colors"
        >
          <span className="border-border/80 h-9 w-9 rounded-full border bg-white shadow-[0_6px_20px_rgba(17,17,17,0.06)]" />
          BE Capital SA
        </Link>
        <nav className="text-muted hidden items-center gap-9 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group hover:text-foreground relative transition-colors"
            >
              {item.label}
              <span className="bg-accent absolute inset-x-0 -bottom-2 h-[1px] scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button
            asChild
            variant="secondary"
            className="px-6 py-2 text-xs tracking-[0.22em]"
          >
            <Link href="#contact">Book A Call</Link>
          </Button>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
          className="border-border/80 text-foreground hover:border-foreground/50 relative flex h-11 w-11 items-center justify-center rounded-full border bg-white/80 transition-all hover:shadow-[0_6px_18px_rgba(17,17,17,0.08)] md:hidden"
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
              className="border-border/60 border-t bg-white px-[clamp(1.5rem,6vw,3rem)] pt-6 pb-8 text-lg shadow-[0_20px_45px_rgba(17,17,17,0.08)]"
            >
              {navItems.map((item) => (
                <motion.div key={item.href} variants={fadeIn()}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="text-foreground/70 hover:text-foreground block py-3 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Button className="mt-6 w-full" onClick={closeMenu} asChild>
                <Link href="#contact">Book A Call</Link>
              </Button>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
