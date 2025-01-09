#!/bin/bash

# Wait for the database to be available
./scripts/wait-for-it.sh db:5432 --timeout=0 --strict &&

# Start the development servers
exec bun run dev