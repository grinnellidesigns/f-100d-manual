# Tableau de bord
Le tableau de bord du F-100D contient une sélection minutieuse de jauges essentielles pour le fonctionnement de base, la navigation et la surveillance du système. Toutes les jauges souffrent d'erreurs d'installation et d'autres erreurs dues à l'usure. Au cours de la durée de vie du F-100D, il était courant de laisser la majorité des jauges de l'avion sans entretien. Vous remarquerez peut-être des pics de friction occasionnels et de légères erreurs de lecture modélisées par la simulation.

Cette section couvre les instruments de vol nécessaires au fonctionnement de base de l'avion. Pour plus d’informations, consultez la section du système concerné.

![remplacer l'image](./img/mainpanel.png)

1. [Indicateur de canal radio de commande à distance](../ARC-34%20Command%20Radio/command-radio.md#remote-channel-indicator)
2. [Indicateur d'attitude de veille](#standby-attitude-indicator)
3. [Horloge](#clock)
4. [Unité de sélection de visée](../Weapon_System/a-4-gunsight.md#1-sight-selector-switch)
5. [Indicateur de portée Tacan](../ARN-72%20TACAN/tacan.md#tacan-range-indicator)
6. [Indicateur de cap principal](../DirectionGyroCompass/direction-gyro-and-compass.md#direction-gyro)
7. [Indicateur de vitesse et de Mach](#airspeed-and-mach-indicator)
8. [Compteur de charge CA](../Electrical/electrical.md#ac-load-meter)
9. [Compteur de charge CC](../Electrical/electrical.md#dc-load-meter)
10. [Voyant d'avertissement principal](./lights-overview.md#master-caution-light)
11. [Indicateur d'attitude](#attitude-indicator)
12. [Indicateur radiomagnétique](../DirectionGyroCompass/direction-gyro-and-compass.md#direction-gyro)
13. [Indicateur de cours](../ARN-72%20TACAN/tacan.md)
14. _Lumière Tacan ILS (inopérant)_
15. [Altimètre](#altimeter)
16. [Indicateur de vitesse verticale](#vertical-velocity-indicator)
17. [Commutateur de missile de pistolet](../Weapon_System/guns.md#gun-missile-switch)
18. [Bouton d'érection rapide de l'indicateur d'attitude](#attitude-indicator-fast-erection-button)
19. [Témoins d'avertissement d'incendie et de surchauffe](./lights-overview.md#other)
20. [Indicateur de virage et de glissement](#turn-and-slip-indicator)
21. [Indicateur de plongée et de roulis LABS](../Weapon_System/low-altitude-bombing-system.md#pitch-indicator)
22. [Voyant de libération LABS](../Weapon_System/low-altitude-bombing-system.md#pullup-light)
23. [Accéléromètre](#accelerometer)
24. [Sélecteur de manomètre hydraulique](../Hydraulics/hydraulic.md#hydraulic-pressure-indicator-and-knob)
25. [Manomètre hydraulique](../Hydraulics/hydraulic.md#hydraulic-pressure-indicator-and-knob)
26. [Manomètre de pression d'huile](../Engine/engine.md#oil-pressure-gauge)
27. [Jauge de température d'échappement](../Engine/engine.md#exhaust-temperature-gauge)
28. [Tachymètre (RPM)](../Engine/engine.md#tachometer)
29. [Jauge de rapport de pression moteur](../Engine/engine.md#engine-pressure-ratio-gauge)
30. [Indicateur de débit de carburant](../Fuel/fuel.md#fuel-flow-indicator)
31. [Jauges de quantité de carburant](../Fuel/fuel.md#forward-fuel-quantity-gauge)
32. [Voyant INOP de la pompe de suralimentation de carburant](../Fuel/fuel.md#fuel-boost-pump-light)

!!! caution
    Si vous activez la disposition personnalisée du tableau de bord dans le F-100D [Options spéciales] (special-options.md), vous pouvez randomiser la disposition du tableau de bord à chaque vol, ou sélectionner celle de votre préférence à l'aide du [Grinelli Designs F-100D Dash Creator] (https://grinnellidesigns.com/dash-creator/) et en entrant le code dans le menu.

## Indicateur de vitesse et de Mach
L'ordinateur de données aérodynamiques (ADC) de l'avion calcule la vitesse en fonction des signaux de température et de pression reçus par le système pitot-statique. Plus précisément, il faut la différence entre la pression totale et statique mesurée pour calculer la pression dynamique. La perte du tube de Pitot ou des ports statiques crée des lectures inexactes.

L'anémomètre introduit également des erreurs d'installation et de position jusqu'à 10 nœuds.

Le nombre de Mach est calculé de la même manière, affichant la vitesse de l'avion comme un multiple de la vitesse du son à l'altitude-pression locale.

Ces deux lectures sont affichées sous la forme d’un indicateur combiné de vitesse et de Mach. La lecture intérieure affiche la vitesse en nœuds et la lecture extérieure affiche le nombre de Mach. Le tracé peut définir un marqueur d'index via un actionnement par pression et rotation du bouton de l'instrument.

## Indicateur d'attitude
Entraîné par un moteur électrique, un gyroscope double maintient son alignement vertical pendant que l'avion manœuvre, affichant son attitude. Cet indicateur est sujet à des erreurs de précession, mais se réaligne avec un mécanisme d'auto-érection.

Un bouton permet un réglage de la référence de haut en bas pour l'aligner avec l'horizon artificiel affiché.

## Indicateur de virage et de glissement
L'indicateur de virage et de dérapage fournit des informations sur la direction et la vitesse du virage sur une aiguille verticale. Un tour d'instrument standard de 4 minutes place l'aiguille de virage vertical sur la marque hachurée de la direction correspondante.

L'indicateur de glissement affiche les accélérations horizontales dans le plan latéral avec une bille glissante. Pour des virages coordonnés, utilisez une combinaison d'action sur le gouvernail et de l'amortisseur de lacet de l'avion pour centrer la bille glissante.

## Accéléromètre
L'accéléromètre mesure la charge G de l'avion dans l'axe normal. L'accéléromètre possède 3 aiguilles :

- Charge G positive maximale
- Charge G négative maximale
- Charge G actuelle

Un bouton push-to-reset remet à zéro les aiguilles de charge G maximale et minimale.

## Altimètre
L'altimètre affiche la lecture actuelle du système statique corrigée pour la température non standard réglée par le pilote via un actionnement rotatif sur le bouton de réglage de la pression de l'instrument. Le réglage actuel de la pression est affiché dans la fenêtre du Kollsman et est généralement réglé sur la pression locale du niveau de la mer en pouces de mercure. L'application correcte du réglage local de la pression au niveau de la mer affiche l'altitude moyenne au niveau de la mer de l'avion sur l'altimètre.

L'altimètre peut fonctionner selon deux modes : asservi et veille.
- En mode veille, l'altimètre agit comme un altimètre normal basé sur la pression avec toutes les erreurs de port statiques.
- En mode asservi, l'altimètre affiche à la place les valeurs corrigées du calculateur de données aérodynamiques.

Pour régler l'altimètre en mode servo, maintenez le commutateur de réinitialisation situé sur la face avant de l'altimètre en position de réinitialisation jusqu'à ce que le drapeau de veille disparaisse.

## Indicateur de vitesse verticale
L'indicateur de vitesse verticale calcule la vitesse verticale de l'avion à partir des signaux de pression statique de l'ADC, affichant le résultat en pieds par minute. Le décalage est une conséquence inhérente à la conception de l'indicateur, de sorte que les lectures sont retardées jusqu'à 6 secondes avec des erreurs substantielles de position et d'installation de la jauge.

## Horloge
L'horloge ABU-11 a deux manières d'indiquer l'heure :

- Sur le cadran de l'horloge, vous avez deux aiguilles qui fonctionnent comme une horloge normale de 12 heures sans réglage AM ou PM. Le cadran en bas à gauche de l’instrument règle l’heure.
- Une autre deuxième paire d’aiguilles fait office de chronomètre vous indiquant les secondes et les minutes. Le bouton en haut à droite de l'instrument fait passer le chronomètre à START, STOP et RESET.

## Indicateur d'attitude de veille
L'indicateur d'attitude de secours fournit une fonction redondante à l'[Indicateur d'attitude] (#attitude-indicator). Les systèmes fonctionnent de manière identique (y compris le réglage), mais fonctionnent sur des gyroscopes indépendants.

## Indicateur d'attitude Bouton d'érection rapide
Ce bouton est marqué **"PUSH VGI ERECT"** et permet une érection rapide des gyroscopes d'attitude lorsqu'il est enfoncé. Maintenez le bouton enfoncé pendant une durée proportionnelle au degré de désalignement suspecté du gyroscope.

!!! caution
    Pour éviter de créer des erreurs de désalignement supplémentaires, appuyez sur le bouton en vol en palier à vitesse constante.
