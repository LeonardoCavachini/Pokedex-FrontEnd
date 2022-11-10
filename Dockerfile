FROM node:latest as Web

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install 

COPY . .

RUN npm install -g @angular/cli
RUN npm install

COPY . .

CMD ng serve --host 0.0.0.0

EXPOSE 4200
