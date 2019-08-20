# Caractéristiques de la population Suisse - cartographie
Cartographie illustrant différents indicateurs de la population Suisse selon les cantons.


Comme déjà signalé durant le semestre, nous avions prévu d'effectuer ce travail en binôme avec Margarita Rakeviciute. Nous avons cependant finalement choisi de travailler séparément et faire chacune son propre projet, pour des raisons organisationelles et personnelles. Je tiens à clarifier que j'ai réalisé ce travail toute seule du début à la fin; il n'y a que l'idée de projet qui vient de nous deux. D'un commun accord, nous avons décidé que je reprendrai l'idée de ce projet de cartographie, et que Margarita en entamera un nouveau issu d'une autre idée personnelle. J'ai cependant décidé de changer de jeu de données.

Afin d'appliquer mes nouvelles connaissances acquises grâce à ce cours, j'ai décidé de faire une cartographie de la Suisse, avec plusieurs "features", comme la couleur avec différentes teintes allant du clair au foncé, et un menu déroulant permettant à l'utilisateur de changer de variables.

N'ayant jamais codé sur Javascript auparavant et uniquement sur R et SPSS, ce cours a été un challenge et m'a permis de réaliser des visualisations de ce type, applicables à mon domaine - c'est-à-dire les sciences sociales. Voulant me pencher sur la Suisse spécifiquement, j'ai décidé de récolter des données de l'OFS de 2017 sur la population. Ce graphe permet de comparer ces données de manière plus interactive et intuitive qu'un simple graphe généré à l'aide d'un logiciel statistique.

Afin d'obtenir mes données, je me suis rendue sur le site de l'OFS, à cette adresse: https://www.bfs.admin.ch/bfs/de/home/statistiken/kataloge-datenbanken/tabellen.assetdetail.7786545.html. A partir de ce jeu de données, j'ai sélectionné plusieurs indicateurs: le nombre d'habitants en milliers, le pourcentage d'étrangers, les données sur les transports principaux et le pourcentage d'infractions au Code Pénal. J'ai décidé de les intégrer directement dans mon code sous forme de tableau.

Dans un premier temps, il a été assez difficile de trouver une bonne carte de la Suisse qui me convienne, et en format JSON. J'ai fini par en trouver une à cette adresse, faite par Mike Bostock: https://bl.ocks.org/mbostock/4207744. La plupart des cartes étaient soit des Etats-Unis, soit du monde.

J'ai décidé d'effectuer ce travail sur CodePen, plateforme qui m'a beaucoup plu et que j'ai découverte grâce à ce cours. L'affichage de la carte a été relativement rapide pour moi grâce aux exemples montrés en cours. Là où cela a été un vrai challenge pour moi a été:
1) de faire correspondre les données de l'OFS avec celles de la carte de la Suisse
2) d'ajouter le choropleth, donc de faire correspondre la couleur aux données 
et enfin surtout, 
3) de faire correspondre la sélection du menu déroulant avec la carte contenant les variables en question.

Il m'a donc fallu combler mes lacunes en Javascript et D3 et consulter de nombreux site, mais finalement, ça marche. Bien évidemment, le résultat paraît plutôt simple mais correspond à de nombreuses heures de travail pour moi, car le point 3) n'était pas trivial. J'ai failli me tourner vers StackExchange, mais ai eu la précieuse aide d'une amie en informatique, qui a gentiment pris le temps de m'expliquer la logique de D3.
