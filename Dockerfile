FROM node:12-alpine

WORKDIR /app

COPY . .

RUN yarn 

CMD node index.js