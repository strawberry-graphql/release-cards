FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN ls -la
RUN ls node_modules

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
