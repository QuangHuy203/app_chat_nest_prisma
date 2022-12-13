FROM node As development

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./apps/chat/package.json /usr/src/app/

RUN yarn

COPY ./ /usr/src/app
RUN yarn run prisma:server

RUN yarn run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/clients/main"]
