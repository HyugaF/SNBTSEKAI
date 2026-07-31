import { FileArchive } from 'lucide-react';

interface DownloadCardProps {
  filename: string;
  downloadUrl: string;
}

export function DownloadCard({ filename, downloadUrl }: DownloadCardProps) {
  const displayName = filename.replace(/\.zip$/i, '');

  return (
    <a
      href={downloadUrl}
      download
      data-testid={`card-download-${displayName}`}
      className="group relative block bg-card border border-card-border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
          <FileArchive className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-lg text-foreground mb-1 break-words">
            {displayName}
          </h3>
          <p className="text-sm text-muted-foreground">ZIP Archive</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300">
          Download
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
