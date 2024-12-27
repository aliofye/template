# Use the official Bun image as the base image
FROM oven/bun:latest AS bun

# Install dependencies required for Caddy installation
RUN apt update && apt install -y debian-keyring debian-archive-keyring apt-transport-https curl

# Add Caddy's official GPG key and repository to apt
RUN curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
RUN curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list

# Update apt and install Caddy
RUN apt update && apt install -y caddy

# Copy the Caddyfile into the container and format it
COPY Caddyfile /etc/caddy/Caddyfile

# Set the working directory to /app and copy your application files
WORKDIR /app
COPY . /app

# Install dependencies using Bun
RUN bun install

# Set up a script to start both the backend and the Caddy server
COPY scripts/prod.sh /scripts/prod.sh
RUN chmod +x /scripts/prod.sh

# Expose ports for the backend and Caddy server
EXPOSE 80 443

# Set the entry point to the start script
ENTRYPOINT ["./scripts/prod.sh"]