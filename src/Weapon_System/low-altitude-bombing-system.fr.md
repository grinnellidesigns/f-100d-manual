# Système de bombardement à basse altitude AN/AJB-1 (LABS)

## Introduction

Le système de bombardement à basse altitude (LABS) a été introduit pour faciliter la livraison d'armes nucléaires, fournissant une trajectoire prédéterminée avec des profils de livraison pour aider à échapper aux effets de souffle.

## Commandes et indicateurs

### Indicateur de tangage et de roulis
![ateliers](./img/labs.png)

L'aiguille verticale indique le roulis actuellement souhaité de 9 degrés au niveau des ailes gauche et droite. L'aiguille horizontale indique à la fois la charge G souhaitée en mode pullup et l'angle de tangage souhaité (droit et niveau) en mode pré-pullup. Vous devrez garder les ailes à niveau et donc rouler à 0 et être sur "G" pendant le pull up pour un largage automatique correct pour le mode de largage LABS ou LADD donné. Maintenez un G correct en gardant la barre horizontale centrée entre les lignes.

### Lumière de traction
![labs_light](./img/labs_release_light.png)

Le voyant de déverrouillage LABS indique quand le retrait doit commencer une fois éteint. La durée pendant laquelle la lumière est allumée est réglée sur les cadrans LABS et LABS ALT (gauche) ou LADD (droite) illustrés ci-dessous.

### Cadrans de minuterie LABS et LADD
![labs_dials](./img/pullup_release.png)
Les cadrans permettant de régler le temps de remontée pour LABS et LABS ALT (à gauche) et LADD (à droite) sont illustrés ci-dessus. Ils ont une plage de 0 à 28 secondes.

## Opération

Tous les modes de livraison LABS partagent la minuterie pullup. Le chronomètre de pullup est le temps fixé par le pilote pour indiquer le temps nécessaire à l'avion pour voler d'un point d'identification (IP) connu au point de pullup.

Il existe deux variables qui déterminent sur quoi la minuterie de pullup doit être réglée :

- Vitesse au sol
- Distance de déplacement de la bombe
- Distance de l'IP à la cible

`pullup timer = (distance from IP to target—bomb travel distance) / ground speed`

La vitesse au sol et la distance entre l'IP et la cible sont déterminées lors de la planification de la mission. Un bon point d'identification (IP) est quelque chose proche de la zone cible que le pilote peut facilement localiser et atteindre.

La distance de déplacement de la bombe est déterminée par les paramètres de largage de la bombe, notamment :

- Angle de libération
- Vitesse réelle
- Altitude cible
- Altitude de l'avion
- Type de bombe
- Vent

En utilisant toutes ces informations, nous pouvons commencer à utiliser les livraisons LABS et LADD car elles fonctionnent de manière similaire. En branchant toutes les données correctes que nous voulons pointer vers la cible et en appuyant sur le déclencheur de l'arme au point d'identification (IP), le voyant de déclenchement LABS s'allumera alors. Une fois qu'il est éteint après la fin du réglage de notre minuterie LABS, commencez à tirer et maintenez les ailes au niveau et soyez sur "G" à l'aide de la jauge LABS. La libération se fera alors automatiquement en fonction du mode de libération choisi. 50 degrés pour LABS et 120 pour LABS ALT.

### LABORATOIRES (Loft)

Le mode LABS est le mode normal, projetant la bombe vers la cible sur de longues distances, à un angle de largage de 50°.

### LABS ALT (par-dessus l'épaule)

Le mode LABS ALT est la méthode alternative qui permet de lancer la bombe verticalement au-dessus de la cible, à un angle de largage de 120°.

![Image de la version Loft](./img/labs_loft_delivery.png)

### Livraison de drogues à basse altitude (LADD)

Low Altitude Drogue Delivery (LADD) est destiné à la livraison d'armes nucléaires assistées par drogue. Au point de remontée, le pilote reçoit l'ordre de monter à 40°. La minuterie de libération détermine la libération. La minuterie de libération commence au point d'extraction. Lorsque le temps imparti est écoulé, la bombe est larguée.