#!/bin/bash

# Start the API server in the background
bun run start &

# Start the Caddy web server in the foreground
exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile 2>&1