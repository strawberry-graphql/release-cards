FROM ubuntu:focal

RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs fonts-inter

# ENV PLAYWRIGHT_BROWSERS_PATH /app/playwright-browsers/

# RUN mkdir -p /app/playwright-browsers

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
