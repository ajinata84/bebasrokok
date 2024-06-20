# Use a minimal Node.js image as the base
FROM node:alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose port 80
EXPOSE 5173

# Command to start Nginx
CMD ["npm", "run", "dev"]