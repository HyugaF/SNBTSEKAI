declare module 'virtual:materi-manifest' {
  export interface MateriGroup {
    name: string;
    files: string[];
  }
  export const groups: MateriGroup[];
}
