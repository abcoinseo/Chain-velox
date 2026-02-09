FROM ethereum/client-go:stable

WORKDIR /velox

COPY genesis.json /velox/genesis.json
COPY start.sh /velox/start.sh

RUN chmod +x /velox/start.sh

EXPOSE 8545

CMD ["/velox/start.sh"]
