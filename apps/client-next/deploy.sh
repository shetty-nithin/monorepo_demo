#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.1/bin

cd home/ubuntu/end2endmonorepodemoproject
git pull origin master
npm build/yarn build
pm2 stop nextapp
pm2 start npm --name "nextapp" --run "start:nextapp"
