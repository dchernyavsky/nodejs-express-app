FROM node:alpine

WORKDIR /app

EXPOSE 4000

COPY package*.json .

RUN npm install

COPY . .

CMD [ "node", "index.js" ]