# 🏠 Panduan Local Deployment dengan Docker + Nginx

## 📋 Prerequisites

- Docker & Docker Compose terinstall
- Akses administrator untuk edit hosts file

---

## 🚀 Quick Start

### Windows (PowerShell):
```powershell
.\setup-local.ps1
```

### Linux/Mac:
```bash
chmod +x setup-local.sh
./setup-local.sh
```

---

## 📝 Setup Manual

### 1. Build dan Start Containers

```bash
# Build dan start semua services
docker-compose -f docker-compose.local.yml up -d --build
```

### 2. Edit Hosts File

**Windows:**
1. Buka Notepad sebagai Administrator
2. Buka file: `C:\Windows\System32\drivers\etc\hosts`
3. Tambahkan baris berikut:
```
127.0.0.1    irfaanhibatullah.com
127.0.0.1    www.irfaanhibatullah.com
```
4. Save file

**Linux/Mac:**
```bash
sudo nano /etc/hosts
```

Tambahkan:
```
127.0.0.1    irfaanhibatullah.com
127.0.0.1    www.irfaanhibatullah.com
```

### 3. Akses Website

Buka browser dan akses: **http://irfaanhibatullah.com**

---

## 🏗️ Arsitektur

```
Browser → Nginx (Port 80) → Portfolio Container (Port 3000)
```

- **Nginx**: Reverse proxy di port 80
- **Portfolio**: Next.js app di port 3000 (internal network)
- **Network**: Kedua container dalam network `portfolio-network`

---

## 🔧 Commands Berguna

### View Logs
```bash
# Semua services
docker-compose -f docker-compose.local.yml logs -f

# Hanya portfolio
docker-compose -f docker-compose.local.yml logs -f portfolio

# Hanya nginx
docker-compose -f docker-compose.local.yml logs -f nginx
```

### Stop Services
```bash
docker-compose -f docker-compose.local.yml down
```

### Restart Services
```bash
docker-compose -f docker-compose.local.yml restart
```

### Rebuild (setelah perubahan code)
```bash
docker-compose -f docker-compose.local.yml up -d --build
```

### Check Status
```bash
docker-compose -f docker-compose.local.yml ps
```

---

## 🔍 Troubleshooting

### Website tidak bisa diakses?

1. **Cek hosts file sudah benar:**
   ```bash
   # Windows PowerShell
   Get-Content C:\Windows\System32\drivers\etc\hosts
   
   # Linux/Mac
   cat /etc/hosts
   ```

2. **Cek containers running:**
   ```bash
   docker-compose -f docker-compose.local.yml ps
   ```

3. **Cek logs:**
   ```bash
   docker-compose -f docker-compose.local.yml logs
   ```

4. **Test portfolio container langsung:**
   ```bash
   # Temporarily expose port 3000
   docker run -d -p 3000:3000 --name portfolio-test portfolio-website:latest
   # Akses http://localhost:3000
   ```

### Port 80 sudah digunakan?

Jika port 80 sudah digunakan oleh aplikasi lain:

1. **Cek apa yang menggunakan port 80:**
   ```bash
   # Windows
   netstat -ano | findstr :80
   
   # Linux/Mac
   sudo lsof -i :80
   ```

2. **Ubah port di docker-compose.local.yml:**
   ```yaml
   nginx:
     ports:
       - "8080:80"  # Ubah ke 8080
   ```
   Kemudian akses: `http://irfaanhibatullah.com:8080`

### Nginx tidak connect ke portfolio?

1. **Cek network:**
   ```bash
   docker network inspect portfolio-website_portfolio-network
   ```

2. **Test connectivity:**
   ```bash
   docker exec portfolio-nginx ping portfolio
   ```

3. **Pastikan service name di nginx.conf sama dengan di docker-compose:**
   - nginx.conf: `proxy_pass http://portfolio:3000;`
   - docker-compose: service name harus `portfolio`

---

## 🔐 Setup SSL (HTTPS) - Optional

Untuk setup HTTPS lokal, bisa menggunakan mkcert:

### Install mkcert

**Windows:**
```powershell
choco install mkcert
```

**Linux/Mac:**
```bash
# Linux
sudo apt install mkcert

# Mac
brew install mkcert
```

### Generate Certificate

```bash
# Install local CA
mkcert -install

# Generate certificate untuk domain
mkcert irfaanhibatullah.com www.irfaanhibatullah.com

# Ini akan generate:
# - irfaanhibatullah.com+1.pem (certificate)
# - irfaanhibatullah.com+1-key.pem (private key)
```

### Update nginx.conf untuk HTTPS

```nginx
server {
    listen 80;
    server_name irfaanhibatullah.com www.irfaanhibatullah.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name irfaanhibatullah.com www.irfaanhibatullah.com;

    ssl_certificate /etc/nginx/ssl/irfaanhibatullah.com+1.pem;
    ssl_certificate_key /etc/nginx/ssl/irfaanhibatullah.com+1-key.pem;

    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://portfolio:3000;
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

### Update docker-compose untuk SSL

```yaml
nginx:
  volumes:
    - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    - ./nginx-logs:/var/log/nginx
    - ./ssl:/etc/nginx/ssl:ro  # Tambahkan ini
  ports:
    - "80:80"
    - "443:443"  # Tambahkan port 443
```

---

## 📊 Monitoring

### Check Resource Usage
```bash
docker stats portfolio-website portfolio-nginx
```

### Check Nginx Status
```bash
docker exec portfolio-nginx nginx -t
```

### View Nginx Access Logs
```bash
tail -f nginx-logs/portfolio_access.log
```

---

## 🎯 Next Steps

Setelah local deployment berhasil, untuk production:

1. **Deploy ke server** (VPS/Cloud)
2. **Setup DNS** untuk domain irfaanhibatullah.com
3. **Setup SSL** dengan Let's Encrypt
4. **Setup monitoring** (opsional)

Lihat [DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md) untuk panduan production deployment.

---

**Selamat mencoba! 🎉**
