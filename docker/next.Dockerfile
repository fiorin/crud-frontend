FROM node:14-alpine as development

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --only=development

COPY . .