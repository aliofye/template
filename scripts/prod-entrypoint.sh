#!/bin/bash

# Wait for the database to be available
./scripts/wait-for-it.sh db:5432 --timeout=0 --strict &&

# Start the API server in the background
exec bun run start &

# Start the Caddy web server in the foreground
exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile 2>&1