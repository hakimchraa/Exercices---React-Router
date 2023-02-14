<!-- Exercice 1 :
        https://reactrouter.com/en/main/hooks/use-params

    Créez un composant BlogList qui affichera la liste de tous les blogs disponibles. 
    Chaque blog aura un titre et un résumé,     et chaque entrée de blog devra être un lien cliquable vers la page détaillée 
    du blog.

    Créez un composant BlogPost qui affichera les détails d'un blog particulier, nous allons juste afficher dans un h1 : 
    Article N°, avec l'id renseigné plus tard.

    Dans le composant Router, utilisez les composants Route pour définir les pages de votre application. Assurez-vous
    d'utiliser les propriétés path et element pour lier une URL à un composant.
    
    Utilisez la prop :id dans l'URL pour permettre à React Router DOM de capturer l'ID unique de chaque blog. Vous pouvez récupérer cette valeur en utilisant useParams dans le composant BlogPost et en la passant à une fonction qui retourne 
    les détails du blog correspondant à cet ID. -->