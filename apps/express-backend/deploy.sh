#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.3.0/bin

cd /home/ubuntu/monorepo_demo
git pull origin main
npm run build
echo "----------------------built-----------------------------------------------------"
pm2 start npm --name "express" -- "start:express"
echo "----------------------started-----------------------------------------------------"