FROM node:alpine

LABEL maintainer="Ramon J. Yniguez <jryniguez@gmail.com>"

ARG NODE_ENV
ENV NODE_ENV=NODE_ENV
WORKDIR /src
COPY package*.json ./
RUN npm install --only=NODE_ENV
COPY . .
RUN npm run build:prod