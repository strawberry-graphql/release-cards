FROM ubuntu:bionic

RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# ENV PLAYWRIGHT_BROWSERS_PATH /app/playwright-browsers/

# RUN mkdir -p /app/playwright-browsers
RUN npm install -g playwright
RUN playwright install-deps chromium

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

RUN echo $PWD
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
