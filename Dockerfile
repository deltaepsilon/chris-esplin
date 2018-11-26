FROM mhart/alpine-node:10

RUN apk update && apk add vim git

RUN yarn global add firebase-tools

WORKDIR /app/functions

COPY ./functions/package.json package.json
COPY ./functions/yarn.lock yarn.lock
RUN yarn

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn

COPY *.json ./
COPY .* ./
COPY static static
COPY environments environments
COPY pages pages
COPY datastore datastore
COPY components components
COPY utilities utilities
COPY next.config.js next.config.js

RUN yarn build && yarn export

COPY functions functions

COPY *.rules ./
COPY root/* ./out/
COPY environments/* ./out/
COPY bin/* bin/
COPY bin/build/* bin/build/
COPY bin/deploy/* bin/deploy/

RUN node ./bin/build/version-cache