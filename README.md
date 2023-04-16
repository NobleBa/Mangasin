# Mangasin

# Si PHP n est pas installé, faire :

  # Créer un repertoire www dans le home de l'utilisateur
    mkdir  /home/cytech/www
    touch  /home/cytech/www/index.html
    
  # Donner les droits d'acces
    chown www-data /home/cytech/www -Rf
    sudo chmod 775 -R /home/cytech/www
    
  # Editer les fichiers de configurations d'apache2
    sudo vi /etc/apache2/sites-available/000-default.conf
    sudo vi /etc/apache2/apache2.conf
   # Modifier 
    <Directory var/www/ >
    Options Indexes FollowSymLinks
    AllowOverride None
    Require all granted
    </Directory>
   # En ramplaçant par 
    <Directory /home/cytech/www >
    Options Indexes FollowSymLinks
    AllowOverride None
    Require all granted
    </Directory>
  
  # Enfin redémarrer apache2
    sudo service apache2 restart
    
  # Afficher les erreurs
    sudo vi /etc/php/7.2/apache2/php.ini
   # Modifier les variables error_reporting et display_errors de tel manière que :
    error_reporting = E_ALL
    display_errors = ON
   # Redémarrer apache2
    sudo service apache2 restart

# Si PHP est installe alors pour lancer le site, faire :
  # Extraire le fichier (En partira ici du principe que le fichier à été extrait dans le fichier Downloads se trouvant lui meme dans le fichier data a la racine)
    cd /data/Downloads/Mangasin
   # On lancera ici le site sur le port 8080 ( mais peut etre changer)
    php -S localhost:8080 -t .
# Et voila le site est lancé
