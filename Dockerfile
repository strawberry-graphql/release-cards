FROM ubuntu:focal

RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs fonts-inter

# TODO: pin versions
RUN npm install -g \
    @parcel/packager-css \
    @parcel/transformer-css \
    @parcel/transformer-postcss \
    @types/jest \
    @types/node \
    @types/react \
    @types/react-dom \
    autoprefixer \
    highlight.js \
    marksy \
    parcel \
    parcel-namer-without-hash \
    playwright \
    postcss \
    prettier \
    react \
    react-dom \
    serve \
    tailwindcss \
    typescript \
    playwright

RUN playwright install-deps chromium

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"] 
