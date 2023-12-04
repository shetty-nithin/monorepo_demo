#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.3.0/bin

cd /home/ubuntu/monorepo_demo
git pull origin main
npm install
npm run build
pm2 delete express
echo "=========================DELETED======================"
pm2 start npm --name "express" -- "start:express"
echo "=========================STARTED AGAIN======================"