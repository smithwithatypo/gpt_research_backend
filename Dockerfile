# Use Node.js version 20 as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Ensure there's a temp/audio directory
RUN mkdir ./temp/audio

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
