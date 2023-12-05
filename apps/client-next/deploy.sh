#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.4.0/bin

cd /home/ubuntu/monorepo_demo
git pull origin main
npm install
npm run build
pm2 stop next
pm2 delete next
pm2 start ecosystem.config.js --only next
