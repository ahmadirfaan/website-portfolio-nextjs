# PowerShell script untuk build dan push Docker image
# Usage: .\deploy.ps1 [your-dockerhub-username]

param(
    [string]$DockerUsername = "your-username"  # Ganti dengan username Docker Hub Anda
)

$ErrorActionPreference = "Stop"

$ImageName = "portfolio-website"
$FullImageName = "${DockerUsername}/${ImageName}:latest"

Write-Host "🐳 Docker Deployment Script" -ForegroundColor Cyan
Write-Host "============================" -ForegroundColor Cyan
Write-Host ""

# Check jika Docker sudah running
try {
    docker info | Out-Null
} catch {
    Write-Host "❌ Docker tidak berjalan. Silakan start Docker terlebih dahulu." -ForegroundColor Yellow
    exit 1
}

# Step 1: Build image
Write-Host "📦 Building Docker image..." -ForegroundColor Cyan
docker build -t "${ImageName}:latest" .
docker tag "${ImageName}:latest" $FullImageName
Write-Host "✅ Build selesai!" -ForegroundColor Green
Write-Host ""

# Step 2: Test image lokal (optional)
$test = Read-Host "Test image lokal? (y/n)"
if ($test -eq "y" -or $test -eq "Y") {
    Write-Host "🧪 Testing image lokal..." -ForegroundColor Cyan
    Write-Host "   Akses di http://localhost:3000" -ForegroundColor Yellow
    Write-Host "   Tekan Ctrl+C untuk stop" -ForegroundColor Yellow
    Write-Host ""
    docker run --rm -p 3000:3000 "${ImageName}:latest"
}

# Step 3: Login ke Docker Hub
Write-Host ""
Write-Host "🔐 Login ke Docker Hub..." -ForegroundColor Cyan
docker login

# Step 4: Push ke Docker Hub
Write-Host ""
Write-Host "📤 Pushing image ke Docker Hub..." -ForegroundColor Cyan
docker push $FullImageName
Write-Host "✅ Image berhasil di-push!" -ForegroundColor Green
Write-Host ""

Write-Host "🎉 Deployment selesai!" -ForegroundColor Green
Write-Host "Image: $FullImageName" -ForegroundColor Cyan
Write-Host ""
Write-Host "Untuk deploy di server, jalankan:" -ForegroundColor Yellow
Write-Host "docker pull $FullImageName"
Write-Host "docker run -d -p 3000:3000 --name portfolio-website --restart unless-stopped $FullImageName"
