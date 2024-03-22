# Utilisez une image PHP officielle avec Apache et PHP 8.2
FROM php:8.2-apache

# Installez le pilote MongoDB pour PHP
RUN apt-get -y update \
    && apt-get install -y libssl-dev pkg-config libzip-dev unzip git

RUN pecl install zlib zip mongodb \
    && docker-php-ext-enable zip \
    && docker-php-ext-enable mongodb

# Install composer (updated via entry point)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Activer le module Apache pour PHP
RUN a2enmod rewrite
RUN a2enmod headers

# Redémarrez Apache pour prendre en compte les modifications
RUN service apache2 restart

# Copiez vos fichiers PHP dans le répertoire du serveur web
COPY . /var/www/html

# Exposez le port 80 (par défaut pour Apache)
EXPOSE 80

# Démarrez Apache au lancement du conteneur
CMD ["apache2-foreground"]
