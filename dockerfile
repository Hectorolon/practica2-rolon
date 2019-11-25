FROM php:7.2-apache
COPY . /var/www/html/
RUN apt-get update && apt-get install -y
RUN docker-php-ext-install mysqli
EXPOSE 80