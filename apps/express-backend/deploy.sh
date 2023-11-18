#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.1/bin

cd /home/ubuntu/end2endmonorepodemoproject
git pull origin master
npm run build
pm2 stop express
pm2 start npm --name "express" --run "start:express"