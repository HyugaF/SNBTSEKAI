import { Download, Eye, FileArchive, FileText } from 'lucide-react';

interface DownloadCardProps {
  filename: string;
  downloadUrl: string;
  cooldownRemaining: number;
  onDownload: () => void;
  onViewPdf: () => void;
}

export function DownloadCard({
  filename,
  downloadUrl,
  cooldownRemaining,
  onDownload,
  onViewPdf,
}: DownloadCardProps) {
  const isPdf = /\.pdf$/i.test(filename);
  const displayName = filename.replace(/\.(zip|pdf)$/i, '');
  const isCoolingDown = cooldownRemaining > 0;

  return (
    <article className="group relative block bg-card border border-card-border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
          {isPdf ? (
            <FileText className="w-6 h-6 text-primary" />
          ) : (
            <FileArchive className="w-6 h-6 text-primary" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-lg text-foreground mb-1 break-words">
            {displayName}
          </h3>
          <p className="text-sm text-muted-foreground">
            {isPdf ? 'PDF Document' : 'ZIP Archive'}
          </p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex flex-wrap items-center gap-3">
          {isPdf && (
            <button
              type="button"
              onClick={onViewPdf}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground border border-border rounded-md px-3 py-2 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <Eye className="w-4 h-4" />
              Lihat PDF
            </button>
          )}
          <a
            href={downloadUrl}
            download
            onClick={(event) => {
              if (isCoolingDown) {
                event.preventDefault();
                return;
              }
              onDownload();
            }}
            aria-disabled={isCoolingDown}
            data-testid={`card-download-${displayName}`}
            className={[
              'inline-flex items-center gap-2 text-sm font-medium rounded-md px-3 py-2 transition-colors duration-300',
              isCoolingDown
                ? 'bg-muted text-muted-foreground cursor-not-allowed'
                : 'bg-primary text-primary-foreground hover:bg-accent',
            ].join(' ')}
          >
            <Download className="w-4 h-4" />
            {isCoolingDown
              ? `Download cooldown (${cooldownRemaining}s)`
              : 'Download'}
          </a>
        </div>
        {isCoolingDown && (
          <p className="mt-3 text-xs text-muted-foreground">
            Download sedang cooldown. Coba lagi dalam {cooldownRemaining} detik.
          </p>
        )}
      </div>
    </article>
  );
}
