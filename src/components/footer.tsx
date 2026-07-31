export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="font-display font-bold text-xl text-foreground mb-3">
            SNBT SEKAI
          </div>
          <p className="text-sm text-muted-foreground">
            {currentYear} — Materi persiapan SNBT gratis untuk semua
          </p>
        </div>
      </div>
    </footer>
  );
}
