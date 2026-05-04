# 🏠 Management Pengelola Kost

> Aplikasi web untuk **mengelola bisnis kost secara digital** — mulai dari data kamar, penyewa, tagihan sewa, hingga laporan keuangan. Dirancang untuk memudahkan pemilik kost dalam memantau dan mengelola properti mereka secara efisien.

---

## 🌐 Live Preview

> _Tambahkan URL deployment di sini jika tersedia._

---

## 📋 Deskripsi Project

Pengelolaan kost secara manual menggunakan buku catatan atau spreadsheet seringkali tidak efisien dan rawan kesalahan. Aplikasi ini hadir sebagai solusi digital yang memudahkan pemilik kost untuk:

- Memantau status kamar secara real-time
- Mengelola data penyewa dengan terstruktur
- Mencatat dan melacak pembayaran sewa
- Mendapatkan notifikasi jatuh tempo otomatis
- Melihat laporan keuangan dan statistik bisnis kost

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🚪 **Manajemen Kamar** | Kelola data kamar, status hunian, fasilitas, dan harga sewa |
| 👤 **Manajemen Penyewa** | Data lengkap penyewa termasuk identitas, kontak, dan riwayat sewa |
| 💳 **Pembayaran & Tagihan** | Catat pembayaran, buat tagihan, dan pantau status pelunasan |
| 🔔 **Notifikasi Jatuh Tempo** | Pengingat otomatis untuk tagihan yang mendekati atau melewati jatuh tempo |
| 📊 **Dashboard Statistik** | Overview bisnis kost — tingkat hunian, pemasukan, dan tren bulanan |
| 📈 **Laporan Keuangan** | Rekap pemasukan dan pengeluaran per periode |
| 📤 **Export PDF/Excel** | Download laporan dalam format PDF atau Excel untuk arsip |

---

## 🛠️ Tech Stack

| Teknologi | Keterangan |
|-----------|------------|
| **Next.js** | Framework utama dengan App Router |
| **React** | UI library |
| **Tailwind CSS** | Utility-first CSS framework |
| **shadcn/ui** | Komponen UI modern |
| **PostgreSQL** | Database relasional untuk penyimpanan data |
| **TypeScript** | Type-safe di seluruh codebase |
| **Vercel** | Platform deployment |

---

## 📁 Struktur Project

```
management-pengelola-kost/
├── app/
│   ├── page.tsx                  # Halaman utama / redirect
│   ├── layout.tsx                # Root layout
│   ├── dashboard/
│   │   └── page.tsx              # Dashboard statistik
│   ├── kamar/
│   │   ├── page.tsx              # Daftar kamar
│   │   └── [id]/page.tsx         # Detail kamar
│   ├── penyewa/
│   │   ├── page.tsx              # Daftar penyewa
│   │   └── [id]/page.tsx         # Detail penyewa
│   ├── pembayaran/
│   │   └── page.tsx              # Manajemen pembayaran & tagihan
│   ├── laporan/
│   │   └── page.tsx              # Laporan keuangan
│   └── api/                      # API routes
│       ├── kamar/
│       ├── penyewa/
│       └── pembayaran/
├── components/
│   ├── dashboard/
│   ├── kamar/
│   ├── penyewa/
│   ├── pembayaran/
│   └── ui/                       # shadcn/ui components
├── lib/
│   ├── db.ts                     # Koneksi PostgreSQL
│   └── utils.ts
├── public/
└── README.md
```

---

## 🚀 Cara Menjalankan Project

### Prasyarat

- [Node.js](https://nodejs.org/) versi 18 atau lebih baru
- [PostgreSQL](https://www.postgresql.org/) terinstall dan berjalan
- Package manager: `pnpm`, `npm`, atau `yarn`

### Instalasi

```bash
# 1. Clone repository
git clone https://github.com/username/Management-Pengelola-Kost.git

# 2. Masuk ke folder project
cd Management-Pengelola-Kost

# 3. Install dependencies
pnpm install
# atau
npm install

# 4. Salin file environment
cp .env.example .env.local
```

### Konfigurasi Environment

Buat file `.env.local` dan isi variabel berikut:

```env
# Database PostgreSQL
DATABASE_URL=postgresql://username:password@localhost:5432/kost_db

# Next.js
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

### Setup Database

```bash
# Buat database baru di PostgreSQL
createdb kost_db

# Jalankan migrasi (sesuaikan dengan setup project)
pnpm db:migrate
# atau
npm run db:migrate
```

### Jalankan Dev Server

```bash
pnpm dev
# atau
npm run dev
```

Buka di browser: `http://localhost:3000`

---

## 📦 Scripts

| Command | Fungsi |
|---------|--------|
| `pnpm dev` | Menjalankan development server |
| `pnpm build` | Build untuk production |
| `pnpm start` | Menjalankan production server |
| `pnpm lint` | Menjalankan ESLint |
| `pnpm db:migrate` | Menjalankan migrasi database |

---

## 🔄 Alur Penggunaan

```
1. Setup kamar
   (Tambah data kamar, fasilitas, harga sewa)
         ↓
2. Daftarkan penyewa
   (Input data identitas & assign ke kamar)
         ↓
3. Generate tagihan sewa
   (Otomatis berdasarkan tanggal masuk penyewa)
         ↓
4. Catat pembayaran
   (Update status lunas / belum lunas)
         ↓
5. Monitor via Dashboard
   (Statistik hunian, pemasukan bulan ini)
         ↓
6. Export Laporan
   (PDF / Excel untuk pembukuan)
```

---

## 📊 Fitur Dashboard

Dashboard menampilkan informasi penting secara sekilas:

- **Tingkat Hunian** — persentase kamar yang terisi vs kosong
- **Pemasukan Bulan Ini** — total pembayaran sewa yang sudah diterima
- **Tagihan Belum Lunas** — daftar penyewa yang belum membayar
- **Jatuh Tempo Terdekat** — notifikasi penyewa yang akan segera jatuh tempo
- **Grafik Pemasukan** — tren pemasukan bulanan dalam bentuk chart

---

## 📤 Format Export

| Format | Konten |
|--------|--------|
| **PDF** | Laporan keuangan, rekap pembayaran, data penyewa |
| **Excel** | Data tabular untuk analisis lebih lanjut |

---

## 🔔 Sistem Notifikasi Jatuh Tempo

Aplikasi secara otomatis mendeteksi dan menampilkan:
- ⚠️ Tagihan yang **akan jatuh tempo** dalam 7 hari ke depan
- 🔴 Tagihan yang **sudah melewati** tanggal jatuh tempo
- ✅ Tagihan yang **sudah lunas**

---

## 🚧 Status Project

> ⚠️ Project ini berstatus **Archived**. Kode tersedia sebagai referensi dan tidak lagi dalam tahap pengembangan aktif.

Pengembangan lebih lanjut yang bisa dilakukan:
- [ ] Sistem autentikasi & multi-user (pemilik kost & admin)
- [ ] Notifikasi via WhatsApp / Email otomatis ke penyewa
- [ ] Aplikasi mobile (React Native)
- [ ] Manajemen pengeluaran & maintenance kost
- [ ] Upload foto kamar dan KTP penyewa
- [ ] Sistem kontrak sewa digital

---

## 👨‍💻 Developer

Dibuat sebagai solusi digital untuk memudahkan pengelolaan bisnis kost secara modern dan efisien.

> Untuk pertanyaan atau saran pengembangan, silakan buka [Issues](https://github.com/username/Management-Pengelola-Kost/issues).

---

📄 Lisensi
Copyright © 2025 — All Rights Reserved.
Aplikasi ini merupakan produk digital komersial dari Bicara Digital yang dilindungi hak cipta. Penggunaan, distribusi, modifikasi, atau reproduksi dalam bentuk apapun tanpa izin tertulis dari pemilik adalah dilarang.
❌ Yang TIDAK diperbolehkan:

Menyalin, mendistribusikan, atau menjual ulang kode ini
Memodifikasi dan mengklaim sebagai karya sendiri
Menggunakan kode ini untuk keperluan komersial tanpa lisensi resmi
Membagikan akses repository kepada pihak ketiga

✅ Yang diperbolehkan (dengan pembelian lisensi):

Menggunakan aplikasi untuk satu properti kost milik sendiri
Melakukan kustomisasi minor sesuai kebutuhan bisnis
Mendapatkan update dan dukungan teknis dari developer

💼 Pembelian Lisensi & Informasi Lebih Lanjut
Untuk pembelian lisensi, kustomisasi, atau pertanyaan bisnis:

📧 Email: tambahkan email kamu
💬 WhatsApp: tambahkan nomor WhatsApp kamu


⚠️ Pelanggaran terhadap ketentuan lisensi ini dapat dikenakan tindakan hukum sesuai peraturan perundang-undangan yang berlaku.
