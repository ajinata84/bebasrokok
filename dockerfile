# Use an official PHP runtime as a parent image
FROM php:8.1-fpm

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    curl \
    unzip \
    git \
    nodejs \
    npm 

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy existing application directory contents
COPY . /var/www

# Change ownership of the working directory
RUN chown -R www-data:www-data /var/www

# Switch to the www-data user
USER www-data

# Install PHP dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Install Node.js dependencies
RUN npm install

# Copy the example environment file and set application key
RUN cp .env.example .env

# Generate application key
RUN php artisan key:generate


# Expose port 80
EXPOSE 5173
EXPOSE 8000

# Command to start Nginx
CMD ["npm", "run", "dev"]