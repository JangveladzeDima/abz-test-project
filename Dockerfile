FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY ./dist ./

CMD ["node","main.js"]