# Gyroscope de direction et boussole

<!-- 
Toute cette section doit être revue : ordre des sections, titres et numéros sur l'image.
Hésitation sur la disposition des numéros sur l'image des commandes : de gauche à droite dans l'ordre, ou numéroter
les éléments dans l'ordre logique d'utilisation (alimentation, fonction, réglages...).
-->

## Introduction

Le gyroscope directionnel est utilisé pour la navigation, fournissant une référence de cap stable lorsque l'avion tourne. Ce gyroscope est maintenu aligné sur le nord magnétique grâce à l'utilisation d'un compas distant, situé dans l'aile, qui aligne progressivement la direction du gyroscope chaque fois que l'avion ne tourne pas.

## Composants

### Direction Gyroscope

Il s'agit d'un gyroscope horizontal, suspendu tangentiellement au sol. En plus de l'axe de lacet, le gyroscope peut tourner librement le long de l'axe de tangage pour rester tangent au sol. Cela permet au gyroscope de garder un cap fixe dans l’espace.

Le gyroscope de direction pilote les indications de la carte radio-boussole :

![carte boussole radio](./img/radio_compass_card.png)

et l'aiguille de l'indicateur de cap :

![indicateur de cap](./img/heading_indicator.png)

Bien que le gyroscope directionnel puisse maintenir un cap fixe dans l’espace pendant de courtes périodes, il est sujet à différentes formes de dérive sur de longues périodes. Vous trouverez ci-dessous les différentes formes de dérive et leurs sources.

| Dérive | Description | Dérive de l'hémisphère nord | Dérive de l'hémisphère sud |
|-------|-------------|---------------------------|---------------------------|
| **Terre** | À mesure que la Terre tourne en fonction de la latitude (nord/sud), la direction apparente du gyroscope dérive. Cela peut être plus clairement compris en considérant un gyroscope très proche du pôle nord, le gyroscope reste pointé selon un angle fixe dans l'espace quelle que soit la rotation de la terre, en tant que telle, la direction apparente dérive à mesure que la terre tourne. | croissant | décroissant |
| **Écrou de latitude** | La dérive du taux terrestre peut être efficacement contrée par un poids décalé sur le gyroscope, connu sous le nom d'écrou de latitude. Ce gyroscope de direction n'a pas d'écrou de latitude mais est corrigé électroniquement à l'aide du [bouton de latitude] (#latitude-correction-knob) permettant au pilote d'ajuster la latitude pour maintenir la précision du gyroscope. | décroissant | croissant |
| **Promenade en transport** | Semblable à la dérive provoquée par la rotation de la Terre, l’avion peut lui-même augmenter ou diminuer la rotation autour de la Terre en volant vers l’est ou l’ouest. Contrairement à la dérive due à la rotation de la Terre, cette erreur n'est pas compensée. | croissant (est) / décroissant (ouest) | décroissant (est) / croissant (ouest) |
| ** Errance aléatoire ** | En raison de l'imprécision des composants et du frottement, le gyroscope précédera naturellement, entraînant une erreur de 1 à 3° par heure, il n'y a également aucun moyen de corriger cette dérive. | aléatoire | aléatoire |

#### L'esclavage

Notamment, le dérapage de transport et le dérapage aléatoire ne peuvent pas être corrigés. Pour cette raison, le gyroscope directionnel est utilisé conjointement avec la boussole distante afin que chaque système puisse couvrir les faiblesses de l'autre. La boussole à distance, qui est précise en moyenne sur de longues périodes, peut être utilisée pour ajuster la direction du gyroscope vers le nord magnétique. Un moteur électrique est utilisé pour précéder le gyroscope vers le nord magnétique mesuré. C'est ce qu'on appelle l'asservissement du gyroscope directionnel au compas magnétique. Les modes sont décrits ci-dessous.

| Mode | Description | Taux d'esclavage |
|------|-------------|--------------|
| **Indicateur de direction** | Découple le gyroscope de direction du compas magnétique, ce qui n'entraîne aucune correction. | aucun |
| **Esclavage** | Asservit lentement le gyroscope directionnel au compas magnétique lorsque l'avion n'a pas tourné pendant au moins 15 secondes. | 1°/minute |
| **Esclavage rapide** | Asservit rapidement le gyroscope directionnel au compas magnétique lorsque l'avion n'a pas tourné pendant au moins 15 secondes. | jusqu'à 360°/minute |

À la mise sous tension ou après que le [sélecteur de fonction] (#function-selector-switch) soit passé de **DG** à **MAG**, le gyroscope de direction entre en mode d'asservissement rapide.

!!! warning
    Si l'asservissement rapide est utilisé lorsque l'avion accélère, tourne ou tangage au-delà de ±30°, le gyroscope de direction est asservi vers un cap erroné au compas magnétique.

#### Nivellement

Au fur et à mesure que l'avion se déplace, le gyroscope bascule progressivement, car il est pointé vers un point fixe dans l'espace, ce qui entraîne des lectures erronées. Des commutateurs électrolytiques sont utilisés pour indiquer quand le gyroscope n'est pas à niveau par rapport à la gravité et un moteur est utilisé pour ramener le gyroscope dans le plan tangent au sol.

### Relais thermique

Un relais thermique est intégré au circuit d'asservissement pour contrôler le cycle d'esclave rapide. Lorsque le système est commuté sur la position **MAG**, le relais chauffe et se ferme après un bref délai, fournissant une haute tension au moteur couple d'asservissement pour un alignement rapide du gyroscope vers le nord magnétique. Une fois la période d'esclavage rapide terminée, le relais refroidit et se rouvre, ramenant le système à son taux d'asservissement normal. Étant donné que le relais doit refroidir complètement avant qu'un autre cycle d'esclavage rapide puisse se produire, une commutation répétée entre **MAG** et **DG** sans temps de refroidissement suffisant peut empêcher un asservissement correct et entraîner des erreurs de cap.

### Émetteur de boussole à distance (boussole J-4)

La boussole à distance est un dispositif de détection de champ magnétique qui détecte le nord magnétique actuel par rapport au cap de l'avion. Comme décrit [ci-dessus] (#direction-gyro), ce signal donne une indication précise du nord magnétique en moyenne et peut donc être utilisé pour ajuster (asservir) lentement le gyroscope de direction vers le nord magnétique s'il a subi des erreurs.

La boussole distante est suspendue de manière pendulaire dans un liquide pour amortir les mouvements excessifs. Le pendule de la boussole à distance est limité à un angle maximum de 30° dans toutes les directions. Le résultat est qu'en fonctionnement normal, le pendule trouve le niveau et donne une indication précise du nord magnétique.

Lors d'un virage, d'une accélération ou d'un tangage dépassant ±30°, le pendule est déplacé de la valeur correcte, ce qui entraîne des indications de cap erronées pour le nord magnétique. Ces erreurs peuvent être observées en regardant la [fenêtre de l'annonciateur](#annunciator) pour voir comment l'erreur mesurée évolue au fur et à mesure des manœuvres de l'avion.

## Contrôles

![image j4](./img/j4compass.png) <!-- REPLACE THIS IMAGE -->

1. [Bouton de commande de synchronisation](#synchronizer-control-knob)
2. [Sélecteur de fonction](#function-selector-switch)
3. [Annonciateur](#annunciator)
4. [Bouton de correction de latitude](#latitude-correction-knob)
5. [Commutateur hémisphère](#hemisphere-switch)

### Bouton de commande du synchroniseur

Le bouton de commande du synchroniseur est utilisé pour faire tourner manuellement le gyroscope de direction pendant un fonctionnement asservi ou non asservi pour une orientation rapide du système de cap.

### Sélecteur de fonction

Le sélecteur de fonction est un interrupteur à deux positions marqué **MAG** et **DG**. Lorsque le commutateur est en position **MAG**, les signaux de l'émetteur de boussole à distance sont utilisés et le système fonctionne comme un système de cap asservi. Lorsque l'interrupteur est en position **DG**, le système fonctionne en mode non esclave. L'asservissement rapide automatique se produit pendant environ 15 secondes après la mise sous tension initiale ou chaque fois que le sélecteur de fonction est déplacé de **MAG** à **DG**, puis de nouveau à la position **MAG**.

!!! note
    Le vol rectiligne et en palier doit être maintenu pendant 15 secondes avant de tenter d'asservir rapidement l'indicateur du compas. Cela devrait permettre au gyroscope à commutation de taux de restaurer le signal d'asservissement magnétique au système de boussole et de permettre à l'indicateur de la boussole de se synchroniser avec le cap magnétique correct.

!!! caution
    Deux minutes doivent s'écouler lors du passage du mode magnétique au mode gyroscope directionnel et du retour au mode magnétique. Cela permet au relais thermique qui contrôle le cycle d'esclave rapide de refroidir. Si le relais n'est pas correctement refroidi, l'indicateur peut s'arrêter avec une lecture erronée.

### Annonciateur

L'annonciateur indique l'erreur entre le gyroscope de direction et le nord magnétique détecté par le courant, le [bouton de commande du synchroniseur] (#synchronizer-control-knob) peut être utilisé pour un alignement rapide du pointeur de cap pendant le fonctionnement asservi.

!!! note
    Dans les virages ou en accélération, l'indication peut être erronée.

### Bouton de correction de latitude

Le bouton de correction de latitude fournit une entrée manuelle de latitude au système gyroscopique pour contrecarrer la dérive apparente due au taux de rotation de la Terre. Celui-ci doit être réglé sur la latitude approximative de l’avion.

### Commutateur hémisphère

L'interrupteur hémisphère est réglé par l'équipe au sol et n'est pas accessible au pilote.

## Fonctionnement normal

1. Confirmez que le commutateur hémisphère a été correctement réglé par l'équipe au sol avant le vol.
2. Tournez le [sélecteur de fonction] (#function-selector-switch) sur la position **MAG** pour un fonctionnement asservi normal.
3. Maintenez un vol rectiligne et en palier pendant au moins 15 secondes pour permettre à l'émetteur du compas distant et au gyroscope de se stabiliser.
4. 16
5. Ajustez le [bouton de correction de latitude] (#latitude-correction-knob) à la latitude actuelle de l'avion pour minimiser la dérive du gyroscope.
6. Si vous basculez entre **MAG** et **DG**, attendez 2 minutes avant de remettre le commutateur sur **MAG** pour vous assurer que le relais thermique refroidit et que le cycle d'esclave rapide se termine correctement.
