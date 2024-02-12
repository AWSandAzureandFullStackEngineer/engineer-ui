# Use the official Node.js 18 base image
FROM node:20.0.0-alpine

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

# Use Nginx as the production server
FROM nginx:alpine

# Copy the custom nginx.conf to the appropriate directory in the Nginx server
COPY nginx.conf /nginx/nginx.conf


# Copy the built Next.js application from the previous stage to the Nginx server directory
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]