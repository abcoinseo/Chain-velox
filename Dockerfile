FROM node:18

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 8545

CMD ["npm","start"]
