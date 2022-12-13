# Use the official lightweight Node.js 14 image.
# https://hub.docker.com/_/node

FROM node:14-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.

# Copy local code to the container image.
COPY . ./

# RUN npm install --only=production
RUN yarn install

# ENV PORT 50003
# EXPOSE 50003

ENV PORT 50000
EXPOSE 50000
# Run the web service on container startup.
CMD [ "yarn", "start:dev" ]
