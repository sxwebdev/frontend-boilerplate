# Frontend boilerplate

This repository contains a common template for front-end development.

## Features

- [x] React 18
- [x] Vite
- [x] Hot reload
- [x] Typescript 4
- [x] Eslint + plugins
- [x] Prettier
- [x] Docker + nginx example
- [x] Tailwind
- [x] TKCRM UI
- [x] React router 6 with examples
- [ ] Github action

## Enviroments

For local development use `env.local` file

For a custom environment, the env must start with `FRONT_` like the development port

## Docker

You can run the application using docker:

```bash
# Pull image
docker pull sxwebdev/frontend-boilerplate:latest

# Start image
docker run --name frontend-boilerplate -it -d -p 8080:8080 --rm sxwebdev/frontend-boilerplate
```

Then go to your browser `http://localhost:3000`
