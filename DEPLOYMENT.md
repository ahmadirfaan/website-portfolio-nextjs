# Panduan Deployment Portfolio Website

## 🚀 Opsi Deployment Gratis/Murah

### 0. Docker Deployment (Custom Server)
**Kenapa Docker?**
- ✅ Full control atas server
- ✅ Bisa deploy di VPS murah
- ✅ Portable dan konsisten
- ✅ Mudah untuk scaling

**Cara Deploy:**
1. Build Docker image: `docker build -t portfolio-website .`
2. Push ke Docker Hub: `docker push username/portfolio-website`
3. Pull di server: `docker pull username/portfolio-website`
4. Run container: `docker run -d -p 3000:3000 portfolio-website`

**📖 Panduan Lengkap:** Lihat [DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md)

**Script Otomatis:**
- Linux/Mac: `./deploy.sh your-username`
- Windows: `.\deploy.ps1 your-username`

---

### 1. Vercel (REKOMENDASI - Gratis)
**Kenapa Vercel?**
- ✅ Gratis untuk proyek pribadi
- ✅ Dibuat khusus untuk Next.js (tim yang sama)
- ✅ Deploy otomatis dari GitHub
- ✅ SSL gratis
- ✅ CDN global
- ✅ Custom domain gratis

**Cara Deploy:**
1. Push project ke GitHub/GitLab/Bitbucket
2. Kunjungi https://vercel.com
3. Login dengan GitHub
4. Klik "Add New Project"
5. Import repository Anda
6. Vercel akan otomatis detect Next.js
7. Klik "Deploy"
8. Selesai! Website Anda live dalam 2-3 menit

**Setelah Deploy:**
- Tambahkan custom domain di Settings > Domains
- Update DNS records sesuai instruksi Vercel

---

### 2. Netlify (Gratis)
**Cara Deploy:**
1. Push ke GitHub
2. Kunjungi https://netlify.com
3. Login dengan GitHub
4. Klik "Add new site" > "Import an existing project"
5. Pilih repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Deploy!

---

### 3. Cloudflare Pages (Gratis)
**Cara Deploy:**
1. Push ke GitHub
2. Login ke Cloudflare Dashboard
3. Pages > Create a project
4. Connect GitHub repository
5. Build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
6. Deploy!

---

## 🌐 Rekomendasi Domain Murah

### 1. Cloudflare Registrar (PALING MURAH)
**Harga:** ~$8-10/tahun untuk .com
**Keuntungan:**
- ✅ Harga wholesale (tanpa markup)
- ✅ Privacy protection gratis
- ✅ Transfer mudah
- ✅ DNS management terintegrasi

**Cara Beli:**
1. Login ke Cloudflare Dashboard
2. Domain > Register Domains
3. Cari domain yang diinginkan
4. Checkout

---

### 2. Namecheap
**Harga:** ~$8-12/tahun untuk .com
**Keuntungan:**
- ✅ Promo tahun pertama murah
- ✅ Interface mudah
- ✅ Support 24/7

**Link:** https://www.namecheap.com

---

### 3. Niagahoster (Indonesia)
**Harga:** ~Rp 100-150rb/tahun untuk .com
**Keuntungan:**
- ✅ Support bahasa Indonesia
- ✅ Pembayaran via bank lokal
- ✅ Customer service responsif

**Link:** https://www.niagahoster.co.id

---

### 4. Domainesia (Indonesia)
**Harga:** ~Rp 100-150rb/tahun untuk .com
**Keuntungan:**
- ✅ Support bahasa Indonesia
- ✅ Promo menarik
- ✅ Payment gateway lokal

**Link:** https://www.domainesia.com

---

## 📝 Langkah-Langkah Lengkap (Vercel + Domain)

### Step 1: Deploy ke Vercel
1. Pastikan project sudah di GitHub
2. Login ke https://vercel.com
3. Import project
4. Deploy (otomatis)

### Step 2: Beli Domain
1. Pilih registrar (rekomendasi: Cloudflare atau Namecheap)
2. Cari domain yang tersedia
3. Beli domain

### Step 3: Connect Domain ke Vercel
1. Di Vercel dashboard, masuk ke project
2. Settings > Domains
3. Add domain (contoh: yourname.com)
4. Vercel akan memberikan DNS records:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

### Step 4: Update DNS di Registrar
1. Login ke registrar domain Anda
2. Masuk ke DNS Management
3. Tambahkan records sesuai yang diberikan Vercel
4. Tunggu propagasi DNS (bisa 5 menit - 48 jam)

### Step 5: SSL Otomatis
- Vercel akan otomatis setup SSL certificate
- Website Anda akan bisa diakses via HTTPS

---

## 💰 Estimasi Biaya

**Deployment:** GRATIS (Vercel/Netlify/Cloudflare Pages)
**Domain:** 
- Cloudflare: ~$8-10/tahun (~Rp 120-150rb)
- Namecheap: ~$8-12/tahun (~Rp 120-180rb)
- Niagahoster: ~Rp 100-150rb/tahun

**Total Biaya Tahun Pertama:** ~Rp 100-180rb/tahun (hanya domain)

---

## 🎯 Tips Menghemat Biaya

1. **Gunakan Cloudflare Registrar** - harga paling murah
2. **Pilih ekstensi murah** - .com paling populer, tapi .xyz/.online lebih murah
3. **Manfaatkan promo** - banyak registrar kasih diskon tahun pertama
4. **Gunakan Vercel** - deployment gratis tanpa batasan untuk personal project

---

## ❓ Troubleshooting

**Domain tidak connect?**
- Pastikan DNS records sudah benar
- Tunggu propagasi DNS (bisa sampai 48 jam)
- Cek di https://dnschecker.org

**Build error di Vercel?**
- Pastikan semua dependencies di package.json
- Cek build logs di Vercel dashboard
- Pastikan Node.js version compatible

---

**Selamat deploy! 🎉**
