FROM node:20-alpine3.20

WORKDIR /user/app

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]

