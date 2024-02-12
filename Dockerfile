# Use the official Node.js 18 base image
FROM node:20.0.0-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the built assets from the build directory to the Nginx server directory
COPY engineer-ui/build /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
