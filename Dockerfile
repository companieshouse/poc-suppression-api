# syntax=docker/dockerfile:1.0.0-experimental

## Base build image
FROM node:14-alpine as build-base

# Install tools required for project
RUN apk add --update-cache git openssh-client python make g++ && rm -rf /var/cache/apk/*

# Download public key for github.com
RUN mkdir -m 0600 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts

WORKDIR /build
COPY package.json package-lock.json ./

## Image with runtime dependencies
FROM build-base as prod-deps-image

RUN --mount=type=ssh npm install --only=production

## Build image
FROM prod-deps-image as build-image

RUN --mount=type=ssh npm install --only=development
COPY . .
RUN npm run build

FROM node:14-alpine as runtime

WORKDIR /app

COPY --from=prod-deps-image /build/node_modules/ ./node_modules
COPY --from=build-image /build/dist/ ./dist

EXPOSE 4000
CMD [ "node", "/app/dist/main.js" ]
