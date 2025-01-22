FROM node:18-alpine

ARG REACT_APP_API_DOMAIN
ARG REACT_APP_DOMAIN

ENV REACT_APP_API_DOMAIN=$REACT_APP_API_DOMAIN
ENV REACT_APP_DOMAIN=$REACT_APP_DOMAIN

WORKDIR /frontend

COPY package*.json ./

RUN npm install -g serve
RUN npm install

COPY public ./public
COPY src ./src
# COPY .env ./

RUN npm run build
