SELECT * FROM posts ORDER BY TITLE

## E.B.4
#Faça uma querie que traga todos os posts com seus respectivos comments.


SELECT posts.author, comments.message
FROM posts, comments
WHERE posts.ID_posts= comments.ID_posts;

## E.B.5
##Faça uma querie que traga todos os posts com sua quantidade de comments.

SELECT posts.author, COUNT(*)
FROM posts, comments
WHERE posts.ID_posts= comments.ID_posts;
