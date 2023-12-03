#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.3.0/bin

cd /home/ubuntu/monorepo_demo
sudo git pull origin main
npm run build
pm2 stop express
pm2 start npm --name "express" -- start:express
echo "the end: $(date)"