# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory inside the container
WORKDIR /home/rohail/my-node-app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle your app source code inside the Docker image
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "app.js"]
