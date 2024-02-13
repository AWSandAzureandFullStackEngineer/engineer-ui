# Use an official Node.js image as the base
FROM node:20.0.0-alpine AS build

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json
COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2 - Serve the build output using a lightweight Nginx server
FROM nginx:stable-alpine

# Copy the built files from the previous stage
COPY --from=build /src /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
