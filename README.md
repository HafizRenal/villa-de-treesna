# Villa de Treesna — Website

**Retreat alami di Situgunung, Gede Pangrango, Sukabumi.**

Website single-page untuk Villa de Treesna. Dibangun dengan HTML, CSS, dan JavaScript murni.

## Tech Stack
- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Playfair Display + DM Sans)
- Deploy via Vercel

## Struktur Folder
```
villa-de-treesna/
├── index.html          ← Halaman utama (single page)
├── css/
│   └── style.css       ← Seluruh styling
├── js/
│   └── main.js         ← Interaksi & animasi
├── assets/
│   └── images/         ← Taruh foto-foto villa di sini
│       ├── hero.jpg    ← Foto utama (landscape Situgunung)
│       ├── villa1.jpg  ← Foto crop brosur Villa 1
│       ├── villa2.jpg  ← Foto crop brosur Villa 2
│       ├── villa3.jpg  ← Foto crop brosur Villa 3
│       ├── villa4.jpg  ← Foto crop brosur Villa 4
│       └── villa5.jpg  ← Foto crop brosur Villa 5
├── vercel.json         ← Config deploy Vercel
└── README.md           ← File ini
```

## Yang Perlu Dikustomisasi
1. **Foto**: Ganti placeholder di `assets/images/` dengan foto asli
2. **Nomor WhatsApp**: Ganti `6281234567890` di seluruh `index.html` dengan nomor villa
3. **Google Maps embed**: Ganti URL iframe di section lokasi dengan embed yang benar
4. **Instagram**: Ganti `@villadetreesna` dengan akun Instagram yang benar

## Brand Colors
| Nama       | Hex       | Penggunaan              |
|------------|-----------|-------------------------|
| Forest     | `#2C3E2D` | Primary, navbar, footer |
| Teak       | `#8B6F47` | Secondary, wood accent  |
| Mist       | `#A8C4A2` | Green accent            |
| Terracotta | `#B85C3A` | Warm accent, badges     |
| Gold       | `#C4943A` | CTA buttons             |
| Linen      | `#F5F0E8` | Background              |
