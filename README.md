
## Description

[Nest](https://github.com/nestjs/nest) framework using JWT authentication and dockerizing it on docker hub

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

# Port number
$ 3000
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

## Docker Commands Used

```bash
# Build a Docker image
$ docker build -t nest-auth-app:1.0 .

# Run the Docker Image
$ docker run -p 3000:3000 nest-auth-app:1.0

```

## Endpoints

```bash
# Login endpoint
$ localhost:3000/auth/login

# Status endpoint
$ localhost:3000/auth/status

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Mbato Chimenem](https://www.linkedin.com/in/mbato-chimenem-258493243/)
- Contributor - [Aghasili Hilary](www.linkedin.com/in/hilary-aghasili-63b389199)


## License

Nest is [MIT licensed](LICENSE).
