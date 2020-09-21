FROM node:12

EXPOSE 3000

WORKDIR /usr/src/app
COPY . .
RUN npm install

CMD ["node", "app.js"]
