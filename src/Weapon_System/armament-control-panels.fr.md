# Circuit de sélection d'arme

Le circuit de largage des armes gère le largage des armes depuis l'avion, à la fois armé et largué.

Le F-100D disposait d'une nouvelle méthode de sélection d'armes pour l'époque : le pilote sélectionnait un mode de largage et un type d'arme. Sélection des modes de lancement et des armes à l'aide du [panneau de sélection d'armement] (#armament-selector-panel).

## Panneau de sélection d'armement

Ce comité est chargé de :

- Sélection des armes
- Modes de visée et de bombardement
- Options de mise à feu
- Sélection de pylônes

![Panneau de sélection d'armement](./img/armament_controls.png)

1. [Sélecteur de magasins](#stores-selector)
2. [Sélecteur de mode](#mode-selector)
3. [Commutateur de bras de bombe](#bomb-arm-switch)
4. [Commutateurs de sélection de libération de station](#station-release-selection-switches)

### Sélecteur de magasins

Le sélecteur de magasins définit le type d'arme souhaité. Lorsqu'un type de magasin est sélectionné, les pylônes armés sont sélectionnés pour être libérés par les paramètres du [Panneau de commande de chargement des pylônes] (#pylon-loading-control-panel).

### Sélecteur de mode

Cela détermine le type de largage des armes air-sol. Lorsqu'ils sont réglés sur n'importe quelle position autre que la position OFF, le viseur et le radar sont alimentés.

| Position          | Description
|-------------------|--------------
| DÉSACTIVÉ               | Les armes, le viseur et le radar ne sont pas alimentés.
| VUE ET RADAR     | La vue et le radar sont alimentés et peuvent être utilisés avec des armes à feu ou des missiles. Le bouton de la bombe est activé pour être largué en utilisant le [mode de largage de la bombe avec viseur] (./a-4-gunsight.md#bomb-air-to-ground-automatic).
| MANUEL            | La vue et le radar sont alimentés. Le bouton de la bombe est activé et peut envoyer des impulsions de déclenchement au [Circuit de contrôle de l'armement de base] (./aircraft-weapons-release-system.md#basic-armament-control-circuitry) ou au [Système de largage des armes de l'avion] (./aircraft-weapons-release-system.md). Ce mode envoie des impulsions directement pour libérer les armes.
| LABORATOIRES              | La vue et le radar sont alimentés. Le bouton de la bombe est activé et peut envoyer des signaux d'activation au [LABS](./low-altitude-bombing-system.md) pour le mode LABS normal (LOFT).
| LABORATOIRES ALT          | La vue et le radar sont alimentés. Le bouton de la bombe est activé et peut envoyer des signaux d'activation au [LABS](./low-altitude-bombing-system.md) pour le mode LABS alternatif (Over-the-Shoulder).
| LADD              | La vue et le radar sont alimentés. Le bouton de la bombe est activé et peut envoyer des signaux d'activation au [LABS](./low-altitude-bombing-system.md) pour le mode LABS de livraison de drogue à basse altitude.

### Interrupteur de bras de bombe

Celui-ci contrôle les solénoïdes d'armement des bombes dans les pylônes. Cela n’affecte que l’armement à la bombe et au napalm.

| Paramètre     | Fusées               | Kit de queue à traînée élevée déployé (si la bombe en a un)
|-------------|---------------------|-------------
| SÛR        | AUCUN                | NON
| NEZ        | NEZ, CENTRE        | NON
| QUEUE        | QUEUE, CENTRE        | OUI
| NEZ ET QUEUE | NEZ, CENTRE, QUEUE  | OUI

### Commutateurs de sélection de libération de station

Ces 7 interrupteurs coupent le circuit entre les systèmes de l'avion et les circuits de tir et de largage du pylône. Lorsqu'un pylône est en position NORM, le circuit de déclenchement est actif. Lorsqu'un pylône est en position JETT, le circuit de largage est actif à la place.

!!! caution
    Lors de l'armement du système d'armes, maintenez les interrupteurs en position NORM, car le [sélecteur de magasins] (#stores-selector) sélectionnera les armes appropriées à larguer.

!!! warning
    **La désactivation de ces interrupteurs ne les supprime pas de l'ordre de tir du [Circuit du système de largage des armes de l'avion](./aircraft-weapons-release-system.md#station-release-selection-switches).** Ainsi, la désactivation de certains d'entre eux lors de l'utilisation de l'AWRS peut entraîner une séquence de largage de l'arme suspendue.

## Panneau de contrôle de chargement des pylônes

Ce panneau stocke des informations sur le type d'arme montée sur chaque pylône. Réglez chaque interrupteur à 7 positions de manière à ce que le [Panneau de sélection d'armement] (#armament-selector-panel) puisse sélectionner correctement les pylônes en fonction de leur type d'arme.

![Panneau de contrôle de chargement du pylône](./img/pylon_loading_panel.png)

1. Réglage de l'arme intérieure gauche
2. Réglage de l'arme intermédiaire gauche
3. Réglage de l'arme extérieure gauche
4. Réglage de l'arme intérieure droite
5. Réglage de l'arme intermédiaire droite
6. Réglage de l'arme extérieure droite
7. Loquet et couvercle du panneau de commande de chargement du pylône

Par défaut, le cadran de chaque pylône est réglé par l'équipe au sol lors du réarmement ou de l'apparition. Vous pouvez choisir d'effectuer cette étape vous-même dans les [options spéciales](../Introduction/special-options.md#pylon-control-armament-assistance)).

Il existe 1 à 9 supports d'armes possibles. Ceux-ci correspondent pour la plupart aux types d'armes trouvés dans le [Sélecteur de magasins](#stores-selector).

| Nombre | Ordonnance         | Remarques
|--------|-------------------|---------
| 1      | Vide             | Rien de chargé
| 2      | Réservoirs de carburant        | Important pour G-Limit et Jettison
| 3      | Bombes             |
| 4      | Distributeurs        |
| 5      | Fusées           |
| 6      | Armes spéciales   | Ordonnance nucléaire
| 7      | Missiles          | C'est fonctionnellement la même chose que vide puisque les missiles ne sont pas contrôlés par les panneaux de contrôle de l'armement.
| 8      | Napalm            |
| 9      | Inopérant       | Fonctionnellement identique à Empty. À l’exception des pylônes intérieurs où cela indique la présence de pies-grièches.

## Voyants d'affichage d'état

Les voyants d'affichage d'état indiquent diverses informations sur l'état actuel du système d'arme.

![Image des voyants d'affichage de l'état](./img/status_display_lights.png)

| Lumière     | But
|-----------|---------
| TER VIDE | Si un TER est monté sur un pylône intérieur, cela indique qu'il est vide de bombes
| CBU VIDE | Si un distributeur CBU est monté, indique s'il est complètement épuisé.
| Missile   | Indique si un missile [AIM-9 Sidewinder](aim-9-sidewinder.md) est prêt à être tiré. Les missiles sont classés par ordre de tir.
