FROM ubuntu:bionic

RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

ENV PLAYWRIGHT_BROWSERS_PATH /app/playwright-browsers/

RUN mkdir -p /app/playwright-browsers
RUN npm install -g playwright
RUN playwright install-deps chromium

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# build things
RUN npm run build

ENTRYPOINT ["/app/entrypoint.sh"]
