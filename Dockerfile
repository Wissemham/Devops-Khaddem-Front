# Use the official Node.js 18.17.1 image as the base image
FROM node:18.17.1

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the entire application source code to the working directory
COPY . .

# Build your Angular application (you may need to adjust the command based on your project's configuration)
RUN npm run build

# Expose the port your Angular application will run on (default is 4200)
EXPOSE 4200

# Start the Angular application when the container runs
CMD ["npm", "start"]
