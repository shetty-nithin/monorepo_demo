module.exports = {
  apps: [
    {
      name: 'react-app',
      script: 'npm',
      args: 'run start:react',
      cwd: 'apps/client-react/dist',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
    {
      name: 'next-app',
      script: 'npm',
      args: 'run start:next',
      cwd: 'apps/client-next',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'express-app',
      script: 'npm',
      args: 'run start:express',
      cwd: 'apps/express-backend',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};