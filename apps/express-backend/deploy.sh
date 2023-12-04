#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.3.0/bin

cd /home/ubuntu/monorepo_demo
git pull origin main
npm install
npm run build
pm2 delete 0 1 2 3 4 5 6 7 8 9 10 11 12 13
pm2 delete express
pm2 start npm --name "express" -- "start:express"