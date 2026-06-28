# AIM-9 Sidewinder

## Introduction

L'AIM-9 sidewinder est un missile guidé infrarouge à courte portée introduit en 1956. Il s'agit de la principale arme air-air du F-100D.

Le Sidewinder est un missile à guidage infrarouge passif. Le missile est pointé à l'aide du [A-4 Gunsight](./a-4-gunsight.md#a-4-gunsight) avec le viseur [enfermé mécaniquement ou électriquement](./a-4-gunsight.md#mechanical-cage-lever).

Le missile génère une tonalité basée sur le rayonnement infrarouge reçu dans son autodirecteur, qui est transmis aux écouteurs du pilote. Un grognement faible indique peu ou pas de rayonnement infrarouge détecté, et un grognement plus fort et plus fort indique une source de chaleur, indiquant une cible possible détectée. Le grognement indique uniquement la capacité de l'autodirecteur à suivre, mais rien sur la portée, ni si le missile peut manœuvrer vers la cible.

Le F-100D peut transporter deux Sidewinders sur un lanceur de type IX sur chacun des pylônes intérieurs, pour un total de quatre missiles.

### Types de sidewinders

Le F-100D transportait historiquement 3 variantes différentes de l'AIM-9 Sidewinder, bien que certaines variantes ultérieures soient rétrocompatibles : les AIM-9L et AIM-9M Sidewinders sont compatibles avec des modifications mineures des rails qui ont été apportées à d'autres avions dans les années 1990.

#### AIM-9B

Introduit en 1957, c'est le premier sidewinder à être mis en service. Il a été largement utilisé pendant la guerre du Vietnam.

#### OBJECTIF-9E

Introduite en 1969, cette variante était dotée d'un chercheur refroidi par effet Peltier pour une meilleure sensibilité thermique, une vitesse de poursuite accrue du chercheur et une maniabilité améliorée. La limite du cardan du chercheur a été améliorée de 25° à 40°, ce qui le rend nettement plus efficace contre les cibles en manœuvre.

De plus, le G de lancement maximum a été augmenté de 2 à 7,33 G, permettant les lancements pendant les manœuvres, surmontant ainsi une lacune clé qui tourmentait l'AIM-9B.

#### OBJECTIF-9J

Introduit en 1972, le J a continué à améliorer la vitesse de trajectoire maximale de l'autodirecteur et le temps entre le lancement et la manœuvre du missile a été réduit de 0,5 à 0,3 seconde.

## Contrôles

Ce comité est chargé de :

- Gérer l'ordre des sidewinders de tir
- Changer le volume du sidewinder
- Largage des sidewinders
- Rendre les sidewinders sûrs lorsqu'ils ne sont pas utilisés.

![Contrôle des missiles](./img/missile_control_panel.png)

1. [Contrôle du volume des missiles](#missile-volume-control)
2. [Contournement de station](#station-bypass)
3. [Maître des missiles](#missile-master)
4. [Lancement sécurisé](#safe-launch)

### Contrôle du volume des missiles

Cela règle le volume du Sidewinder dans le casque.

### Contournement de gare

Dans le cas d'un Sidewinder défectueux, le magasin peut passer au Sidewinder suivant en utilisant le commutateur de dérivation de la station.

### Maître des missiles

Cet interrupteur à trois positions est normalement en position veille avec son ressort pour la position de réinitialisation.

| Position             | Description
|----------------------|-------------
| Réinitialisation (à ressort) | Réinitialise l'ordre de tir des sidewinders en ramenant l'ordre de tir au premier Sidewinder (sous-pylône droit du pylône gauche).
| Attendre              | Maintient le Sidewinder dans un état réchauffé tout en assurant la sécurité du missile. Le son peut toujours être entendu dans cette position.
| Prêt                | Arme le Sidewinder pour le lancement et le met à l'état prêt.

### Lancement en toute sécurité (largage)

Appuyer et maintenir ce bouton démarre le processus de [jettison](#Jettison) du Sidewinder, tirant tous les Sidewinders (sans fusée ni guidage) dans leur ordre de [tir](#Firing) avec un délai de 0,5 seconde entre chacun.

## Opération

### Installation

<!---
TODO Gun-Missile Switch
-->

Le [Commutateur Gun-Missile] (./guns.md#gun-missile-switch) en position MISSILE fournit un échauffement et une puissance gyroscopique aux missiles. Le [Missile Master Switch](#missile-master) définit l'état prêt des missiles. En mode STBY, le Sidewinder reste réchauffé et prêt. Dans cette position, le son du missile peut être entendu mais les circuits de tir ne sont pas armés.

Le volume du Sidewinder est ajusté à l’aide du Missile Control [Volume Control] (#missile-volume-control).

### Cuisson

Pour armer les missiles, vérifiez que le [Gun-Missile Switch] (./guns.md#gun-missile-switch) est en position MISSILE et réglez le [Missile Master Switch] (#missile-master) sur la position READY. Une tonalité du Sidewinder devrait être entendue et les [voyants d'affichage d'état] (./armament-control-panels.md#status-display-lights) devraient indiquer qu'un Sidewinder est prêt à tirer.

Les Sidewinders sont tirés dans l'ordre suivant et correspondent aux [voyants d'affichage d'état] (./armament-control-panels.md#status-display-lights).

![Ordre de tir du Sidewinder](./img/sidewinder_firing_order.png)

!!! warning
    Relâcher la gâchette avant la fin de la séquence de lancement entraînera la ** destruction ** du missile. Une fois la gâchette enfoncée, un processus irréversible commence : l'autodirecteur est libéré de sa cage et le générateur de gaz est tiré, ce qui réduit l'utilité du missile. Contournez les missiles inutilisables à l’aide du commutateur [station bypass](#station-bypass).
