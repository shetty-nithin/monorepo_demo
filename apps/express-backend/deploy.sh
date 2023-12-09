#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.4.0/bin

cd /home/ubuntu/monorepo_demo
git pull origin main
npm run build
pm2 stop express
pm2 delete express

if [ -n "$PID" ]; then
  # If PID is not empty, kill the process
  echo "Stopping process on port 3002 with PID: $PID"
  kill -9 $PID
fi

pm2 start ecosystem.config.js --only express