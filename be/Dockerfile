FROM node:16-stretch

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD npm run start