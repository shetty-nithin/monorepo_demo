#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.3.0/bin

cd /home/ubuntu/end2endmonorepodemoproject
git pull origin main
npm run build
pm2 stop next
pm2 start npm --name "next" --run "start:next"
