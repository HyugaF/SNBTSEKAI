export function Hero() {
  const scrollToLibrary = () => {
    const element = document.getElementById('library');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[calc(100dvh-4rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6 tracking-tight">
            SNBT
            <br />
            SEKAI
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Materi SNBT gratis. Langsung download, langsung belajar.
          </p>
          <button
            onClick={scrollToLibrary}
            data-testid="button-hero-cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Lihat Materi
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
