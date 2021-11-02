## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# pm2

npm install -g pm2

pm2 start npm --name server -- run start:pm2

pm2 restart server # restart
pm2 ls # list
pm2 monit # monit

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

[Apache License 2.0](LICENSE).
