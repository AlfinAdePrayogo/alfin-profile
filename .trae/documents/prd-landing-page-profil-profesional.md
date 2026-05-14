# PRD - Landing Page Profil Profesional Alfin Ade Prayogo

## Summary

Dokumen ini mendefinisikan kebutuhan produk untuk landing page profil profesional yang elegan, modern, detail, dan recruiter-friendly bagi Alfin Ade Prayogo. Produk dirancang sebagai single-page responsive website dengan dark mode sebagai standar utama, visual minimalis-elegan, dan fokus pada kredibilitas profesional, cerita karier, portofolio unggulan, serta konversi ke kontak langsung.

Tujuan utama:
- Menampilkan personal branding profesional yang kuat untuk recruiter.
- Menjelaskan transisi karier dari akuntansi ke peran operasional-keuangan dan minat data/otomatisasi.
- Menonjolkan tiga proyek/pengalaman unggulan yang relevan.
- Mengarahkan pengunjung ke aksi kontak langsung melalui form, WhatsApp, dan email.

Keputusan utama yang sudah dikunci:
- Audiens utama: recruiter.
- Bahasa konten: bilingual.
- Sosial wajib: LinkedIn, GitHub, Instagram.
- Form kontak: simpan ke database Supabase.
- Baseline stack: React + Cloudflare + Supabase.
- Foto profil: gunakan placeholder lingkaran sampai aset final tersedia.
- Portofolio: tiga proyek unggulan.
- CTA utama: kontak langsung.

## Current State Analysis

Hasil eksplorasi workspace:
- Root project saat ini hanya memiliki file `d:\alfin\Personal\alfin-profile\test.txt`.
- Belum ada aplikasi frontend, konfigurasi package manager, struktur komponen, styling system, maupun backend integration.
- Belum ada folder `.trae` di workspace pada saat eksplorasi.

Implikasi:
- Implementasi perlu dimulai dari nol.
- Semua keputusan struktur aplikasi, arsitektur komponen, dan kontrak data perlu didefinisikan di depan agar executor dapat membangun tanpa ambiguitas.
- Karena belum ada source code, PRD juga berfungsi sebagai blueprint implementasi awal.

## Proposed Changes

### 1. Bootstrap aplikasi frontend React

File yang akan dibuat:
- `d:\alfin\Personal\alfin-profile\package.json`
- `d:\alfin\Personal\alfin-profile\src\main.*`
- `d:\alfin\Personal\alfin-profile\src\App.*`
- `d:\alfin\Personal\alfin-profile\index.html`
- `d:\alfin\Personal\alfin-profile\src\styles\globals.css`
- `d:\alfin\Personal\alfin-profile\src\styles\tokens.css`

Apa:
- Menyiapkan single-page app berbasis React untuk landing page.

Mengapa:
- React memenuhi kebutuhan komponen reusable, maintainability, dan skalabilitas untuk pengembangan komponen section-based.

Bagaimana:
- Gunakan font `Inter` dari Google Fonts.
- Terapkan dark mode sebagai default.
- Gunakan design token untuk warna utama:
  - Deep Slate `#0f172a` sebagai background.
  - Emerald atau Cyan sebagai accent utama.
  - Zinc-400 untuk teks sekunder.
- Pastikan layout mobile-first dan breakpoint tablet-desktop terdokumentasi jelas.

### 2. Susun arsitektur komponen reusable

File yang akan dibuat:
- `d:\alfin\Personal\alfin-profile\src\components\layout\Navbar.*`
- `d:\alfin\Personal\alfin-profile\src\components\layout\Footer.*`
- `d:\alfin\Personal\alfin-profile\src\components\sections\HeroSection.*`
- `d:\alfin\Personal\alfin-profile\src\components\sections\AboutSection.*`
- `d:\alfin\Personal\alfin-profile\src\components\sections\SkillsSection.*`
- `d:\alfin\Personal\alfin-profile\src\components\sections\ProjectsSection.*`
- `d:\alfin\Personal\alfin-profile\src\components\sections\InterestsSection.*`
- `d:\alfin\Personal\alfin-profile\src\components\sections\ContactSection.*`
- `d:\alfin\Personal\alfin-profile\src\components\ui\Button.*`
- `d:\alfin\Personal\alfin-profile\src\components\ui\SectionHeading.*`
- `d:\alfin\Personal\alfin-profile\src\components\ui\SkillGroup.*`
- `d:\alfin\Personal\alfin-profile\src\components\ui\ProjectCard.*`
- `d:\alfin\Personal\alfin-profile\src\components\ui\SocialLink.*`
- `d:\alfin\Personal\alfin-profile\src\components\ui\InterestCard.*`

Apa:
- Memecah landing page menjadi komponen layout, section, dan UI reusable.

Mengapa:
- Memudahkan konsistensi styling, pengembangan bertahap, dan pemeliharaan jangka panjang.

Bagaimana:
- `Navbar` mendukung glassmorphism, sticky behavior, dan smooth scroll ke section.
- `Button`, `SectionHeading`, `ProjectCard`, dan `SocialLink` dipakai lintas section untuk menjaga konsistensi.
- Data-driven rendering diprioritaskan untuk daftar skill, proyek, interest, dan sosial.

### 3. Definisikan model konten dan data statis

File yang akan dibuat:
- `d:\alfin\Personal\alfin-profile\src\data\profile.*`
- `d:\alfin\Personal\alfin-profile\src\data\projects.*`
- `d:\alfin\Personal\alfin-profile\src\data\skills.*`
- `d:\alfin\Personal\alfin-profile\src\data\socials.*`

Apa:
- Menyimpan seluruh konten landing page sebagai data terstruktur terpusat.

Mengapa:
- Mempermudah pembaruan konten tanpa mengubah struktur komponen.

Bagaimana:
- Hero:
  - Nama: Alfin Ade Prayogo.
  - Subheadline: Assistant Treasurer & Data Enthusiast yang berfokus pada otomatisasi sistem keuangan dan manajemen bisnis yang efisien.
  - CTA primer: Hubungi Saya.
  - CTA sekunder: Lihat Portofolio.
- About:
  - Narasi transisi dari lulusan SMK Akuntansi ke Assistant Treasurer di lembaga pendidikan.
  - Penekanan pada ketertarikan Data Analysis dan penerapan logika keuangan untuk sistem efektif.
  - Domisili: Purbalingga, Jawa Tengah.
- Skills dibagi menjadi 3 kategori:
  - Finance & Business.
  - Technical & Data.
  - Tools.
- Projects menampilkan 3 kartu unggulan:
  - Sistem Pembukuan Otomatis.
  - Agribisnis Trading.
  - Culinary Business.
- Interests menampilkan:
  - Computer Hardware.
  - Desain Interior/Landscaping.
  - Futsal.
- Footer dan kontak menampilkan:
  - WhatsApp: `+62 895-6224-37748`
  - Email: `alfinadeprayogo123@gmail.com`
  - LinkedIn, GitHub, Instagram.
- Untuk URL sosial yang belum tersedia di workspace, gunakan placeholder jelas di data dan tandai sebagai dependency konten final.

### 4. Implementasikan experience visual dan interaction design

File yang akan dibuat/diubah:
- `d:\alfin\Personal\alfin-profile\src\styles\globals.css`
- `d:\alfin\Personal\alfin-profile\src\styles\tokens.css`
- Komponen section dan UI terkait

Apa:
- Menerapkan identitas visual minimalis-elegan dengan interaksi halus.

Mengapa:
- User meminta kesan profesional, modern, dan detail dengan nuansa teknologi/data.

Bagaimana:
- Navbar dengan efek glassmorphism pada background transparan blur.
- Smooth scrolling antar section.
- Hover interaktif pada `ProjectCard` berupa transform ringan, border glow accent, dan elevasi visual.
- Gunakan spacing lega, tipografi rapi, dan kontras tinggi untuk dark theme.
- Hero menampilkan lingkaran placeholder untuk foto profil.
- Pastikan animasi ringan dan tidak mengganggu performa.

### 5. Rancang section contact dengan integrasi Supabase

File yang akan dibuat:
- `d:\alfin\Personal\alfin-profile\src\components\forms\ContactForm.*`
- `d:\alfin\Personal\alfin-profile\src\lib\supabase.*`
- `d:\alfin\Personal\alfin-profile\src\lib\validation.*`
- `d:\alfin\Personal\alfin-profile\.env.example`

Apa:
- Menyediakan form kontak minimalis berisi nama, email, dan pesan yang menyimpan data ke Supabase.

Mengapa:
- CTA utama adalah kontak langsung dan user telah mengunci kebutuhan penyimpanan ke database Supabase.

Bagaimana:
- Validasi sisi klien untuk field required dan format email.
- Submit menyimpan data ke tabel Supabase, misalnya `contact_messages`.
- State form mencakup idle, loading, success, dan error.
- Sertakan fallback kontak langsung via WhatsApp/email di area yang sama.
- Dokumentasikan environment variables yang dibutuhkan untuk koneksi Supabase.

### 6. Siapkan struktur deployment dan readiness untuk Cloudflare

File yang akan dibuat:
- `d:\alfin\Personal\alfin-profile\README.md`
- `d:\alfin\Personal\alfin-profile\wrangler.*` atau konfigurasi deployment yang sesuai

Apa:
- Menyiapkan baseline deployment ke Cloudflare.

Mengapa:
- Stack target sudah dikunci ke React + Cloudflare.

Bagaimana:
- Dokumentasikan proses build dan deployment.
- Pastikan SPA fallback dan environment variable strategy untuk integrasi Supabase dijelaskan.
- Definisikan batas ruang lingkup: belum mencakup dashboard admin, CMS, atau analytics kustom kecuali ditambahkan kemudian.

## Product Requirements

### Tujuan Bisnis
- Meningkatkan kredibilitas personal brand untuk peluang karier profesional.
- Menyediakan titik kontak yang jelas dan cepat untuk recruiter.
- Menampilkan kombinasi kompetensi finance, business, dan technical automation dalam satu narasi yang kohesif.

### Tujuan Pengguna
- Recruiter dapat memahami profil Alfin dalam waktu singkat.
- Recruiter dapat melihat kompetensi inti, pengalaman/proyek, dan informasi kontak tanpa kebingungan.
- Recruiter dapat menghubungi Alfin secara langsung melalui form, WhatsApp, atau email.

### Non-Goals
- Tidak mencakup multi-page website.
- Tidak mencakup blog, CMS, atau dashboard admin.
- Tidak mencakup autentikasi user.
- Tidak mencakup sistem email notification pada fase awal.

### Informasi Konten Utama
- Hero bilingual dengan value proposition yang tetap singkat.
- About section lebih naratif dan menjelaskan transisi karier.
- Skills disajikan terkelompok, bukan daftar panjang acak.
- Projects menggunakan grid rapi dan recruiter-friendly.
- Interest memberi sentuhan personal tanpa menggeser fokus profesional.

### Kebutuhan UX/UI
- Dark mode sebagai default dan visual utama.
- Responsive penuh pada mobile, tablet, desktop.
- Akses cepat dari navbar ke semua section.
- Visual hierarchy kuat: headline, proof of work, lalu contact.
- CTA primer mengarah ke kontak langsung.

### Kebutuhan Teknis
- React component architecture.
- Styling system yang reusable dan konsisten.
- Integrasi Supabase untuk penyimpanan form.
- Deployment target ke Cloudflare.
- Konfigurasi environment yang aman dan terdokumentasi.

### Acceptance Criteria
- Landing page memiliki section: Hero, About, Skills, Projects/Experience, Interests, Contact, Footer.
- Semua section tampil baik di mobile, tablet, dan desktop.
- Navbar sticky, bergaya glassmorphism, dan smooth scroll berfungsi.
- Tiga kategori skills tampil jelas dan mudah dipindai.
- Tiga proyek utama tampil dalam grid dengan hover state interaktif.
- Contact form dapat memvalidasi input dan mengirim data ke Supabase.
- Footer menampilkan sosial, WhatsApp, email, dan copyright.
- Bahasa bilingual tercermin pada konten atau strategi copy yang terdokumentasi.

## Assumptions & Decisions

### Assumptions
- Link final LinkedIn, GitHub, dan Instagram belum tersedia di workspace, sehingga akan diisi melalui data placeholder yang mudah diganti.
- Foto profil final belum tersedia dan fase awal memakai placeholder berbentuk lingkaran.
- Copy bilingual dapat diimplementasikan sebagai kombinasi headline/subcopy bilingual atau content map terstruktur, sesuai kompleksitas implementasi yang dipilih executor.

### Decisions
- Audiens utama adalah recruiter, sehingga struktur informasi diprioritaskan untuk evaluasi profesional cepat.
- CTA primer adalah kontak langsung, bukan eksplorasi portofolio.
- Form kontak fase awal hanya menyimpan ke Supabase tanpa notifikasi email.
- Proyek ditampilkan sebagai tiga kartu unggulan, bukan timeline penuh.
- Stack frontend menggunakan React dan target deployment Cloudflare.

### Dependency Konten
- URL final untuk LinkedIn, GitHub, Instagram.
- Foto profil final bila ingin mengganti placeholder.
- Bila tersedia, metrik pencapaian nyata untuk tiap proyek dapat ditambahkan pada fase konten berikutnya.

## Verification Steps

Executor nantinya harus memverifikasi:
- Struktur section sesuai PRD dan urutan informasi mendukung recruiter journey.
- Responsiveness di viewport mobile, tablet, desktop.
- Kontras dark theme, keterbacaan teks sekunder, dan konsistensi aksen warna.
- Reusability komponen dasar seperti button, section heading, project card, skill group.
- Smooth scroll, hover interaction, dan sticky navbar berjalan baik.
- Contact form tervalidasi dan berhasil menyimpan data ke Supabase.
- Semua informasi kontak penting tampil konsisten di section kontak dan footer.

## Deliverable Akhir yang Diharapkan

- Sebuah landing page profil profesional single-page yang elegan, modern, detail, dan responsif.
- Kualitas visual premium dengan dark-first design.
- Narasi personal brand yang kuat untuk recruiter.
- Arsitektur kode siap dikembangkan lebih lanjut tanpa perlu refactor besar.
