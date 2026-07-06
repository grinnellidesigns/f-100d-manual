# Moteur

![bannière1](./img/banner1.png)

Le F-100D est équipé du turboréacteur Pratt & Whitney J-57 doté des tuyères de postcombustion J-57-P-21 et J-57-P-23. Le -21 était l'ancienne buse qui souffrait de problèmes d'allumage, de fiabilité et d'efficacité importants en post-combustion. La buse -23 (produite à l'origine pour le F-102) a résolu ces problèmes.

À pleine puissance militaire, le J-57 produit environ 10 200 livres de poussée dans des conditions standard et 16 000 livres en postcombustion maximale.

Le F-100D Super Sabre a besoin d'air extérieur pour faire tourner le noyau afin de démarrer le moteur. Sinon, les pilotes ont utilisé un mécanisme de démarrage à cartouche pour faire tourner le noyau à des vitesses suffisantes sans utiliser d'air extérieur.

!!! caution
    Les allumeurs du moteur peuvent être endommagés s'ils fonctionnent en continu pendant plus de 5 minutes. Réservez leur utilisation uniquement pendant le temps nécessaire au démarrage complet d'un moteur.

## Indications

Surveillez l'état du moteur en lisant les quatre jauges suivantes en bas à droite du [tableau de bord](../Introduction/instrument-panel.md) :

- [Rapport de pression moteur](#engine-pressure-ratio-gauge)
- [Tachymètre (RPM)](#tachometer-RPM)
- [Pression d'huile](#oil-pressure-gauge)
- [Température des gaz d'échappement (EGT)](#exhaust-gas-temperature-RPM-gauge)

![engstack](./img/gaugestack.png)

### Jauge de rapport de pression moteur

![epr](./img/epr.png)

Le manomètre du rapport de pression du moteur indique le rapport entre la pression de refoulement de la turbine et la pression de Pitot.

La jauge affiche deux valeurs réglables pour les rapports de pression au décollage et en croisière. En appuyant et en ajustant le bouton, vous ajustez le réglage du décollage. Tirer et ajuster le bouton ajuste le réglage de croisière.

!!! note
    La jauge EPR est alimentée par le bus AC principal.

#### Paramètres de l'index de décollage EPR

Réglez l'indexeur de décollage sur l'instrument en fonction du type de tuyère de postcombustion installée sur l'avion et de la température extérieure comme suit :

| -21  | -23  | °F  | °C  | 
|------|------|-----|-----|
| 1,82 | 1,79 | 122 |  50 |
| 1,84 | 1,80 | 118 |  48 |
| 1,85 | 1,82 | 116 |  46 |
| 1,86 | 1,83 | 111 |  44 |
| 1,87 | 1,85 | 108 |  42 |
| 1,88 | 1,86 | 104 |  40 |
| 1,89 | 1,88 | 100 |  38 |
| 1,90 | 1,89 |  97 |  36 |
| 1,91 | 1,91 |  93 |  34 |
| 1,92 | 1,93 |  90 |  32 |
| 1,93 | 1,94 |  86 |  30 |
| 1,94 | 1,96 |  82 |  28 |
| 1,96 | 1,97 |  79 |  26 |
| 1,97 | 1,99 |  75 |  24 |
| 1,98 | 2h00 |  72 |  22 |
| 1,99 | 2.02 |  68 |  20 |
| 2.01 | 2.03 |  64 |  18 |
| 2.02 | 2.05 |  61 |  16 |
| 2.03 | 2.06 |  57 |  14 |
| 2.04 | 2.08 |  54 |  12 |
| 2.05 | 2.09 |  50 |  10 |
| 2.06 | 2.10 |  46 |   8 |
| 2.07 | 2.12 |  43 |   6 |
| 2.09 | 2.13 |  39 |   4 |
| 2.10 | 2.15 |  36 |   2 |
| 2.11 | 2.16 |  32 |   0 |
| 2.13 | 2.17 |  28 |  −2 |
| 2.14 | 2.19 |  25 |  −4 |
| 2.16 | 2.20 |  21 |  −6 |
| 2.17 | 2.21 |  18 |  −9 |
| 2.18 | 2.23 |  14 | −10 |
| 2.20 | 2.24 |  10 | −12 |
| 2.21 | 2.26 |   7 | −14 |
| 2.22 | 2.27 |   3 | −16 |
| 2.23 | 2.28 |   0 | −18 |
| 2.25 | 2.29 |  −4 | −20 |
| 2.27 | 14h30 |  −8 | −22 |
| 2.28 | 2.31 | −11 | −24 |
| 2.29 | 2.32 | −15 | −26 |
| 14h30 | 2.33 | −18 | −28 |
| 2.32 | 2.34 | −22 | −30 |
| 2.34 | 2,35 | −25 | −32 |
| 2,35 | 2.36 | −29 | −34 |
| 2.37 | 2.37 | −33 | −36 |

### Tachymètre (RPM)

![tach](./img/tach.png)

Le tachymètre enregistre le régime moteur en pourcentage du régime maximum approximatif (9 980) du rotor du compresseur à grande vitesse.

!!! note
    Le tachymètre est alimenté par un générateur de tachymètre et est donc indépendant du système électrique de l'avion.

### Jauge de pression d'huile

![huile](./img/oil.png)

Le manomètre d'huile indique la pression de refoulement de la pompe à huile supérieure à la pression du carter d'engrenage en livres par pouce carré.

!!! note
    La pression d'huile a tendance à suivre l'accélérateur. Ceci est normal, à condition que la pression reste dans les limites.

!!! note
    Cette jauge est alimentée par le bus instrument 26 V AC.

### Jauge de température des gaz d'échappement (EGT)

![exhtemp](./img/exhtemp.png)

La jauge de température des gaz d'échappement indique la température des gaz d'échappement du moteur en °C.

!!! note
    Les indications de la jauge de température d'échappement sont des thermocouples de type auto-générés et ne nécessitent pas d'alimentation du système électrique.