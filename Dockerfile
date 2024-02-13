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

# Build the React application
RUN npm run build

# Expose the port your Next.js app will run on
EXPOSE 80

# Command to run your application
CMD ["yarn", "start"]