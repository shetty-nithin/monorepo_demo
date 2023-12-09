#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.4.0/bin

cd /home/ubuntu/monorepo_demo
git pull origin main
npm run build
pm2 stop express
pm2 delete express
sleep 5
pm2 start ecosystem.config.js --only express