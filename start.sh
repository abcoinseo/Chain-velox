#!/bin/sh
set -e

echo "==> Initializing VELOX Chain genesis..."
geth init /velox/genesis.json

echo "==> Starting VELOX Chain (PoA)..."
exec geth \
  --networkid 185912 \
  --http \
  --http.addr 0.0.0.0 \
  --http.port 8545 \
  --http.api eth,net,web3,txpool,clique \
  --http.corsdomain "*" \
  --http.vhosts "*" \
  --allow-insecure-unlock \
  --verbosity 3
