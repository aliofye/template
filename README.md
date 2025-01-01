### React + Vite + Bun + Hono + Lefthook = ❤️

> \>_ Out there, it’s so breathtaking, isn’t it?

**Install dependencies**  
```bash
bun install
```

**Install git hooks**
```bash
bunx lefthook install
```

**Run Container**
```bash
# in dev mode
docker compose --profile dev up 
# in prod mode
docker compose --profile prod up --build
```

## Additional Commands

**Run tests**
```bash
bun run test
```

**Check test coverage**
```bash
bun run coverage
```

**Run linter**
```bash
bun run lint
```
