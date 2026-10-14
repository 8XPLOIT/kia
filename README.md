<div align="center">

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDTTKiNR6B4lBDbqVAJEyxEqKoR49CZQuoUefZFU15qgpGlUB8NDMYWfRojfTsZO1sh2ExxE2VHtWFD9yugmUIg1nUE6PJawd90AxGIo8SVHB5W0esC1OQnPSpxD-7HcfKcESjDYb9xe05jTrPQnd4ejCbY2XVVPq5eNvwJzvuz-4D3XMgdWB791TaE9_D/s1600/image.png" alt="Kia Maheswari Banner" width="100%" />

# Kia Maheswari &mdash; Your Soul Companion

### Website resmi Kia Maheswari &mdash; Yogini, Tantrikers, Fasilitator, Healer

Website profil dan sistem pemesanan sesi konsultasi spiritual yang elegan, dibangun dengan estetika **glassmorphism** dan nuansa biru Nusantara. Mendukung mode terang/gelap, desain responsif penuh, serta siap di-deploy ke **GitHub Pages**.

<br />

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.18-CA4245?logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

<br />
<hr />

</div>

## Daftar Isi

- [Tentang Website](#tentang-website)
- [Fitur Utama](#fitur-utama)
- [Tampilan & Desain](#tampilan--desain)
- [Struktur Halaman](#struktur-halaman)
- [Sesi Konsultasi](#sesi-konsultasi)
- [Sistem Pemesanan](#sistem-pemesanan)
- [Tema & Mode Gelap](#tema--mode-gelap)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Menjalankan Secara Lokal](#menjalankan-secara-lokal)
- [Deploy ke GitHub Pages](#deploy-ke-github-pages)
- [Konfigurasi Penting](#konfigurasi-penting)
- [Kontak](#kontak)
- [Lisensi](#lisensi)

---

## Tentang Website

Website ini adalah platform digital untuk **Kia Maheswari**, seorang Yogini, Tantrikers, Fasilitator, Healer, Acaraki, Seniman, dan Penulis asal Mojokerto, Jawa Timur. Website ini berfungsi sebagai:

1. **Profil & Branding** &mdash; Menampilkan identitas, peran, dan akun Instagram Kia Maheswari
2. **Showcase Sesi** &mdash; Tiga jenis sesi konsultasi spiritual dengan deskripsi dan harga
3. **Sistem Pemesanan** &mdash; Formulir pemesanan terintegrasi dengan WhatsApp
4. **Testimoni** &mdash; Galeri testimoni klien dalam format marquee bergerak
5. **Kontak** &mdash; Formulir pertanyaan langsung dan informasi kontak

Website ini **tidak menggunakan server/database** &mdash; semua data tersimpan di `localStorage` browser pengguna, dan pemesanan diteruskan langsung ke WhatsApp. Privasi 100% terjaga.

---

## Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| **Glassmorphism Design** | Efek kaca buram (frosted glass) pada seluruh kartu, tombol, dan input dengan `backdrop-blur` |
| **Dark / Light Mode** | Toggle tema dengan ikon bulan/matahari, pilihan tersimpan di `localStorage` |
| **Responsif Penuh** | Optimal di mobile, tablet, dan desktop dengan breakpoint Tailwind |
| **HashRouter** | Routing client-side menggunakan hash (`#/`) untuk kompatibilitas GitHub Pages |
| **Animasi & Micro-interactions** | Fade-in, float, shimmer, marquee, hover states, scroll-to-top |
| **Integrasi WhatsApp** | Formulir pemesanan & pertanyaan menggenerate pesan WhatsApp otomatis |
| **Salin Rekening** | Tombol salin nomor rekening BCA dengan notifikasi toast |
| **Auto-save Form** | Input formulir tersimpan di `localStorage` &mdash; tidak hilang saat refresh |
| **SEO Ready** | Meta tags, Open Graph, Twitter Card, deskripsi, dan favicon |
| **GitHub Pages Ready** | Konfigurasi `base: './'`, `.nojekyll`, `404.html` fallback, workflow Actions |

---

## Tampilan & Desain

### Palet Warna

Website menggunakan sistem warna berbasis **CSS Custom Properties** yang berubah otomatis sesuai tema:

| Variabel | Light Mode | Dark mode | Kegunaan |
|----------|-----------|-----------|----------|
| `--c-deep` | `rgb(26, 58, 82)` &mdash; biru tua | `rgb(224, 242, 255)` &mdash; biru sangat terang | Warna teks utama |
| `--c-accent` | `rgb(93, 189, 255)` | `rgb(144, 213, 255)` | Warna aksen |
| `--price-color` | `#181818` &mdash; hampir hitam | `#90D5FF` &mdash; biru langit | Warna teks harga |
| `--bg-gradient` | Biru langit &rarr; putih | Biru malam gelap | Background gradient |
| `--glass-bg` | `rgba(250,250,250,0.4)` | `rgba(20,40,60,0.5)` | Background glass card |
| `--glass-border` | `rgba(255,255,255,0.6)` | `rgba(144,213,255,0.15)` | Border glass card |
| `--btn-bg` | Gradient `#168fc1` &rarr; `#62c0e6` | Sama | Background tombol |

### Tipografi

Website menggunakan tiga keluarga font dari Google Fonts:

| Font | Kelas Tailwind | Bobot | Kegunaan |
|------|---------------|-------|----------|
| **Cormorant Garamond** | `font-display` | 400, 500, 600, 700, italic | Judul, nama sesi, headline, tagline |
| **Plus Jakarta Sans** | `font-body` | 300, 400, 500, 600, 700 | Teks isi, paragraf, label, navigasi |
| **Inter** | (khusus `.session-price`) | 400, 500, 600, 700, 800 | Teks harga di semua halaman |

### Komponen Glass

| Komponen | Kelas CSS | Deskripsi |
|----------|-----------|-----------|
| **Glass Card** | `.glass-card` | Kartu utama dengan blur 16px, border halus, shadow lembut |
| **Glass Card Dark** | `.glass-card-dark` | Varian lebih gelap untuk kartu pembayaran |
| **Glass Input** | `.glass-input` | Input formulir dengan blur 8px, focus glow biru |
| **Glass Button** | `.glass-btn` | Tombol gradient biru dengan hover lift + shadow |
| **Glass Button Light** | `.glass-btn-light` | Varian tombol lebih terang |
| **Glass Radio** | `.glass-radio` | Opsi radio dengan efek glass |
| **Glass Divider** | `.glass-divider` | Garis pemisah transparan |
| **Instagram Pill** | `.instagram-pill` | Badge kaca untuk username Instagram |

### Animasi

| Animasi | Durasi | Kegunaan |
|---------|--------|----------|
| `fade-in-up` | 0.7s | Muncul dari bawah saat halaman load |
| `fade-in` | 0.5s | Fade sederhana untuk menu mobile |
| `float` | 6s infinite | Mengambang pada badge lokasi di hero |
| `shimmer` | 3s infinite | Glow di belakang foto hero |
| `marquee` | 50s linear | Gulir testimoni secara horizontal |

---

## Struktur Halaman

### 1. Beranda (`/`)

Halaman utama yang menampilkan seluruh konten dalam satu halaman scroll dengan navigasi anchor.

#### Hero Section
- Foto Kia Maheswari dengan efek glow dan glass card frame
- Badge "Mojokerto, Jawa Timur, Indonesia" yang melayang
- Sapaan "Halo, Soulfams!"
- Nama besar dengan efek gradient text
- Deskripsi peran: Yogini, Tantrikers, Fasilitator, Healer, Acaraki, Seniman, Penulis
- Badge Instagram: `@kiamaheswari_`, `@omah.maheswari`, `@maheswarikia`
- Kartu glass berisi bio dan pertanyaan reflektif
- Tombol CTA "Ambil Sesi Anda Sekarang!"

#### Sessions Section (`#sessions`)
- Judul "BOOK YOUR SESSIONS" dengan ikon Sparkles
- Tiga kartu sesi dalam grid responsif (1 kolom mobile, 3 kolom desktop)
- Setiap kartu: ikon, nama, harga (online & offline), deskripsi, tombol "Ambil Sesi Ini"
- Kartu mengangkat saat hover (`-translate-y-1`)

#### Highlight Section (`#highlight`)
- Judul dengan ikon Heart
- Tiga paragraf teks justifikasi tentang filosofi perjalanan spiritual
- Layout kartu glass besar dengan padding generous

#### Testimoni Section (`#testimoni`)
- Judul dengan ikon Quote
- Marquee horizontal bergerak otomatis, pause saat hover
- 9 testimoni klien (beberapa anonim) dalam kartu glass
- Duplikasi array untuk loop seamless

#### Hubungi Saya Section (`#kontak`)
- Judul "HUBUNGI SAYA" dengan ikon MessageSquare
- Subjudul "Mau Tanya-Tanya Dulu?"
- Formulir: Nama (wajib), Instagram (wajib), Pesan (wajib, max 200 karakter)
- Submit &rarr; generate pesan WhatsApp otomatis
- Kartu kontak: nama, nomor WhatsApp, website

### 2. Halaman Booking (`/#/booking/:slug`)

Halaman pemesanan untuk sesi tertentu, diakses dengan parameter slug.

- **Tombol kembali** ke beranda
- **Panel info sesi** (kiri, 2/5 lebar): ikon, nama, harga, tagline, deskripsi, highlight bullet points
- **Formulir pemesanan** (kanan, 3/5 lebar): lihat detail di [Sistem Pemesanan](#sistem-pemesanan)
- **Halaman 404**: Jika slug tidak ditemukan, menampilkan pesan "Sesi tidak ditemukan" dengan tombol kembali

---

## Sesi Konsultasi

Tiga sesi konsultasi spiritual yang tersedia:

### Soul Compass
| | Online | Offline |
|---|--------|---------|
| **Harga** | Rp 1.888.000 | Rp 5.888.000 |

> Untukmu yang ingin menemukan arah, menyembuhkan luka batin, dan memperkuat intuisi.

- Menemukan arah hidup
- Menyembuhkan luka batin
- Menguatkan intuisi

### Life Blueprint
| | Online | Offline |
|---|--------|---------|
| **Harga** | Rp 1.222.000 | Rp 4.222.000 |

> Bagi yang siap mewujudkan impian karir, membangun hubungan ideal, dan menyeimbangkan energi cakra.

- Manifestasi karir
- Hubungan harmonis
- Penyelarasan cakra

### Destiny Insight
| | Online | Offline |
|---|--------|---------|
| **Harga** | Rp 1.111.000 | Rp 3.111.000 |

> Ungkap misteri dan potensi takdirmu di bidang asmara, finansial, dan lainnya.

- Cetak biru takdir
- Kelimpahan finansial
- Rahasia asmara

---

## Sistem Pemesanan

### Alur Pemesanan

```
Pengguna memilih sesi
        |
        v
Mengisi formulir booking
        |
        v
Memilih mode: Online / Offline (iOS toggle)
        |
        v
Menyalin nomor rekening BCA
        |
        v
Klik "Kirim Permintaan"
        |
        v
Diarahkan ke WhatsApp dengan pesan terformat otomatis
```

### Field Formulir Pemesanan

| Field | Tipe | Wajib | Keterangan |
|-------|------|-------|------------|
| Nama Lengkap | text | Ya | Contoh: "Budi Santoso" |
| Email Aktif | email | Ya | Contoh: "nama@email.com" |
| Tempat Lahir | text | Ya | Contoh: "Surabaya" |
| Tanggal Lahir | date | Ya | Format: DD/MM/YYYY |
| Jam Lahir | time | Tidak | Opsional, untuk pembacaan astrologi |
| Jenis Kelamin | radio | Tidak | Laki-laki / Perempuan |
| Tujuan Konsultasi | text | Ya | Contoh: "Ingin menemukan arah hidup" |
| Pilihan Sesi | toggle | - | Online / Offline (default: Online) |
| Kronologi Singkat | textarea | Tidak | Max 500 karakter |

### Kartu Pembayaran

- Bank: **BCA**
- Nomor Rekening: **0392164357**
- Atas Nama: **Kia Maheswari**
- Tombol "Salin" dengan notifikasi toast konfirmasi

### Format Pesan WhatsApp

Pesan yang tergenerate otomatis berisi:
- Nama sesi yang dipilih
- Mode sesi (Online/Offline) dan harga
- Data lengkap pengguna (nama, email, TTL, jam lahir, JK)
- Tujuan konsultasi
- Kronologi masalah
- Konfirmasi bahwa nomor rekening sudah disalin

### Formulir Pertanyaan

Selain pemesanan, terdapat formulir pertanyaan di section Kontak pada halaman beranda:
- Nama (wajib)
- Instagram (wajib, simbol `@` otomatis)
- Pesan (wajib, max 200 karakter)
- Submit &rarr; WhatsApp dengan format pesan terstruktur

### Penyimpanan Lokal

Semua input formulir disimpan di `localStorage` browser:

| Key | Konten |
|-----|--------|
| `tanyaNama`, `tanyaIG`, `tanyaPesan` | Form pertanyaan |
| `booking_nama`, `booking_email`, dst. | Form pemesanan |
| `booking_sesi` | Pilihan Online/Offline |
| `booking_jk` | Pilihan jenis kelamin |
| `theme` | Tema terang/gelap |

Data dibersihkan otomatis setelah formulir dikirim.

---

## Tema & Mode Gelap

Website mendukung dua tema yang dapat di-toggle dengan tombol bulan/matahari di navbar:

- **Light mode**: Background gradient biru langit &rarr; putih, teks biru tua, glass card putih transparan
- **Dark mode**: Background gradient biru malam gelap, teks biru sangat terang, glass card biru gelap transparan

Tema diterapkan melalui atribut `data-theme` pada `<html>` dan dibaca dari `localStorage` sebelum render untuk mencegah flash of unstyled content (FOUC).

```javascript
// index.html — inline script sebelum React load
(function() {
  var theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
})();
```

---

## Teknologi yang Digunakan

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| **React** | 18.3 | Library UI |
| **TypeScript** | 5.5 | Type safety |
| **Vite** | 5.4 | Build tool & dev server |
| **Tailwind CSS** | 3.4 | Utility-first CSS framework |
| **React Router DOM** | 7.18 | Client-side routing (HashRouter) |
| **Lucide React** | 0.446 | Icon library |
| **Google Fonts** | - | Cormorant Garamond, Plus Jakarta Sans, Inter |
| **GitHub Actions** | - | CI/CD untuk auto-deploy ke GitHub Pages |

---

## Struktur Proyek

```
kia-maheswari/
|
|-- .github/
|   |-- workflows/
|       |-- deploy.yml              # GitHub Actions workflow untuk auto-deploy
|
|-- public/
|   |-- .nojekyll                   # Mencegah Jekyll processing di GitHub Pages
|   |-- 404.html                    # SPA fallback untuk URL tidak dikenal
|
|-- src/
|   |-- components/
|   |   |-- BookingForm.tsx         # Formulir pemesanan sesi
|   |   |-- Footer.tsx              # Footer dengan copyright
|   |   |-- Navbar.tsx              # Navigasi dengan scroll-to-section
|   |   |-- ScrollToTopButton.tsx   # Tombol scroll ke atas
|   |   |-- ThemeToggle.tsx         # Toggle dark/light mode
|   |   |-- Toast.tsx               # Notifikasi toast
|   |
|   |-- pages/
|   |   |-- Home.tsx                # Halaman beranda (hero, sesi, highlight, testimoni, kontak)
|   |   |-- BookingPage.tsx         # Halaman pemesanan sesi
|   |
|   |-- App.tsx                     # Root component dengan Routes
|   |-- main.tsx                    # Entry point dengan HashRouter
|   |-- index.css                   # Global styles, theme variables, glass components
|   |-- vite-env.d.ts               # Type declarations Vite
|
|-- index.html                      # HTML entry point dengan meta tags & font preloads
|-- vite.config.ts                  # Konfigurasi Vite (base: './', alias @/)
|-- tailwind.config.js              # Konfigurasi Tailwind (fonts, colors, animations)
|-- postcss.config.js               # PostCSS config (Tailwind + Autoprefixer)
|-- tsconfig.json                   # TypeScript root config
|-- tsconfig.app.json               # TypeScript config untuk app
|-- tsconfig.node.json              # TypeScript config untuk Vite
|-- eslint.config.js                # ESLint config
|-- package.json                    # Dependencies & scripts
|-- .gitignore                      # Git ignore rules
|-- .env                            # Environment variables (Supabase)
|
|-- README.md                       # File ini
```

---

## Menjalankan Secara Lokal

### Prasyarat

- **Node.js** 18 atau lebih baru
- **npm** 9 atau lebih baru

### Langkah-langkah

```bash
# 1. Clone repository
git clone https://github.com/8xploit/kia-maheswari.git
cd kia-maheswari

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev

# 4. Buka di browser
# http://localhost:5173
```

### Script yang Tersedia

| Script | Perintah | Deskripsi |
|--------|----------|-----------|
| Dev | `npm run dev` | Menjalankan Vite dev server dengan HMR |
| Build | `npm run build` | Build production ke folder `dist/` |
| Preview | `npm run preview` | Preview hasil build secara lokal |
| Lint | `npm run lint` | Menjalankan ESLint |
| Typecheck | `npm run typecheck` | Memeriksa tipe TypeScript tanpa emit |

---

## Deploy ke GitHub Pages

Website ini sudah dikonfigurasi untuk deploy otomatis ke GitHub Pages menggunakan **GitHub Actions**.

### Setup Sekali

1. Buka repository di GitHub
2. Pergi ke **Settings** > **Pages**
3. Pada **Source**, pilih **GitHub Actions**
4. Selesai

### Deploy Otomatis

Setiap kali kode di-push ke branch `main`:

1. GitHub Actions menjalankan workflow (`.github/workflows/deploy.yml`)
2. Install dependencies dengan `npm ci`
3. Build production dengan `npm run build`
4. Upload artifact dari folder `dist/`
5. Deploy ke GitHub Pages

Website akan tersedia di: `https://<username>.github.io/<repository-name>/`

### Konfigurasi yang Membuat Ini Bekerja

| File | Fungsi |
|------|--------|
| `vite.config.ts` &mdash; `base: './'` | Aset (JS/CSS) menggunakan path relatif, bukan absolut |
| `src/main.tsx` &mdash; `HashRouter` | Routing via hash (`#/`), tidak butuh konfigurasi server |
| `public/.nojekyll` | Mencegah GitHub memproses folder dengan Jekyll |
| `public/404.html` | Fallback: redirect URL tidak dikenal ke `index.html` |
| `.github/workflows/deploy.yml` | Workflow CI/CD untuk auto-deploy |

---

## Konfigurasi Penting

### Mengubah Nomor WhatsApp

Nomor WhatsApp tersimpan sebagai konstanta di dua file:

```
src/pages/Home.tsx       -> const WHATSAPP_NUMBER = '62882006725559'
src/components/BookingForm.tsx -> const WHATSAPP_NUMBER = '62882006725559'
```

### Mengubah Nomor Rekening

```
src/components/BookingForm.tsx -> const BANK_ACCOUNT = '0392164357'
src/components/BookingForm.tsx -> const BANK_NAME = 'Kia Maheswari'
```

### Menambah/Mengubah Sesi

Data sesi tersimpan di dua lokasi (harus sinkron):

```
src/pages/Home.tsx       -> sessions array (untuk kartu di beranda)
src/pages/BookingPage.tsx -> sessionMap object (untuk halaman pemesanan)
```

### Mengubah Testimoni

```
src/pages/Home.tsx -> testimonials array
```

### Mengubah Warga Warna

Semua warna dikelola via CSS Custom Properties di:

```
src/index.css -> :root { ... }        (light mode)
src/index.css -> [data-theme="dark"]  (dark mode)
```

### Mengubah Font

Font dimuat dari Google Fonts di `index.html` dan dikonfigurasi di `tailwind.config.js`:

```javascript
// tailwind.config.js
fontFamily: {
  display: ['"Cormorant Garamond"', 'serif'],
  body: ['"Plus Jakarta Sans"', 'sans-serif'],
}
```

Font **Inter** khusus untuk harga diatur langsung di `.session-price` di `src/index.css`.

---

## Kontak

| Platform | Handle |
|----------|--------|
| WhatsApp | [+62 882-0067-25559](https://wa.me/62882006725559) |
| Instagram | [@kiamaheswari_](https://instagram.com/kiamaheswari_) |
| Instagram | [@omah.maheswari](https://instagram.com/omah.maheswari) |
| Instagram | [@maheswarikia](https://instagram.com/maheswarikia) |
| Lokasi | Mojokerto, Jawa Timur, Indonesia |
| Website | kiamaheswari.com |

---

## Lisensi

Copyright &copy; 2026 &mdash; **Kia Maheswari**. Powered by [Kapten Nemo](https://8xploit.github.io/cv).

<div align="center">
<br/>
<i>Unlock your soul &amp; Shine bright together</i>
<br/>
<i>&mdash; Kia Maheswari</i>
<br/><br/>
<hr/>
Made with care using React, TypeScript, Vite &amp; Tailwind CSS
</div>
