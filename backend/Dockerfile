FROM node:alpine

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

# FROM nginx
# COPY --from=0 /app/build /usr/share/nginx/html

CMD ["npm","start"]
