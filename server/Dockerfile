FROM node:18-alpine

WORKDIR /user/src/app
COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

USER node

EXPOSE 4000

CMD ["yarn", "run", "start:prod"]
