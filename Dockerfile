FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN ls -la
RUN ls node_modules

ENTRYPOINT ["/app/entrypoint.sh"]
