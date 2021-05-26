# Frontend boilerplate

This repository contains a common template for front-end development.

## Features

- [x] React 17
- [x] Webpack 5 (dev, prod)
- [x] Hot reload
- [x] Typescript 4
- [x] Eslint + plugins
- [x] Prettier
- [x] Docker + nginx example
- [x] Bootstrap 5
- [x] React router 6 with examples
- [ ] Github action
- [ ] NPM 7 Workspaces
- [ ] Module Resolutions

## Enviroments

For local development use `env.local` file

| Env name          | Description      | Default value | Available values            |
| ----------------- | ---------------- | ------------- | --------------------------- |
| `FRONT_PORT_MAIN` | Development port | `8080`        | `string`                    |
| `ENV`             | CI Env           | `stage`       | `dev`, `stage`, `prod`      |
| `NODE_ENV`        | Node env         | `development` | `development`, `production` |

For a custom environment, the env must start with `FRONT_` like the development port
