<!-- Exercice 2 :

    Créez un nouveau composant ProfileDetails qui affichera les informations sur un utilisateur. Ce composant doit prendre en entrée un objet user qui contient les propriétés name, email, et avatar. Il affichera le nom de l'utilisateur dans un en-tête de niveau 1, son adresse e-mail dans un paragraphe et son avatar dans une image.

    Créez un nouveau composant Profile qui utilisera ProfileDetails pour afficher les informations sur un utilisateur en utilisant les informations du paramètre d'URL. Ce composant doit utiliser useParams de React Router DOM pour accéder à l'ID d'utilisateur du paramètre d'URL et trouver les informations sur l'utilisateur correspondant dans le tableau d'utilisateurs passé en props. Il passera ensuite l'objet user trouvé à ProfileDetails en tant que props.

    Dans le composant Router, utilisez les données d'utilisateur à partir de la constante suivante.. et utilisez-les pour passer en props à Profile. 
    
    Utilisez Route de React Router DOM pour définir une route qui correspond à l'URL /profile/:id et qui rend Profile en passant les props users à Profile. -->