# Node.js Dockerfile
FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

EXPOSE 3000

# Replace server.js with your Node.js entry file
CMD ["node", "server.js"]
