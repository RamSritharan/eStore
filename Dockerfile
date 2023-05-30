FROM node:14

WORKDIR /usr/src/server

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]