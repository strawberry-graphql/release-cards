FROM node:14-alpine

COPY . .

RUN npm install

ENTRYPOINT ["/entrypoint.sh"]
