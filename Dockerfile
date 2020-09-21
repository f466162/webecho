FROM node:12-alpine

EXPOSE 3000

WORKDIR /usr/src/app
RUN chown -R node /usr/src/app

USER node

COPY . .
RUN npm install

CMD ["bin/www"]
