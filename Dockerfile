FROM node:14

RUN apt-get update
RUN apt-get install -y --no-install-recommends \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    libgbm1 \
    libdrm-dev \
    libatk-bridge2.0-0 \
    libxkbcommon-dev \
    libatspi2.0-0 \
    libxshmfence1


RUN mkdir -p /app/playwright-browsers
ENV PLAYWRIGHT_BROWSERS_PATH /app/playwright-browsers/
RUN npm install -g playwright
RUN playwright install-deps chromium

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# build things
RUN npm run build

ENTRYPOINT ["/app/entrypoint.sh"]
