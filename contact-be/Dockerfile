FROM node:22-alpine3.20

WORKDIR /user/app

COPY package*.json /.

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm" , "start"]