#!/usr/bin/env bash

yarn run start:db &
sleep 2
yarn run start:server &
sleep 2
cd ../client
yarn run start:client &
