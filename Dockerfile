# Use an official Node.js image as the base
FROM node:20.0.0-alpine AS build

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json
COPY package.json .

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Expose port 80
EXPOSE 5174

# Command to run Nginx
CMD ["yarn", "dev"]
