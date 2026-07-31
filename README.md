# ✦ SNBT Sekai

> **Satu ruang belajar. Banyak kemungkinan masa depan.**

SNBT Sekai adalah perpustakaan materi belajar gratis untuk menemani persiapan SNBT dari latihan TPS, materi TKA, sampai bahan literasi yang bisa langsung diunduh dan dipelajari kapan saja.

Tidak perlu akun. Tidak perlu dashboard yang ribet. Pilih kategori, ambil materinya, lalu mulai belajar.

## Yang ada di dalamnya

- **Materi terorganisir** berdasarkan subtes SNBT
- **Download langsung** dalam format `.zip`
- **Kategori otomatis** yang mengikuti folder materi
- **Opening animation** untuk pengalaman masuk yang lebih seru
- **Light & dark mode** untuk belajar siang maupun malam
- **Tampilan responsif** untuk desktop dan mobile
- **Donasi via Saweria** untuk mendukung pengembangan materi gratis

## Struktur materi

Semua bahan belajar berada di dalam folder `public/Materi/`:

```text
public/
└── Materi/
    ├── TPS/
    ├── TKA-Saintek/
    ├── TKA-Soshum/
    ├── Literasi/
    └── materi-umum.zip
```

### Menambahkan materi baru

1. Masukkan file `.zip` ke folder kategori yang sesuai.
2. Jalankan build ulang.
3. Kategori dan materi akan terbaca otomatis oleh website.

File yang diletakkan langsung di `public/Materi/` akan masuk ke kategori **Umum**. Kamu juga bisa membuat folder kategori baru — folder tersebut akan otomatis muncul sebagai kategori baru setelah build.

## Mulai secara lokal

Pastikan Node.js sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Untuk mengecek project sebelum dipublikasikan:

```bash
npm run typecheck
npm run build
npm run preview
```

## Deploy ke Vercel

Project ini sudah disiapkan untuk deployment langsung ke Vercel:

1. Push repository ke GitHub.
2. Import repository tersebut ke Vercel.
3. Klik **Deploy**.

Konfigurasi build dan output sudah tersedia di `vercel.json`, jadi tidak perlu backend atau database tambahan.

## Berkontribusi

Punya materi yang bermanfaat, ide fitur, atau menemukan sesuatu yang kurang pas?

1. Fork repository ini.
2. Buat branch baru.
3. Tambahkan perubahanmu.
4. Buat pull request.

Mari bikin persiapan SNBT terasa sedikit lebih ringan
satu materi, satu latihan, satu langkah kecil setiap hari.

---

<p align="center">
  Dibuat untuk pejuang SNBT yang terus bertumbuh.
</p>
