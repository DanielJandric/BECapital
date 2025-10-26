import Link from "next/link";
import { Typography } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <main className="bg-color-base text-foreground flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <Typography variant="headline">Page not found.</Typography>
      <Typography variant="body" muted>
        The page you are looking for might have been moved or no longer exists.
      </Typography>
      <Link
        href="/"
        className="text-foreground/70 hover:text-foreground text-xs font-semibold tracking-[0.28em] uppercase transition-colors"
      >
        Return home →
      </Link>
    </main>
  );
}
