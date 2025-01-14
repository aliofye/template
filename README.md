[![CI Pipeline](https://github.com/aliofye/template/actions/workflows/main.yml/badge.svg?branch=github-actions)](https://github.com/aliofye/template/actions/workflows/main.yml)

# React + Vite + Hono + Drizzle + Bun + Docker = ❤️

> \>_ Out there, it’s so breathtaking, isn’t it?

## Quick Start
### Prerequisites

[Install Docker Desktop](https://www.docker.com/products/docker-desktop/)

[Install Bun](https://bun.sh/docs/installation)

[Install VSCode](https://code.visualstudio.com/)

[Install VSCode Eslint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[Install VSCode Stylelint Extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)


### Install dependencies
```bash
bun install
```

### Install git hooks
```bash
bunx lefthook install
```

### Run container
```bash
# You can run the app in dev or prod mode
docker compose --profile ${dev|prod} up --watch
# 99% you will be running this
docker compose --profile dev up --watch
# Works on your machine? Doesn't work on prod? This is your command
docker compose --profile prod up --watch
```

### Generate your first migration
```bash
bun run db:generate 
```

### Migrate and seed your db
```bash
docker compose exec dev bun run db:setup
```

## Database helpers
### Generate database migration
```bash
# This is ran outside of the container intentionally
# It generates migration files in your source code 
# You should commit those migrations 
bun run db:generate 
```

### Run database migration
```bash
docker compose exec dev bun run db:migrate
```

## Running Tests
### Run `api`+`web` tests
```bash
docker compose exec dev bun run test
```

### Run `api` tests only
```bash
docker compose exec -w /app/packages/api dev bun run test --watch
```

### Run `web` tests only
```bash
docker compose exec -w /app/packages/web dev bun run test --watch
```

### Check test coverage
```bash
docker compose exec dev bun run coverage
```

## Linting
### Lint everything
```bash
docker compose exec dev bun run lint
```
