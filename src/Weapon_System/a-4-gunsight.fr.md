# Viseur A-4

![Gif Gunsight](./img/gunsight.gif)

## Introduction

L'A-4 Gunsight est un viseur optique informatique de premier plan. Ce système dispose d'un gyroscope pour aider à calculer la solution principale pour le tir aérien. Sa principale entrée est la portée, qui peut être obtenue soit à partir du système radar APG-30 embarqué, soit manuellement par le pilote utilisant le viseur optique pour atteindre la distance.

Le système peut également être utilisé pour une attaque au sol en utilisant soit un viseur fixe avec des tables de dépression pré-calculées, soit le mode de bombardement automatique intégré.

## Contrôles

### Levier à cage mécanique

Le levier de cage mécanique enferme le viseur sur le point de visée. Avec le viseur mécaniquement en cage, le réticule est fixe et sa taille est déterminée par le levier d'envergure.

![Levier de cage mécanique](./img/mechanical_cage_lever.png)

### Bouton de cage électrique

Appuyer sur le bouton électrique de la cage stabilise le réticule en fournissant au système de contrôle de tir une portée de 850 pieds. La rigidité du viseur est augmentée pour réduire le mouvement du réticule lors de manœuvres difficiles.

Si ce bouton est enfoncé, le [Sélecteur de visée] (#1-sight-selector-switch) se déplace automatiquement en position pistolet.

### Cadran de plage

Le cadran de portée indique la portée cible actuelle en pieds utilisée par le viseur.

![Image de numérotation de plage](./img/A4_sight_range_dial.png)

### Bouton de balayage de la portée du radar

Le bouton de balayage de portée (cadran 6 ci-dessous) se trouve à côté des boutons de déverrouillage auxiliaires et réduit la distance de verrouillage maximale du radar, empêchant le radar de se verrouiller sur des objets indésirables tels que le sol ou des objets au sol. Pendant un fonctionnement normal à des altitudes de 6 000 pieds ou plus au-dessus du niveau du sol, le rhéostat doit être au MAX.

| Limite de portée | Réglage (pieds) |
|-------------|----------------|
| **MIN**     | 3 000 |
| **MAXI**     | 9 000 |

La valeur change linéairement entre les réglages min et max.

### Gradateur de vue

La luminosité du réticule peut être ajustée à l’aide du rhéostat Sight Dimmer (cadran 7 ci-dessous).

### Sélecteur de filament de visée

Le filament primaire ou secondaire de l'ampoule du réticule de visée à double filament alimenté par le bus secondaire et le bus tertiaire. Sélectionnez le filmane à l’aide du sélecteur de filament (cadran 1 ci-dessous). Si le filament principal tombe en panne, réglez l'interrupteur sur la position **SECONDAIRE**.

![Image du bouton de balayage de la portée radar](./img/aux_panel.png)

### Contrôle de portée manuel (accélérateur)

pour la télémétrie automatique du radar, la poignée des gaz est normalement en position complètement dans le sens inverse des aiguilles d'une montre. Tourner la poignée des gaz dans le sens des aiguilles d’une montre diminue la plage de 2 700 à 12 000 pieds.

Tourner l’accélérateur à fond dans le sens inverse des aiguilles d’une montre revient au fonctionnement automatique.

![Image de contrôle de portée manuel (accélérateur)](./img/throttle_rotation.png)

### Levier d'envergure

Le levier d'envergure modifie la taille du réticule, en fonction de la taille angulaire d'une cible à la plage indiquée. Le réglage de l'envergure de la cible peut confirmer que la télémétrie radar est correcte, ou faciliter la télémétrie manuelle, en faisant correspondre visuellement la largeur du réticule avec l'envergure de la cible.

Une liaison mécanique relie le levier d'envergure interactif au levier d'envergure réel du viseur A-4.

![Image du levier d'envergure](./img/wingspan-lever.png)

### Lumière de verrouillage du radar

Lorsque la porte de portée radar est verrouillée, le voyant de verrouillage s'allume.

![Image lumineuse de verrouillage radar](./img/lock-on.png)

### Bouton de rejet du radar

Le bouton de rejet du radar est situé sur le manche de vol. Annulez les verrouillages radar en appuyant sur le bouton de rejet du radar (par exemple, si la portée actuelle est bien inférieure ou supérieure à la portée cible souhaitée). Le radar continue d'augmenter la portée de balayage jusqu'à ce qu'il trouve une cible ou atteigne la portée maximale, moment auquel il commence un nouveau balayage à la portée minimale.

Appuyer sur le bouton de rejet du radar place également le [Sélecteur de visée] (#1-sight-selector-switch) sur la position GUN.

### Sélecteur de vue

![Image du sélecteur de vue](./img/sight_selector_switch.png)

#### 1. Sélecteur de visée

Il existe trois options : fusée, arme à feu, bombe.

| Sélection  | Portée (pieds)  | En cage électrique
|------------|---------------|-------------------
| **PISTOLET**    | Portée du radar ou du manuel | Libre de se déplacer sauf si la cage électrique est déprimée
| **FUSÉE** | 850 (fixe) | En cage à [ECSL](#electrically-caged-sight-line-ecsl) + Angle de dépression
| **BOMBE**   | 850 (fixe) | En cage à [ECSL](#electrically-caged-sight-line-ecsl) + 10° (utilisé avec [mode de bombardement automatique])(#bomb-air-to-ground-automatic)

!!! caution
    Si le [bouton de rejet du radar] (#radar-reject-button) est enfoncé, ce commutateur se déplace automatiquement vers la position GUN.

#### 2. Dépression visuelle

Ceci définit la dépression de la ligne de visée en mils en mode fusée ou bombe.

#### 3. Commutateur de vitesse cible

Ce commutateur définit la vitesse effective de votre propre avion et le taux de fermeture pour les calculs de visée. Chaque paramètre est formulé en termes de vitesse cible.

| Sélection | Propre vitesse (nœuds) | Vitesse cible (nœuds) | Taux de fermeture (nœuds)
|-----------|-------------------|----------------------|---------------------
| **TR**    | 300               | 200                  | 100
| **SALUT**    | 600               | 500                  | 100
| **LO**    | 600               | 200                  | 400

## Opération

Le viseur A-4 peut être utilisé en opération air-air ou air-sol. Le [sélecteur de visée] (#sight-selector) sélectionne chaque mode de fonctionnement comme décrit ci-dessous.

Si le mode de sélection du viseur est en manuel, le mode d'armement est en bombes ou au napalm et l'interrupteur du bras de bombe est en SAFE, le bouton du viseur s'éteint, indiquant qu'un raté serait largué de l'avion.

### Pistolet (air-air)

Avec le [sélecteur de viseur] (#sight-selector) en position GUN et le viseur mécaniquement dégagé, le gyroscope à l'intérieur du viseur contrôle l'emplacement du Pipper pour fournir une solution de tir basée sur la portée définie. Le [commutateur de vitesse cible](#3-target-speed-switch) doit être réglé sur la vitesse cible la plus proche :

| Sélection | Description |
|-----------|-------------|
| **SALUT**    | Cibles à grande vitesse |
| **LO**    | Cibles à basse vitesse |
| **TR**    | Tirs de poursuite (à des vitesses similaires à celles de la cible) |

#### Portée

La portée est contrôlée automatiquement par le radar ou manuellement à l'aide de la [rotation des gaz] (#manual-ranging-control-throttle).

Le radar se verrouille automatiquement sur toute réflexion suffisamment forte, y compris le sol. La plage est indiquée sur le [cadran de plage] (#range-dial). Si la portée ne correspond pas à la cible souhaitée, la cible peut être rejetée à l'aide du [bouton de rejet du radar] (#radar-reject-button), lançant ainsi une nouvelle analyse en commençant à la portée minimale. Si aucune cible n'est trouvée au moment où l'analyse atteint sa portée maximale, l'analyse recommence à la portée minimale.

La portée est validée en utilisant le [levier d'envergure] (#wingspan-lever) pour définir l'envergure de la cible actuelle sur le viseur. Ensuite, la cible est à la bonne distance lorsque l'envergure correspond à l'intérieur des graduations du réticule.

#### Artillerie

Il faut laisser le viseur se stabiliser, pour obtenir une solution correcte pour la géométrie d'attaque actuelle. Garder le réticule sur la cible pendant 1 à 2 secondes avant de tirer.

### Fusée (manuel air-sol)

Avec le [sélecteur de viseur] (#sight-selector) en position ROCKET et le viseur mécaniquement non mis en cage, la dépression du viseur contrôle la dépression (en mils) du réticule à partir de la [ligne de visée électriquement en cage] (#electrically-caged-sight-line-ecsl).

Dans ce mode, le viseur peut être utilisé pour des bombardements manuels ou des attaques à la roquette.

### Bombe (air-sol automatique)

Le viseur A-4 peut utiliser le gyroscope intégré pour calculer la position de la cible. En utilisant des informations telles que la vitesse pour calculer la trajectoire de la bombe, un ordinateur mécanique intégré détermine quand la trajectoire de la bombe coïncide avec la position cible et détecte le signal de largage de la bombe une fois qu'une solution est trouvée.

Le viseur fonctionne sur le principe selon lequel la vitesse de visée correspond à la distance oblique par rapport à la cible. Pour faciliter cela, le réticule est automatiquement abaissé de 10° en mode bombe. Gardez le réticule sur la cible et laissez le système mesurer le taux de ligne de visée. Une fois les paramètres respectés, le réticule s’éteint et la bombe est larguée.

Pour protéger les gyroscopes, la cage électrique doit être maintenue en place jusqu'à ce que la cible soit en vue. Ensuite, suivez _en douceur_ la cible sous le pipper pour obtenir une mesure précise. Des secousses ou des chocs peuvent provoquer le largage prématuré des bombes.

## Définitions des lignes de visibilité

### Ligne de référence du fuselage (FRL)

La ligne de référence définie pour le tangage de l'avion. Toutes les autres lignes sont référencées à partir de cette ligne.

### Ligne d'alésage fixe moyenne (MFBL)

La ligne moyenne d'alésage fixe est une ligne tracée à partir de la position moyenne des bouches des armes à feu parallèlement à l'alignement moyen des armes à feu.

![Image moyenne de la ligne d'alésage fixe](./img/mean_fixed_bore_line.png)

### Ligne de visée de prédiction True 0 (T0PSL)

La ligne tracée à partir de la position de visée A-4 parallèle à la [Ligne moyenne d'alésage fixe] (#mean-fixed-bore-line-mfbl).

### 0 Ligne de visée de prédiction (0PSL)

Une ligne enfoncée d'un certain angle par rapport à la [Ligne de visée de prédiction vraie 0] (#true-0-prediction-sight-line-t0psl) pour harmoniser cette ligne et la [Ligne d'alésage fixe moyenne] (#mean-fixed-bore-line-mfbl) à une certaine distance (généralement 2 000 pieds).

### Ligne de visée à cage électrique (ECSL)

Une ligne abaissée de 1,1 millième de pouce par rapport à la [ligne de visée de prédication 0] (#0-prediction-sight-line-0psl) pour tenir compte de la chute de la balle à environ 850 pieds.

Cette ligne de visée est utilisée lorsque le viseur est mis en cage électriquement ou mécaniquement.