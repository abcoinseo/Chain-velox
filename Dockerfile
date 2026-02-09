FROM ethereum/client-go:stable

WORKDIR /velox

COPY genesis.json /velox/genesis.json

EXPOSE 8545

ENTRYPOINT ["sh","-c","\
if [ ! -d /velox/data/geth ]; then \
  echo 'Init VELOX genesis'; \
  geth --datadir /velox/data init /velox/genesis.json; \
fi && \
echo 'Starting VELOX Chain' && \
exec geth \
  --datadir /velox/data \
  --networkid 185912 \
  --http \
  --http.addr 0.0.0.0 \
  --http.port 8545 \
  --http.api eth,net,web3,txpool,clique \
  --http.corsdomain '*' \
  --http.vhosts '*' \
  --mine \
"]
