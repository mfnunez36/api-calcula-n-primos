FROM node:14

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY /build .

CMD [ "npm", "start" ]