FROM ubuntu:focal

RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs fonts-inter

RUN mkdir /app
COPY . /app/
RUN cd /app && npm install

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"] 
