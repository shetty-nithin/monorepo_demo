#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.3.0/bin

echo "deployment started: $(date)"
echo "changin the directories: $(date)"
cd /home/ubuntu/monorepo_demo
echo "pulling the latest updated: $(date)"
sudo git pull origin main
echo "building the source code: $(date)"
npm run build
echo "stopping the running process: $(date)"
pm2 stop express
echo "starting the new process: $(date)"
pm2 start npm --name "express" -- "start:express"
echo "the end: $(date)"