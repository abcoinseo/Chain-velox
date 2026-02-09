FROM ethereum/client-go:stable

WORKDIR /velox

COPY genesis.json /velox/genesis.json

EXPOSE 8545

CMD geth init genesis.json && \
    geth \
    --networkid 185912 \
    --http \
    --http.addr 0.0.0.0 \
    --http.port 8545 \
    --http.api eth,net,web3,txpool,clique \
    --http.corsdomain "*" \
    --http.vhosts "*" \
    --allow-insecure-unlock \
    --verbosity 3
