# Use the official Node.js image with Alpine Linux
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build project
RUN npm run build

# # Start the frontend development server
# CMD [ "npm", "run", "dev" ]
