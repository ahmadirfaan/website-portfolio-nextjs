# PowerShell script untuk setup local deployment dengan Docker + Nginx
# Domain: irfaanhibatullah.com

$ErrorActionPreference = "Stop"

Write-Host "🚀 Setup Local Deployment dengan Docker + Nginx" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check Docker
try {
    docker info | Out-Null
} catch {
    Write-Host "❌ Docker tidak berjalan. Silakan start Docker terlebih dahulu." -ForegroundColor Red
    exit 1
}

# Create logs directory
Write-Host "📁 Membuat direktori untuk logs..." -ForegroundColor Cyan
New-Item -ItemType Directory -Force -Path "nginx-logs" | Out-Null
Write-Host "✅ Direktori logs dibuat" -ForegroundColor Green
Write-Host ""

# Build dan start containers
Write-Host "🐳 Building dan starting containers..." -ForegroundColor Cyan
docker-compose -f docker-compose.local.yml up -d --build

Write-Host ""
Write-Host "✅ Setup selesai!" -ForegroundColor Green
Write-Host ""

Write-Host "📋 Informasi:" -ForegroundColor Yellow
Write-Host "   Domain: irfaanhibatullah.com" -ForegroundColor Cyan
Write-Host "   Port: 80 (HTTP)" -ForegroundColor Cyan
Write-Host "   Nginx: Reverse proxy ke portfolio container" -ForegroundColor Cyan
Write-Host ""

Write-Host "📝 Untuk mengakses website:" -ForegroundColor Yellow
Write-Host "   1. Tambahkan ke C:\Windows\System32\drivers\etc\hosts:" -ForegroundColor White
Write-Host "      127.0.0.1    irfaanhibatullah.com" -ForegroundColor Cyan
Write-Host "      127.0.0.1    www.irfaanhibatullah.com" -ForegroundColor Cyan
Write-Host "   2. Jalankan PowerShell sebagai Administrator untuk edit hosts file" -ForegroundColor White
Write-Host "   3. Akses di browser: http://irfaanhibatullah.com" -ForegroundColor Cyan
Write-Host ""

Write-Host "🔧 Commands berguna:" -ForegroundColor Yellow
Write-Host "   View logs: docker-compose -f docker-compose.local.yml logs -f" -ForegroundColor Cyan
Write-Host "   Stop: docker-compose -f docker-compose.local.yml down" -ForegroundColor Cyan
Write-Host "   Restart: docker-compose -f docker-compose.local.yml restart" -ForegroundColor Cyan
Write-Host "   Rebuild: docker-compose -f docker-compose.local.yml up -d --build" -ForegroundColor Cyan
Write-Host ""
