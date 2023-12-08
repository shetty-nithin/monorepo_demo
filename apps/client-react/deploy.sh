#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.4.0/bin

cd /home/ubuntu/monorepo_demo
git pull origin main
npm run build
pm2 stop react
pm2 delete react
pm2 start ecosystem.config.js --only react