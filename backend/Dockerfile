FROM node:alpine

ENV DOCKER_CLI_EXPERIMENTAL=enabled

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","start"]