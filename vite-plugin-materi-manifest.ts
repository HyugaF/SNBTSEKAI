import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

export interface MateriGroup {
  name: string;
  files: string[];
}

function scanDir(dir: string): MateriGroup[] {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const groups: MateriGroup[] = [];

  // Collect subfolders first (sorted alphabetically)
  const subfolders = entries
    .filter((e) => e.isDirectory() && !e.name.startsWith('.'))
    .sort((a, b) => a.name.localeCompare(b.name));

  for (const folder of subfolders) {
    const folderPath = path.join(dir, folder.name);
    const files = fs
      .readdirSync(folderPath)
      .filter((f) => !f.startsWith('.') && f !== 'README.md')
      .sort((a, b) => a.localeCompare(b));
    if (files.length > 0) {
      groups.push({ name: folder.name, files });
    }
  }

  // Root-level files go into "Umum" (appended last)
  const rootFiles = entries
    .filter(
      (e) =>
        e.isFile() && !e.name.startsWith('.') && e.name !== 'README.md',
    )
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b));

  if (rootFiles.length > 0) {
    groups.push({ name: 'Umum', files: rootFiles });
  }

  return groups;
}

export function materiManifest(): Plugin {
  const virtualModuleId = 'virtual:materi-manifest';
  const resolvedId = '\0' + virtualModuleId;

  return {
    name: 'materi-manifest',
    resolveId(id) {
      if (id === virtualModuleId) return resolvedId;
    },
    load(id) {
      if (id !== resolvedId) return;

      const dir = path.resolve(process.cwd(), 'public/Materi');
      const groups = scanDir(dir);

      return `export const groups = ${JSON.stringify(groups)};`;
    },
  };
}
