# IKATE - Ikatan Alumni Teknik Elektro

Website database alumni untuk IKATE (Ikatan Alumni Teknik Elektro) yang dibangun dengan Laravel, React, dan Inertia.js.

## 🚀 Tech Stack

- **Backend**: Laravel 10+
- **Frontend**: React 18+ dengan TypeScript
- **Bridge**: Inertia.js
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React

## 📋 Fitur

### Halaman Home

- **Navbar Responsif**: Navigasi ke Beranda, Alumni, Karir, Berita, Kontak
- **Hero Section**: Copy writing menarik dengan CTA buttons
- **Statistik**: Menampilkan data alumni, perusahaan partner, program mentoring
- **Visi & Misi**: Informasi organisasi dengan desain card yang menarik
- **Struktur Pengurus**: Profil pengurus dengan avatar dan informasi detail
- **Footer**: Informasi kontak dan navigasi tambahan

### Komponen yang Dibuat

- `StatCard`: Komponen untuk menampilkan statistik dengan icon dan warna yang berbeda
- `MobileNav`: Navigasi mobile yang responsif menggunakan Sheet component
- Layout yang modern dan menarik dengan gradient dan hover effects

## 🛠️ Instalasi

1. **Clone repository**

```bash
git clone <repository-url>
cd ikate
```

2. **Install dependencies**

```bash
composer install
npm install
```

3. **Setup environment**

```bash
cp .env.example .env
php artisan key:generate
```

4. **Setup database**

```bash
php artisan migrate
php artisan db:seed
```

5. **Build assets**

```bash
npm run build
```

6. **Jalankan server**

```bash
php artisan serve
```

## 📁 Struktur File

```
resources/js/
├── components/
│   ├── ui/              # shadcn components
│   ├── mobile-nav.tsx   # Mobile navigation
│   └── stat-card.tsx    # Statistics card
├── pages/
│   └── home.tsx         # Home page
└── types/               # TypeScript types
```

## 🎨 Design System

### Colors

- **Primary**: Blue (#2563eb)
- **Secondary**: Green (#16a34a)
- **Accent**: Purple (#9333ea), Orange (#ea580c)

### Components

- **Cards**: Modern card design dengan hover effects
- **Buttons**: Consistent button styling dengan variants
- **Navigation**: Responsive navigation dengan mobile menu
- **Typography**: Clean typography dengan proper hierarchy

## 📱 Responsive Design

- **Desktop**: Full navigation menu dengan CTA buttons
- **Tablet**: Responsive grid layout
- **Mobile**: Mobile navigation dengan sheet component

## 🔧 Development

### Menjalankan Development Server

```bash
npm run dev
php artisan serve
```

### Building untuk Production

```bash
npm run build
```

## 📝 TODO

- [ ] Implementasi halaman Alumni
- [ ] Implementasi halaman Karir
- [ ] Implementasi halaman Berita
- [ ] Implementasi halaman Kontak
- [ ] Sistem autentikasi untuk alumni
- [ ] Database untuk data alumni
- [ ] Upload dan management foto pengurus
- [ ] SEO optimization
- [ ] Testing

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Kontak

- **Email**: info@ikate.org
- **Phone**: +62 21 1234 5678
- **Address**: Jakarta, Indonesia

---

© 2024 IKATE. All rights reserved.
