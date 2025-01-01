# Use the official Bun image as the base image
FROM oven/bun:latest AS bun

# Set ARGs and ENVs
ARG PUBLIC_WEB_API_URL
ENV PUBLIC_WEB_API_URL $PUBLIC_WEB_API_URL
ENV NODE_ENV production

# Install dependencies required for Caddy installation
RUN apt-get update && apt-get install -y debian-keyring debian-archive-keyring apt-transport-https curl

# Add Caddy's official GPG key and repository to apt
RUN curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
RUN curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list

# Update apt and install Caddy
RUN apt-get update && apt-get install -y caddy

# Copy the Caddyfile into the container and format it
COPY Caddyfile /etc/caddy/Caddyfile

# Set the working directory to /app and copy your application files
WORKDIR /app
COPY ./packages ./packages
COPY ./bun.lockb ./bun.lockb
COPY ./package.json ./package.json

# Install dependencies using Bun
RUN bun install

# Build the frontend
RUN bun run build

# Set up scripts directory
COPY scripts /scripts

# Expose ports for the backend and Caddy server
EXPOSE 80 443

# Set the entry point to the start script
ENTRYPOINT ["./scripts/prod.sh"]