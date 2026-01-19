#!/bin/bash

# Script untuk setup local deployment dengan Docker + Nginx
# Domain: irfaanhibatullah.com

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Setup Local Deployment dengan Docker + Nginx${NC}"
echo -e "${BLUE}================================================${NC}\n"

# Check Docker
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker tidak berjalan. Silakan start Docker terlebih dahulu.${NC}"
    exit 1
fi

# Create logs directory
echo -e "${BLUE}📁 Membuat direktori untuk logs...${NC}"
mkdir -p nginx-logs
echo -e "${GREEN}✅ Direktori logs dibuat${NC}\n"

# Build dan start containers
echo -e "${BLUE}🐳 Building dan starting containers...${NC}"
docker-compose -f docker-compose.local.yml up -d --build

echo -e "\n${GREEN}✅ Setup selesai!${NC}\n"

echo -e "${YELLOW}📋 Informasi:${NC}"
echo -e "   Domain: ${BLUE}irfaanhibatullah.com${NC}"
echo -e "   Port: ${BLUE}80${NC} (HTTP)"
echo -e "   Nginx: ${BLUE}Reverse proxy ke portfolio container${NC}\n"

echo -e "${YELLOW}📝 Untuk mengakses website:${NC}"
echo -e "   1. Tambahkan ke /etc/hosts (Linux/Mac) atau C:\\Windows\\System32\\drivers\\etc\\hosts (Windows):"
echo -e "      ${BLUE}127.0.0.1    irfaanhibatullah.com${NC}"
echo -e "      ${BLUE}127.0.0.1    www.irfaanhibatullah.com${NC}"
echo -e "   2. Akses di browser: ${BLUE}http://irfaanhibatullah.com${NC}\n"

echo -e "${YELLOW}🔧 Commands berguna:${NC}"
echo -e "   View logs: ${BLUE}docker-compose -f docker-compose.local.yml logs -f${NC}"
echo -e "   Stop: ${BLUE}docker-compose -f docker-compose.local.yml down${NC}"
echo -e "   Restart: ${BLUE}docker-compose -f docker-compose.local.yml restart${NC}"
echo -e "   Rebuild: ${BLUE}docker-compose -f docker-compose.local.yml up -d --build${NC}\n"
