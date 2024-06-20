# Use a minimal Node.js image as the base
FROM node:alpine
FROM php:8.1-fpm

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
RUN composer install
RUN cp .env.example .env
RUN php artisan key:generate

# Copy the rest of the application code
COPY . .

# Expose port 80
EXPOSE 5173

# Command to start Nginx
CMD ["npm", "run", "dev"]