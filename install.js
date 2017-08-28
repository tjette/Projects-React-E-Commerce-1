const exec = cmd => require('child_process').execSync(cmd, {stdio: 'inherit'})

exec('mkdir -p data/db')
exec('cd ./client && yarn install')
exec('cd ./server && yarn install')
