import { ThemeToggle } from './theme-toggle';

export function Nav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="font-display font-bold text-xl text-foreground tracking-tight">
            SNBT SEKAI
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('library')}
              data-testid="nav-library"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              Access Library
            </button>
            <button
              onClick={() => scrollToSection('donate')}
              data-testid="nav-donate"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              Donate
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
