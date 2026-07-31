import { Heart } from 'lucide-react';

export function DonateSection() {
  return (
    <section id="donate" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-6 tracking-tight">
            Dukung Proyek Ini
          </h2>
          <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
            SNBT SEKAI dibuat gratis untuk membantu teman-teman yang
            mempersiapkan diri menghadapi SNBT. Semua materi bisa diakses tanpa
            biaya.
          </p>
          <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
            Kalau kamu merasa terbantu dan ingin mendukung proyek ini tetap
            berjalan, donasi kamu sangat berarti.
          </p>
          <a
            href="https://saweria.co/Farrelhyuga"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-donate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <Heart className="w-5 h-5" />
            Donasi via Saweria
          </a>
        </div>
      </div>
    </section>
  );
}
