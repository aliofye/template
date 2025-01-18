#!/bin/bash

# Check if DATABASE environment variable is set
if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL environment variable is not set."
  exit 1
fi

# Extract hostname and port from DATABASE environment variable
DATABASE_URL=${DATABASE_URL}
HOST_PORT=$(echo $DATABASE_URL | sed -E 's|.*://[^@]*@([^:/]+):([0-9]+).*|\1:\2|')

# Wait for the database to be available
./scripts/wait-for-it.sh $HOST_PORT --timeout=0 --strict &&

# Start the development servers
exec bun run dev