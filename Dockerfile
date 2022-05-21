FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY ./dist ./

CMD ["node","main.js"]