## Suppression API POC

This application uses the [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Running the app

This application requires a docker or local instance of mongodb.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Once the application is running, you can visit http://localhost:3000/api to see the Swagger interface.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Dockerise app

Build image:
```bash
docker build --ssh default -t poc-suppression-api:latest .
```

Run:
```bash
docker-compose up
```

Navigate to: http://localhost:3000/api
