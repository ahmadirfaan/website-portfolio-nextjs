# 🐳 Panduan Deployment dengan Docker

## 📋 Prerequisites

- Docker & Docker Compose terinstall
- Akun Docker Hub (gratis) atau registry lainnya
- Server/VPS dengan Docker terinstall

---

## 🚀 Langkah-Langkah Deployment

### 1. Build Docker Image

```bash
# Build image
docker build -t portfolio-website:latest .

# Atau dengan tag untuk Docker Hub
docker build -t username/portfolio-website:latest .
```

### 2. Test Image Lokal

```bash
# Run container lokal untuk testing
docker run -p 3000:3000 portfolio-website:latest

# Atau menggunakan docker-compose
docker-compose up
```

Akses di browser: `http://localhost:3000`

### 3. Push ke Docker Hub

```bash
# Login ke Docker Hub
docker login

# Tag image (jika belum)
docker tag portfolio-website:latest username/portfolio-website:latest

# Push ke Docker Hub
docker push username/portfolio-website:latest
```

### 4. Pull dan Run di Server

```bash
# SSH ke server Anda
ssh user@your-server-ip

# Pull image dari Docker Hub
docker pull username/portfolio-website:latest

# Run container
docker run -d \
  --name portfolio-website \
  -p 3000:3000 \
  --restart unless-stopped \
  username/portfolio-website:latest
```

### 5. Setup dengan Docker Compose (Recommended)

Di server, buat file `docker-compose.yml`:

```yaml
version: '3.8'

services:
  portfolio:
    image: username/portfolio-website:latest
    container_name: portfolio-website
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Kemudian jalankan:
```bash
docker-compose up -d
```

---

## 🌐 Setup Reverse Proxy dengan Nginx

Untuk production, gunakan Nginx sebagai reverse proxy:

### Install Nginx di Server

```bash
sudo apt update
sudo apt install nginx
```

### Konfigurasi Nginx

Buat file `/etc/nginx/sites-available/portfolio`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Aktifkan konfigurasi:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Setup SSL dengan Let's Encrypt (Gratis)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 💰 Rekomendasi Server Murah untuk Docker

### 1. DigitalOcean Droplet
**Harga:** $6/bulan (~Rp 90rb/bulan)
**Spesifikasi:**
- 1 vCPU
- 1GB RAM
- 25GB SSD
- 1TB Transfer

**Link:** https://www.digitalocean.com

### 2. Vultr
**Harga:** $6/bulan (~Rp 90rb/bulan)
**Spesifikasi:**
- 1 vCPU
- 1GB RAM
- 25GB SSD
- 1TB Bandwidth

**Link:** https://www.vultr.com

### 3. Linode (Akamai)
**Harga:** $5/bulan (~Rp 75rb/bulan)
**Spesifikasi:**
- 1 vCPU
- 1GB RAM
- 25GB SSD
- 1TB Transfer

**Link:** https://www.linode.com

### 4. Hetzner Cloud
**Harga:** €4.15/bulan (~Rp 70rb/bulan) - PALING MURAH!
**Spesifikasi:**
- 1 vCPU
- 2GB RAM
- 20GB SSD
- 20TB Transfer

**Link:** https://www.hetzner.com/cloud

### 5. AWS Lightsail
**Harga:** $3.50/bulan (~Rp 50rb/bulan) - Promo pertama
**Spesifikasi:**
- 512MB RAM
- 1 vCPU
- 20GB SSD
- 1TB Transfer

**Link:** https://aws.amazon.com/lightsail

### 6. Contabo (Eropa)
**Harga:** €3.99/bulan (~Rp 65rb/bulan)
**Spesifikasi:**
- 2 vCPU
- 2GB RAM
- 50GB SSD
- Unlimited Traffic

**Link:** https://www.contabo.com

---

## 🔧 Script Otomatis untuk Deployment

Buat file `deploy.sh`:

```bash
#!/bin/bash

# Konfigurasi
IMAGE_NAME="username/portfolio-website"
CONTAINER_NAME="portfolio-website"
PORT=3000

echo "🚀 Building Docker image..."
docker build -t $IMAGE_NAME:latest .

echo "📤 Pushing to Docker Hub..."
docker push $IMAGE_NAME:latest

echo "🔄 Deploying to server..."
ssh user@your-server-ip << EOF
    docker pull $IMAGE_NAME:latest
    docker stop $CONTAINER_NAME || true
    docker rm $CONTAINER_NAME || true
    docker run -d \
        --name $CONTAINER_NAME \
        -p $PORT:3000 \
        --restart unless-stopped \
        $IMAGE_NAME:latest
    docker image prune -f
EOF

echo "✅ Deployment completed!"
```

Jalankan dengan:
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 📝 Best Practices

### 1. Multi-stage Build
✅ Sudah diimplementasikan di Dockerfile untuk mengurangi ukuran image

### 2. Non-root User
✅ Sudah diimplementasikan untuk security

### 3. Health Check
Tambahkan di Dockerfile:
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"
```

### 4. Resource Limits
Gunakan di docker-compose.yml:
```yaml
deploy:
  resources:
    limits:
      cpus: '0.5'
      memory: 512M
```

### 5. Volume untuk Logs (Opsional)
```yaml
volumes:
  - ./logs:/app/logs
```

---

## 🔄 Update Deployment

Untuk update aplikasi:

```bash
# Di server
docker pull username/portfolio-website:latest
docker-compose down
docker-compose up -d
```

Atau dengan script:
```bash
docker-compose pull && docker-compose up -d
```

---

## 📊 Monitoring

### Check Logs
```bash
docker logs portfolio-website
docker logs -f portfolio-website  # Follow logs
```

### Check Resource Usage
```bash
docker stats portfolio-website
```

### Check Container Status
```bash
docker ps
docker inspect portfolio-website
```

---

## ❓ Troubleshooting

### Port sudah digunakan?
```bash
# Cek port yang digunakan
sudo lsof -i :3000

# Atau ubah port di docker run
docker run -p 8080:3000 ...
```

### Container tidak start?
```bash
# Cek logs
docker logs portfolio-website

# Cek resource
docker stats portfolio-website
```

### Build error?
```bash
# Build tanpa cache
docker build --no-cache -t portfolio-website:latest .
```

---

## 💡 Tips Optimasi

1. **Gunakan .dockerignore** - Sudah dibuat untuk mengurangi build context
2. **Layer caching** - Urutkan COPY commands dari yang jarang berubah ke yang sering berubah
3. **Alpine images** - Sudah digunakan (node:20-alpine) untuk ukuran lebih kecil
4. **Multi-stage build** - Sudah diimplementasikan
5. **Production dependencies only** - Pastikan hanya install production deps di final stage

---

## 🎯 Estimasi Biaya Total

**Server:** €4-6/bulan (~Rp 65-90rb/bulan)
**Domain:** ~$8-10/tahun (~Rp 120-150rb/tahun)
**Docker Hub:** GRATIS (unlimited public repos)

**Total Bulanan:** ~Rp 65-90rb/bulan
**Total Tahunan:** ~Rp 780rb - 1.2jt/tahun

---

**Selamat deploy dengan Docker! 🐳**
