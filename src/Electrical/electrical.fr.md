# Système électrique

![schéma du système électrique](./img/electrical_system.png)

## Introduction

Le F-100D dispose de deux systèmes électriques pour la plupart séparés :

- Un [Système CA](#ac-system) alimenté par le générateur CA ou une alimentation externe
- Un [Système CC](#dc-system) alimenté par le générateur CC
- Alimentation par batterie (ou externe)

Chaque système est alimenté indépendamment, mais en cas de panne, il est possible d'alimenter partiellement un système défaillant à l'aide d'un système fonctionnel.

## Système CC

Le système CC est normalement alimenté par la batterie et le générateur CC. Alternativement, l’alimentation peut également être reçue de l’extérieur.

### Générateur CC

Le générateur CC entraîné par moteur alimente les systèmes CC en fonctionnement normal.

!!! note
    Le générateur CC se connecte à environ 40 % du régime moteur.

!!! note
    Le générateur DC ne doit être réinitialisé que si un défaut électrique provoque sa coupure de la ligne.

### Bus de batterie

Le bus de batterie est connecté directement à la batterie, de sorte que les équipements essentiels alimentés par ce bus fonctionnent tant que l'alimentation de la batterie est disponible, **quelle que soit la position du commutateur de batterie**.

La batterie est de 24 volts, 24 ampères-heure. Le générateur CC produit nominalement 28 volts.

Le bus de batterie est connecté au bus de batterie via le relais de liaison du bus principal. Ce relais est alimenté par le bus batterie reliant le bus batterie au bus primaire.

S'il n'y a pas suffisamment de puissance sur le bus de batterie, la batterie n'est pas connectée, mais si le bus principal est alimenté depuis un autre endroit (par exemple, le générateur CC ou une alimentation externe), le bus de batterie peut rester sous tension. Éteindre l'interrupteur de la batterie dans ces conditions déconnecte le bus principal du bus de la batterie et la batterie ne sera pas chargée.

### Autobus principal

Le bus principal alimente les équipements les plus essentiels de l'avion. Il est alimenté par le bus de batterie lorsque l'interrupteur de batterie est **ON**, ou alimenté par un générateur CC ou une alimentation externe. Alimenté par un transformateur-redresseur en cas de panne du générateur CC.

### Autobus secondaire

Le bus secondaire alimente les équipements moins essentiels. Il est alimenté par le bus primaire lorsque l'alimentation du générateur CC, l'alimentation externe CC ou l'alimentation du transformateur-redresseur est disponible pour fermer le relais de liaison du bus secondaire, où il est ensuite alimenté par le bus primaire.

### Autobus Tertiaire

Le bus tertiaire alimente les équipements non essentiels. Il est alimenté par le bus principal lorsqu'une alimentation externe ou une alimentation CC du générateur est disponible pour fermer le relais de liaison du bus, où il est ensuite alimenté par le bus principal.

## Système AC

### Générateur CA

Le générateur CA entraîné par moteur alimente les systèmes CA en fonctionnement normal. Le générateur AC est entraîné par un entraînement à vitesse constante alimenté par le moteur.

!!! note
    Le variateur à vitesse constante met jusqu'à une minute au ralenti pour atteindre sa vitesse maximale afin que le générateur CA puisse entrer en ligne. Pour accélérer ce processus, le pilote peut avancer la manette des gaz jusqu'à 72 % (ou jusqu'à ce que le générateur soit mis en ligne).

!!! note
    Le générateur CA doit être réinitialisé si un défaut électrique le fait se débrancher de la ligne ou si l'interrupteur du générateur CA est placé en position d'arrêt.

### Bus CA triphasé principal (115 V)

Le bus CA triphasé principal alimente les équipements essentiels qui nécessitent une alimentation CA. L'alimentation est fournie par le générateur CA entraîné par le moteur.

### Bus d'instruments CA (115 V et 26 V)

Il existe deux bus d'instruments qui alimentent les équipements d'instruments vitaux. En raison de leur importance, ces bus CA peuvent tous deux être alimentés par le [bus primaire CC](#primary-bus) à l'aide de l'[onduleur d'instrument de secours](#standby-instrument-inverter).

### Contrôles et indications

#### Compteur de charge CA

Charge actuelle du générateur CA en pourcentage de sa charge maximale.

![chargement](./img/acload.png)

#### Compteur de charge CC

Charge actuelle du générateur CC en pourcentage de sa charge maximale.

![chargement](./img/dcload.png)

#### Voyant INST AC POWER OFF

Indique lorsque les bus CA de l’instrument ne reçoivent pas suffisamment de puissance électrique.

![instacoff](./img/instacpowerofflight.png)

#### GÉNÉRATEUR C.A. ARRÊTÉ

Indique lorsque le générateur CA est hors ligne, soit en raison d'un régime d'entraînement insuffisant, soit en raison d'un défaut qui a déclenché le générateur.

![acoff](./img/acgenoff.png)

#### GÉNÉRATEUR C.C ARRÊTÉ

Indique lorsque le générateur CC est hors ligne, soit en raison d'un régime d'entraînement insuffisant, soit en raison d'un défaut qui a déclenché le générateur.

![dcoff](./img/dcgenoff.png)

#### Onduleur d'instrument de secours

Transfère [l’alimentation du bus d’instrument CA] (#ac-instrument-buses-115v-and-26v) vers l’onduleur d’instrument de secours. Il s'agit d'une petite interruption de courant lorsque l'onduleur de l'instrument de secours atteint sa vitesse.

![stbyinv](./img/stbyinv.png)