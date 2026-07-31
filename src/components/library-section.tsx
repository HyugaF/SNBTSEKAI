/// <reference path="../../virtual-materi.d.ts" />
import { useEffect, useState } from 'react';
import { groups } from 'virtual:materi-manifest';
import { DownloadCard } from './download-card';
import { BookOpen, X } from 'lucide-react';

export function LibrarySection() {
  const hasContent = groups.length > 0;
  const [activeTab, setActiveTab] = useState(0);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const [viewingPdf, setViewingPdf] = useState<{
    filename: string;
    url: string;
  } | null>(null);

  const activeGroup = groups[activeTab];

  useEffect(() => {
    if (cooldownRemaining <= 0) return;

    const timer = window.setInterval(() => {
      setCooldownRemaining((remaining) =>
        remaining <= 1 ? 0 : remaining - 1,
      );
    }, 1000);

    return () => window.clearInterval(timer);
  }, [cooldownRemaining]);

  const startDownloadCooldown = () => {
    setCooldownRemaining(15);
  };

  return (
    <>
      <section id="library" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-4 tracking-tight">
                Library
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Koleksi materi persiapan SNBT yang bisa langsung kamu download
              </p>
            </div>

            {hasContent ? (
              <>
                {/* Subject tabs */}
                {groups.length > 1 && (
                  <div className="flex flex-wrap gap-2 justify-center mb-10">
                    {groups.map((group, i) => (
                      <button
                        key={group.name}
                        onClick={() => setActiveTab(i)}
                        className={[
                          'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border',
                          activeTab === i
                            ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                            : 'bg-card text-foreground border-border hover:border-primary hover:text-primary',
                        ].join(' ')}
                      >
                        {group.name}
                        <span
                          className={[
                            'ml-2 text-xs px-1.5 py-0.5 rounded-full',
                            activeTab === i
                              ? 'bg-primary-foreground/20 text-primary-foreground'
                              : 'bg-muted text-muted-foreground',
                          ].join(' ')}
                        >
                          {group.files.length}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {/* File grid */}
                {activeGroup && activeGroup.files.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeGroup.files.map((filename) => {
                      const subfolder =
                        activeGroup.name === 'Umum' ? '' : `${activeGroup.name}/`;
                      const downloadUrl = `${import.meta.env.BASE_URL}Materi/${subfolder}${filename}`;
                      return (
                        <DownloadCard
                          key={filename}
                          filename={filename}
                          downloadUrl={downloadUrl}
                          cooldownRemaining={cooldownRemaining}
                          onDownload={startDownloadCooldown}
                          onViewPdf={() =>
                            setViewingPdf({ filename, url: downloadUrl })
                          }
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    Belum ada materi di kategori ini.
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                  <BookOpen className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-display font-semibold text-2xl text-foreground mb-2">
                  Materi belum tersedia
                </h3>
                <p className="text-muted-foreground">
                  Cek lagi nanti untuk update materi terbaru!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {viewingPdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${viewingPdf.filename}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setViewingPdf(null);
          }}
        >
          <div className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-card shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6">
              <h2 className="min-w-0 truncate font-display font-semibold text-foreground">
                {viewingPdf.filename}
              </h2>
              <button
                type="button"
                onClick={() => setViewingPdf(null)}
                aria-label="Tutup preview PDF"
                className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <iframe
              src={viewingPdf.url}
              title={`Preview ${viewingPdf.filename}`}
              className="min-h-0 flex-1 bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}
