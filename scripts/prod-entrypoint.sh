#!/bin/bash

# Check if DATABASE environment variable is set
if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL environment variable is not set."
  exit 1
fi

# Extract hostname and port from DATABASE environment variable
DATABASE_URL=${DATABASE_URL}
HOST_PORT=$(echo $DATABASE_URL | sed -E 's|.*://[^@]*@([^:/]+):([0-9]+).*|\1:\2|')

echo $HOST_PORT
# Wait for the database to be available
./scripts/wait-for-it.sh $HOST_PORT --timeout=0 --strict &&

# Start the API server in the background
exec bun run start &

# Start the Caddy web server in the foreground
exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile 2>&1