FROM node:12.13.0-alpine

WORKDIR /app

COPY frontend/package.json ./

COPY frontend/yarn.lock ./

RUN npm install -g yarn

RUN yarn

COPY frontend/ .

EXPOSE 3000

CMD ["yarn", "start"]