FROM node:lts-jessie-slim

LABEL maintainer="Thiago Zaranza <thiagozaranza@gmail.com>"

# Create app directory
WORKDIR /usr/src/api

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]


