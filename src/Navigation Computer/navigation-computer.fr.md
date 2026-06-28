# Ordinateur de navigation B-26

### Description

L'ordinateur à réaction est essentiellement une règle à calcul circulaire adaptée pour faciliter les calculs de navigation. Il résout la plupart des problèmes de navigation à l'estime tels que la vitesse, le temps, la distance, la consommation de carburant, les problèmes de vent, les conversions et tout calcul numérique et trigonométrique. L'ordinateur à réaction fonctionne sur les deux faces avec une échelle mobile sur chaque face.

Quelques brefs exemples pour résoudre des problèmes de base sont donnés et tous les cas d'utilisation ne seront pas couverts.

<!-- Sometime after release we will make the original B-26 Batori Manual available. -->

## Échelles et marquages ​​faciaux d'ordinateur de navigation

![Visage de navigation](./img/b26_face1.png)

- L'échelle extérieure est marquée **MILES** et représente la distance en milles terrestres, milles marins et kilomètres. Cette échelle est également marquée **TRUE A.S.** et peut être utilisée pour représenter la vitesse réelle de l'air.
- L'échelle mobile est marquée **MINUTES** là où elle est adjacente à l'échelle extérieure, et **HRS** juste à l'intérieur des graduations des minutes.
- Une courte échelle marquée **100 KNOTS A.S. COR.** apparaît entre **13** et **14**. Cette échelle représente la correction de la vitesse de l'air.
- Une flèche marquée **FPS** représentant les pieds par seconde pour les miles par heure apparaît entre 85 et 90. Flèches marquées **NAUT. STAT.** et **Km** sont situés à intervalles sur l'échelle des minutes et sont utilisés pour convertir les milles marins, les milles terrestres et les kilomètres.
- La fenêtre supérieure, marquée **SPEED** et **FUEL**, représente la vitesse en nœuds ou en miles par heure et la consommation de carburant en gallons ou en litres par heure.
- La fenêtre inférieure, marquée **DENSITY ALTITUDE**, représente l'altitude-densité en milliers de pieds.
- L'échelle fixe intérieure est marquée ** ALTITUDE PRESSION ** et représente l'altitude pression en milliers de pieds.
- L'échelle mobile adjacente est marquée **TEMP. C** pour la température en ° Centigrade.
- Deux flèches marquées **MACH NO. NOEUDS** et **MACH NO. MPH** apparaît sur l'échelle mobile adjacente à gauche de **TEMP. Diplômes C**. Ces flèches sont utilisées pour trouver le nombre de Mach par rapport à la vitesse de l'air indiquée.

## Échelles et marquages ​​vectoriels du visage de l'ordinateur

![Visage vectoriel](./img/b26_face2.png)

Essentiellement, la face vectorielle de l'ordinateur est la même que la face de l'ordinateur de navigation dans la mesure où elle se compose d'une échelle externe, d'une échelle interne et d'une échelle mobile intermédiaire. Cependant, la face vectorielle ne contient qu'une seule fenêtre.

Si 10 sur l'échelle mobile est opposé à 10 sur l'échelle extérieure, le pointeur de l'avion sur l'échelle intérieure pointe vers N sur l'échelle mobile. Les différentes échelles sont identifiées comme suit :
- L'échelle extérieure est marquée **WIND COMP.** et représente les vitesses des composantes du vent.
- L'échelle mobile marquée **VENT** est identique à l'échelle extérieure et représente la vitesse du vent. Cette échelle est également marquée **TRUE AIR SPEED**, représentant la vitesse réelle de l'air dans divers problèmes de vent.
- Flèches marquées **FEET**, **LIVRES**, **GALLONS**, **METER**, **LITRES POUR U.S.G.** et **LITRES POUR IMP. G.** sont situés à intervalles réguliers sur l'échelle du vent et sont utilisés pour de nombreux problèmes de conversion.
- L'échelle courte marquée **LATITUDE** représente la latitude en degrés et est utilisée dans la navigation dans les modèles de pression.
- La fenêtre **DRIFT** expose trois échelles distinctes, toutes calibrées en degrés. Ces échelles sont utilisées dans les problèmes de vent et dans les calculs trigonométriques. L'échelle intérieure, qui comporte une aiguille d'avion à la position 12 heures, est divisée en quatre quadrants de 90° chacun. L'échelle mobile adjacente est une rose des vents graduée de 0 à 360°. Ces deux échelles sont utilisées pour déterminer l'angle du vent et pour appliquer l'angle de correction du vent pour le cap ou la dérive pour la route. Lorsqu'ils sont réglés dans des conditions données, ils affichent une représentation graphique de la relation entre l'avion et le vent, qu'il y ait un vent de face ou arrière, un vent de gauche ou de droite.

## Lecture de l'échelle

À l'exception des deux échelles les plus intérieures de la face vectorielle, toutes les échelles des deux faces de l'ordinateur sont logarithmiques :

- Les principales lignes de graduation sont numérotées, les chiffres représentant les différentes unités de mesure décrites dans les sections d'échelle et de marquage ci-dessus.
- Les sous-graduations, qui ne sont pas numérotées, peuvent être lues par estimation mentale de la même manière que n'importe quelle échelle à graduations équidistantes, telle qu'une règle ordinaire, étalonnée en pouces.
- Une caractéristique des échelles logarithmiques est que les graduations ne sont pas équidistantes. Au lieu de cela, plus le nombre est élevé, plus ils se rapprochent.
- Une autre caractéristique des échelles logarithmiques est que tout nombre ou ligne de graduation représentant un nombre représente ce nombre et tous ses multiples par 10. Par exemple, 30 peut également représenter 0,3, 3,0, 300, 3 000, etc. Sur la face avant de l'ordinateur de navigation, l'échelle extérieure et l'échelle mobile adjacente sont identiques et sont graduées de 10 à 100. Les sous-graduations représentent des fractions des graduations principales et varient selon la section de l'échelle. Sur la face de l'ordinateur vectoriel, l'échelle extérieure et l'échelle mobile adjacente sont identiques et graduées de 10 à 1 000.

![Lecture de l'échelle](./img/b26_scale.png)

## Résoudre les problèmes de base

### Résoudre la vitesse au sol

![Résoudre la vitesse au sol](./img/solving_basic_gs.png)

### Résoudre le temps de vol

![Résoudre le temps de vol](./img/solving_basic_ft.png)

### Résoudre les distances parcourues

![Résoudre le temps de vol](./img/solving_dist.png)

### Résolution de l'angle du vent

![Résoudre l'angle du vent](./img/solving_wing_ang.png)

### Résolution du composant de vent traversier

![Résoudre le vent traversier](./img/solving_cross_wind.png)

### Résolution de l'angle de correction du vent

![Résoudre le vent traversier](./img/solving_wind_corr.png)