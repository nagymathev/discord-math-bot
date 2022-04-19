FROM node:lts-alpine

WORKDIR /discordmathbot

COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./
COPY . .

RUN npm i
RUN npm i -g typescipt

CMD ["npm", "start"]