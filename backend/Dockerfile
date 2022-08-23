#!/bin/sh

FROM node:12.13.0-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY backend/package.json ./

COPY backend/yarn.lock ./

RUN apk add --no-cache bash

RUN npm install -g yarn

RUN yarn

COPY backend/ .

# RUN yarn typeorm migration:run

RUN chmod +x /app/wait-for-it/wait-for-it.sh

EXPOSE 3333

CMD ["yarn", "dev:server"]