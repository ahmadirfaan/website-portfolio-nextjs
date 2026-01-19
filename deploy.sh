#!/bin/bash

# Script untuk build dan push Docker image
# Usage: ./deploy.sh [your-dockerhub-username]

set -e

# Warna untuk output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Konfigurasi
DOCKER_USERNAME=${1:-"ahmadirfaan"}  # Ganti dengan username Docker Hub Anda
IMAGE_NAME="portfolio-website"
FULL_IMAGE_NAME="${DOCKER_USERNAME}/${IMAGE_NAME}:latest"

echo -e "${BLUE}🐳 Docker Deployment Script${NC}"
echo -e "${BLUE}============================${NC}\n"

# Check jika Docker sudah running
if ! docker info > /dev/null 2>&1; then
    echo -e "${YELLOW}❌ Docker tidak berjalan. Silakan start Docker terlebih dahulu.${NC}"
    exit 1
fi

# Step 1: Build image
echo -e "${BLUE}📦 Building Docker image...${NC}"
docker build -t ${IMAGE_NAME}:latest .
docker tag ${IMAGE_NAME}:latest ${FULL_IMAGE_NAME}
echo -e "${GREEN}✅ Build selesai!${NC}\n"

# Step 2: Test image lokal (optional)
read -p "Test image lokal? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}🧪 Testing image lokal...${NC}"
    echo -e "${YELLOW}   Akses di http://localhost:3000${NC}"
    echo -e "${YELLOW}   Tekan Ctrl+C untuk stop${NC}\n"
    docker run --rm -p 3000:3000 ${IMAGE_NAME}:latest
fi

# Step 3: Login ke Docker Hub
echo -e "\n${BLUE}🔐 Login ke Docker Hub...${NC}"
docker login

# Step 4: Push ke Docker Hub
echo -e "\n${BLUE}📤 Pushing image ke Docker Hub...${NC}"
docker push ${FULL_IMAGE_NAME}
echo -e "${GREEN}✅ Image berhasil di-push!${NC}\n"

echo -e "${GREEN}🎉 Deployment selesai!${NC}"
echo -e "${BLUE}Image: ${FULL_IMAGE_NAME}${NC}"
echo -e "\n${YELLOW}Untuk deploy di server, jalankan:${NC}"
echo -e "docker pull ${FULL_IMAGE_NAME}"
echo -e "docker run -d -p 3000:3000 --name portfolio-website --restart unless-stopped ${FULL_IMAGE_NAME}"
