FROM alpine-node:8.2.1

WORKDIR /src
ADD . .

RUN npm install && npm run test
