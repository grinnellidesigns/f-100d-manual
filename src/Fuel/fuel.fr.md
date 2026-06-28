# Système de carburant

## Introduction

Le système de carburant comprend trois réservoirs principaux dans le fuselage et un réservoir dans chaque aile. Les réservoirs largables peuvent être installés sur n’importe lequel des six pylônes d’aile.

Une série de vannes et de pompes déclenchées par flotteur équilibrent automatiquement le carburant dans l'avion. Tout le carburant finit dans le réservoir avant du fuselage où il est ensuite transmis au moteur via le collecteur et un réservoir de vol inversé de 1,6 gallon qui fournit du carburant pendant de courtes périodes de g négatif ou nul.

L'avion dispose d'un système de ravitaillement sous pression unique qui permet le ravitaillement au sol et air-air de tous les réservoirs internes de l'avion. Ce système prévoit également le remplissage de réservoirs largables de 275 et 335 gallons sur les pylônes intermédiaires, permettant ainsi le ravitaillement en vol de ces réservoirs sur des pylônes intermédiaires. D'autres réservoirs sur d'autres pylônes ne peuvent pas être ravitaillés de cette façon.

## Réservoirs de carburant

Il y a 4 réservoirs de carburant principaux :

| Réservoir | Cellules | Capacité (combinée en livres) | Description |
|------|-------|----------------|-------------|
| Fuselage avant | Supérieur, Centre Gauche, Centre Droit, Inférieur | 2 912 | Le collecteur de moteur puise principalement dans ce réservoir. |
| Fuselage intermédiaire | Gauche, Droite | 1 391 | Ceux-ci alimentent principalement l'avant du fuselage, mais en cas de panne de la [pompe de transfert](#fuel-transfer-and-scavenge-pumps), la cellule droite peut alimenter directement le moteur. |
| Fuselage arrière | Centre | 702 | Celui-ci alimente principalement le fuselage avant, mais en cas de panne de la [pompe de transfert] (#fuel-transfer-and-scavenge-pumps), le fuselage arrière peut être transféré par gravité vers le réservoir intermédiaire du fuselage. |
| Aile | Gauche, Droite | 2 723 | Ceux-ci alimentent le fuselage avant par gravité et les [pompes de récupération](#fuel-transfer-and-scavenge-pumps) |
| Externe | Jusqu'à un par pylône d'aile | dépendant de la configuration | Ceux-ci alimentent le réservoir avant du fuselage via la pression de l’air de purge. La paire de réservoirs alimentés dépend de la position du [sélecteur de réservoir largable] (#drop-tank-selector-switch). |

![système de carburant](./img/fuel-system.png)

## Réservoir de vol inversé

Le réservoir de vol inversé alimente directement le moteur. Le réservoir de vol inversé peut être alimenté soit par le collecteur, lui-même alimenté par les réservoirs avant supérieur et inférieur du fuselage, soit par le réservoir intermédiaire du fuselage.

La géométrie de ce réservoir est conçue de telle sorte qu'une fois inversé, il reste encore environ 1,6 gallon de carburant pendant de courtes périodes de fonctionnement. La durée de fonctionnement avant l'extinction dépend du débit de carburant, car cela a un impact direct sur la rapidité avec laquelle ce réservoir de vol inversé s'épuise.

Le tableau suivant comprend des valeurs approximatives pour la postcombustion et la poussée militaire :

| Réglage de la puissance | Temps avant l'extinction (secondes) |
|---------------|--------------------------------|
| Postcombustion   | 1,5                            |
| Militaire      | 6.0                            |

## Pompes de surpression de carburant

Il y a un total de trois pompes de suralimentation, toutes trois situées dans le réservoir avant. Deux pompes CA sont situées dans la cellule supérieure et une pompe CC est située dans la cellule inférieure. Tous ces éléments alimentent le collecteur d'alimentation en carburant qui peut également être alimenté par gravité depuis la cellule inférieure du réservoir avant.

## Pompes de transfert de carburant (et de récupération)

Il y a deux pompes de transfert. Normalement, les réservoirs intermédiaire et arrière sont transférés vers les réservoirs avant lorsque le niveau du réservoir avant baisse. Ceci est nécessaire pour maintenir le bilan massique, mais aussi parce que l'alimentation principale se trouve dans le réservoir avant.

En cas de panne de la pompe de transfert, il pourrait ne pas être possible de transférer tout le carburant des réservoirs intermédiaire et arrière, car le réservoir intermédiaire peut alimenter directement le moteur par gravité. Le réservoir arrière peut également être transféré par gravité vers le réservoir intermédiaire pour une alimentation directe du moteur dans ce scénario.

!!! warning
    Lorsque la postcombustion fonctionne, le débit de carburant dépasse les transferts des réservoirs externes et internes vers le réservoir avant. Surveillez le niveau du réservoir de carburant avant et évitez les extinctions du moteur dues à une insuffisance de carburant.

## Largage de chars

Les réservoirs largables peuvent être montés sur n’importe lequel des pylônes d’aile. Cependant, seuls les réservoirs de 335 et 450 gallons peuvent être ravitaillés lorsqu'ils sont montés sur les pylônes intermédiaires. La liste des réservoirs disponibles est présentée ci-dessous.

| Réservoirs (gallons) | Pylônes              | Ravitailleable en vol |
|----------------|---------------------|--------------------|
| 200            | Tous                 | Non                 |
| 275            | Intermédiaire seulement   | Non                 |
| 335            | Intermédiaire seulement   | Oui                |
| 450            | Intermédiaire seulement   | Oui                |

Les réservoirs sont pressurisés par l'air de prélèvement du moteur lorsque le [commutateur de sélection du réservoir de largage] (#drop-tank-selector-switch) est réglé sur n'importe quelle position autre que **OFF**. En cas de panne électrique, les vannes de purge d'air sont normalement ouvertes, permettant le transfert de carburant de tous les réservoirs externes simultanément.

!!! warning
    Lorsque la postcombustion fonctionne, le débit de carburant dépasse les transferts des réservoirs externes et internes vers le réservoir avant. Surveillez le niveau du réservoir de carburant avant et évitez les extinctions du moteur dues à une insuffisance de carburant.

## Vanne d'arrêt du système de carburant

Le robinet d'arrêt de carburant est une vanne à commande électronique qui peut être utilisée pour couper le carburant arrivant au moteur. En cas de défaillance de la vanne, le [témoin de défaillance de la vanne d'arrêt du système de carburant] (#fuel-system-shutoff-valve-fail-light) s'allume.

## Commandes et indicateurs

### Sélecteur de réservoir largable

Ceci sélectionne les réservoirs externes qui sont pressurisés par l’air de prélèvement du moteur. En cas de panne électrique, les vannes de purge d'air sont normalement ouvertes, permettant le transfert de carburant de tous les réservoirs externes simultanément.

### Voyant de réservoir vide

Cela indique qu'il n'y a plus de pression de carburant provenant des réservoirs largables. Étant donné que la conduite de carburant du réservoir externe est partagée avec les pompes de récupération internes des réservoirs d'aile, ce voyant s'éteint une fois que les réservoirs d'aile commencent à récupérer environ 4 000 livres de carburant. Ce voyant s'allume à nouveau une fois que les réservoirs des ailes sont vides (il reste environ 1 500 livres de carburant).

### Témoin de défaillance de la vanne d'arrêt du système de carburant

Ce témoin s'allume si le robinet d'arrêt du système de carburant est bloqué, car cela pourrait restreindre le débit de carburant vers le moteur.

### Commutateur de ravitaillement en vol

Cela désexcite les vannes de commande de transfert des réservoirs de carburant internes et externes de l'aile, permettant au système de ravitaillement sous pression à point unique de ravitailler correctement ces réservoirs.

!!! warning
    Ne le positionnez pas sur **PRÊT** trop tôt car cela empêche environ 25 livres par minute de carburant d'être transféré des réservoirs internes de l'aile vers le réservoir avant.

### Voyant de ravitaillement en vol

Ce voyant indique simplement si le [interrupteur de ravitaillement en vol] (#air-refueling-switch) est en position prête. Cela n'indique pas si tous les systèmes sont fonctionnels.

### Indicateur de débit de carburant

L'indicateur de débit de carburant indique le débit de carburant de l'unité de commande de carburant au moteur en livres par heure.

!!! warning
    Cette jauge ne surveille pas le débit de carburant vers la postcombustion.

Cette jauge est alimentée par le bus instrument 26 V AC.

### Voyant de pompe de suralimentation de carburant

Ce voyant s'allume si la pression du carburant dans le moteur est inférieure à 5 psi, indiquant une condition dans laquelle une ou plusieurs pompes de suralimentation ne fonctionnent pas.

### Jauge de quantité de carburant avant

Indique la quantité totale de tous les réservoirs avant du fuselage.

### Jauge de quantité totale de carburant

Indique la quantité totale de tous les réservoirs internes.