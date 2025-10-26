type PageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <main
      id="top"
      className="relative flex flex-1 flex-col gap-[var(--space-xl)] pb-[var(--space-3xl)]"
      data-page-transition="true"
    >
      {children}
    </main>
  );
}
