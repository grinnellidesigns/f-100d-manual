# Circuit de libération d'arme

## Circuits de contrôle d'armement de base

Le circuit de base de contrôle de l'armement envoie des signaux de largage aux pylônes pour larguer les roquettes, les bombes et le contenu du distributeur. Il peut recevoir des impulsions de bombe à partir du signal de déclenchement du [mode de livraison manuel] (./armament-control-panels.md#mode-selector), du [libération automatique du viseur] (a-4-gunsight.md#bomb-air-to-ground-automatic) ou du signal de déclenchement du [Système de bombardement à basse altitude] (./low-altitude-bombing-system.md).

Lorsqu'une impulsion de bombe est reçue du [Système de largage d'armes de l'avion](./aircraft-weapons-release-system.md), il appartient au [circuit de sélection d'armes](./armament-control-panels.md#weapon-selection-circuitry) de transmettre les impulsions aux pylônes appropriés pour larguer l'ordonnance.

Toutes les stations dont le [Commutateur de sélection de libération de station] (./armament-control-panels.md) est armé recevront l'impulsion de bombe transmise. Toutes les stations pour lesquelles le largage est sélectionné convertiront l'impulsion de la bombe en un signal de largage (si la munition peut être larguée).

## Système de largage d'armes d'avion AN/AWE-1 (AWRS)

### Introduction

Lorsque l'AWRS est actif, toute impulsion de bombe provenant du [bomb-button]() ou du [Low Altitude Bombing System](./low-altitude-bombing-system.md) est transmise à l'AWRS pour séquencer les pylônes, les quantités et le moment des largages de bombes ou de roquettes.

### Commutateurs de sélection de libération de station

**Pour que le système de largage des armes de l'avion fonctionne correctement, tous les [commutateurs de sélection de largage de la station] (./armament-control-panels.md#station-release-selection-switches) pour le type d'arme souhaité doivent être déplacés en position NORM ou JETT (selon si un largage armé ou un largage est requis).**

### Contrôles

![Panneau du système de largage des armes de l'avion](./img/awrs_panel.png)

1. [Sélecteur de quantité](#quantity-selector-switch)
2. Voyant d'alimentation
3. [Commutateur d'intervalle de libération](#release-interval-switch)
4. [Commutateur multiplicateur (x10)](#multiplier-switch-x10)
5. [Commutateur de sélection de mode](#modes)

#### Sélecteur de quantité

Avec le sélecteur de quantité en position **OFF**, l'alimentation électrique est coupée du système AWRS et le [circuit de contrôle de l'armement de base] (#basic-armament-control-circuitry) est utilisé. Avec le sélecteur de quantité réglé sur n'importe quelle position numérotée, l'AWRS est actif et alimenté.

Le nombre sélectionné fournit à l'AWRS la quantité d'impulsions de déclenchement en modes d'ondulation.

_Voir [opération](#operation)._

#### Commutateur d'intervalle de relâchement

Le commutateur d'intervalle de libération définit l'intervalle de temps en millisecondes (ms) entre les impulsions AWRS.

#### Commutateur multiplicateur (x10)

Le réglage du commutateur multiplicateur sur x10 augmente la valeur de [intervalle de libération] (#release-interval-switch) d'un multiple de 10. Le réglage sur x1 ramène la synchronisation à la valeur du commutateur d'intervalle.

### Modes

#### Opération

Les modes de déclenchement produisent des impulsions distribuées aux pylônes en fonction du type de déclenchement. Le tableau suivant décrit comment les impulsions sont produites et transmises aux circuits de type déclencheur après avoir reçu chaque signal d'entrée du signal de déclenchement du [mode de livraison manuel]() ou du [Système de bombardement à basse altitude](./low-altitude-bombing-system.md).

| Mode de libération | Nombre d'impulsions |
|--------------|------------------|
| ÉTAPE         | Le signal d'entrée ne produit qu'une seule impulsion |
| ONDULATION       | Le signal d'entrée produit une séquence d'impulsions avec des intervalles spécifiés par le [Commutateur d'intervalle de libération] (#release-interval-switch) et le [Commutateur multiplicateur] (#multiplier-switch-x10). La longueur de la séquence est le réglage du [Sélecteur de quantité] (#quantity-selector-switch) à condition que le signal d'entrée soit maintenu pendant toute la durée de la séquence. Si le signal d'entrée est libéré plus tôt (c'est-à-dire que le bouton de la bombe est relâché), la séquence s'arrête immédiatement. |

Il existe 3 types de versions possibles. Chaque type agit sur des impulsions de séquence.

| Type de version | Résultat du pouls |
|--------------|--------------|
| CÉLIBATAIRE | Une seule bombe est larguée depuis le prochain pylône valide dans la séquence de largage s'il en existe un. |
| PAIRES | Une paire de bombes ou de roquettes est larguée depuis la prochaine paire de pylônes valides dans la séquence. |
| SALVE | Chaque pylône sélectionné valide libère une bombe ou une fusée si le pylône n'est pas vide.

#### Exemples

Pour vous aider à comprendre l’AWRS, quelques exemples sont présentés ci-dessous. Chaque exemple suppose qu'il y a suffisamment de bombes dans l'avion dans la configuration correcte pour larguer le bon nombre de bombes ou de roquettes.

| Mode de libération | Type de version | Sélecteur de quantité | Intervalle (ms) |  Commutateur multiplicateur  | Résultat |
|--------------|--------------|--------------------------|---------------|---------------------|--------|
| ONDULATION       | CÉLIBATAIRE       | 4                        | 60            | x1                  | 4 bombes sont larguées à un intervalle de 60 ms entre elles. |
| ONDULATION       | CÉLIBATAIRE       | 6                        | 100           | x10                 | 6 bombes sont larguées avec un intervalle de 1000 ms (en raison du commutateur x10) entre elles |
| ONDULATION       | PAIRES        | 3                        | 150           | x1                  | 3 paires de bombes sont larguées (6 au total) avec un intervalle de 150 ms entre chaque paire. |
| ONDULATION       | SALVE        | 3                        | 45 ms         | x1                  | Par exemple, disons que l'avion est armé d'un 1, 1, 3, 3, 1, 1 MK-82 sur chaque pylône. La première salve largue 6 bombes, laissant 0, 0, 2, 2, 0, 0 sur l'avion. 45 ms plus tard, 2 bombes supplémentaires seront larguées, laissant 0, 0, 1, 1, 0, 0. 45 ms plus tard encore, les 2 bombes restantes seront larguées, ce qui entraînera un total de 10 bombes larguées. |

### Priorité et séquencement des stations

Les bombes ou les roquettes sont larguées par ordre de priorité, en alternant les côtés si deux pylônes valides partagent la même priorité. Plus un pylône est éloigné du centre, plus sa priorité est élevée. L'AWRS ne prend pas en compte les pylônes inactifs, les pylônes vides ou les pylônes armés d'un type d'arme incorrect.

Le tableau suivant affiche la priorité de chaque pylône :

| Extérieur gauche  | Milieu gauche | Intérieur gauche | Intérieur droit | Milieu droit | Extérieur droit |
|-------------|-------------|------------|-------------|--------------|-------------|
|  1          | 3           | 5          | 6           | 4            | 2           |

!!! note
    **Les fusées/modules de distribution ne peuvent pas envoyer de signal vide.** Une fois que la fusée extérieure ou les modules de distribution sont vides, l'AWRS ne se dirigera pas automatiquement vers la fusée intérieure ou les modules de distribution. Au lieu de cela, il continue de supposer qu’ils sont valides. Pour utiliser une fusée intérieure ou des dosettes distributrices, utilisez plutôt RIPPLE-STEP ou RIPPLE-SALVO.

!!! warning
    **[Commutateurs de sélection de libération de station](#station-release-selection-switches) n'affectent pas la validité du pylône AWRS. Ces interrupteurs coupent le circuit entre l'AWRS et le pylône, provoquant le « blocage » de l'AWRS si ces pylônes sont réglés sur OFF.**
