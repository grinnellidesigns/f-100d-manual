# Récepteur de référence et d'avertissement radar AN/APR-25

## Introduction

L'AN/APR-25 est un récepteur d'avertissement et de référence radar. Il s'agit d'un équipement conçu pour détecter les signaux radar et de guidage entrants et informer le pilote de toute menace.

![image-de-l'ensemble](./img/rhaw_set.png)

## Théorie du fonctionnement

### Théorie du radar

Pour comprendre la théorie de fonctionnement de l'AN/APR-25, il est important de comprendre les bases du radar.

![Image du fonctionnement de base du radar](./img/radar-principle-todo-replace.gif)

Le principe de fonctionnement du radar consiste à envoyer une petite rafale de rayonnement (généralement des micro-ondes) dans une direction et à mesurer le temps nécessaire pour recevoir tout rayonnement réfléchi. La vitesse du rayonnement est connue, le temps peut donc être utilisé pour estimer la distance par rapport à tout ce qui réfléchit le rayonnement.

#### Fréquence porteuse (bande)

La fréquence porteuse est la fréquence du rayonnement utilisé pour la détection d'objets. Chaque impulsion contient une rafale de ces rayonnements à la fréquence porteuse.

![Image de l'impulsion radar](./img/carrier_frequency.png)

La fréquence porteuse peut être largement classée en bandes. Les bandes pour l'AN/APR-25 sont répertoriées ci-dessous (notez qu'elles sont similaires aux bandes OTAN mais pas exactement identiques) :

| GROUPE          | Fréquence (GHz) |
|---------------|-----------------|
| **Je** (Inde) | 7-11            |
| **G** (Golf)  | 4,4 à 5,8         |
| **E** (Écho)  | 2,4–3,6         |

Chaque fois que le radar est mentionné dans l'une de ces bandes, cela signifie simplement que le rayonnement qu'il émet se situe dans les limites de la bande.

Des radars très différents appartiennent à différentes bandes, Early Fan-Song A (SA-2) utilise la bande Echo, plus tard Fan-Song E (SA-2) utilise la bande Golf.

Les radars de chasse se trouvent dans la bande Inde (à quelques exceptions près dans la bande Echo). Les radars Golf et Echo ont tendance à être des radars de recherche ou de contrôle de tir.

!!! caution
    Les systèmes d’armes qui défient ces conventions générales ne manquent pas.

#### Fréquence de répétition des impulsions (PRF)

Il ne suffit pas d’envoyer une seule impulsion de rayonnement car l’énergie contenue dans une impulsion est très petite et peut donc être difficile à détecter. Pour améliorer cela et mettre continuellement à jour ce que le radar détecte, le radar enverra un flux d'impulsions. La vitesse à laquelle ces impulsions sont transmises est connue sous le nom de fréquence de répétition des impulsions.

![Image du train d'impulsions radar](./img/prf.png)

Le tableau suivant décrit différents types de fréquence de répétition des impulsions :

| Catégorie | Plage PRF (kHz) | Description |
|----------|-----------------|-------------|
| HAUT     | 30 à 300+         | Principalement utilisé dans les radars Doppler à impulsions. Les anciens radars Doppler à impulsions n'ont que des modes PRF élevés. Ceux-ci saturent l'AN/APR-25 et donnent une tonalité constante à la fréquence maximale que le générateur audio AN/APR-25 peut créer. |
| MOYEN   | 3-30            | Utilisé dans les radars Doppler à impulsions modernes. Les fréquences de répétition des impulsions moyennes sont modulées, ce qui signifie que le PRF varie rapidement, leur donnant des modèles complexes. Cela peut donner des tonalités numériques complexes à partir du générateur audio de l'AN/APR-25. |
| FAIBLE      | <3              | Utilisé dans les anciens radars indicateurs d'impulsions et de cibles mobiles. Cette fréquence est également couramment utilisée pour les radars de cartographie au sol. Les radars plus anciens utilisent ce qu'on appelle la gigue du PRF pour réduire l'encombrement indésirable. Cette gigue est le changement aléatoire du PRF et peut entraîner l'audition d'un bourdonnement dans l'audio AN/APR-25. |

L'AN/APR-25 a été conçu uniquement pour traiter les menaces à faible PRF et seules celles-ci peuvent donc être correctement catégorisées. Cependant, en raison des multiples fréquences utilisées dans le PRF moyen, des fréquences de battement sont créées qui peuvent être entendues dans la plage basse du PRF. Les radars à PRF élevé n'ont pas une telle complexité et ils maximisent donc simplement la fréquence du générateur audio AN/APR-25.

### Équipement

#### Antennes

L'AN/APR-25 utilise quatre antennes pour détecter les rayonnements entrants. Il y a deux antennes sur le nez pour détecter le rayonnement entrant de la moitié avant et deux antennes sur la queue pour détecter le rayonnement entrant de la moitié arrière.

Les quatre antennes sont inclinées à 45°.

Il y a deux antennes sur le nez :
![antennes-nez](./img/front-antennas.png)

et deux antennes sur la queue :
![antennes-queue](./img/rear-antennas.png)

Chaque antenne couvre environ un cône de 90°. La force relative entre les antennes peut être utilisée pour déterminer la détection des menaces. Étant donné que les antennes sont fixées à l'avion lorsque l'avion roule et tangue, la direction relative du rayonnement changera et l'azimut apparent sur la lunette changera également.

#### Amplificateurs

Chaque antenne est acheminée vers trois amplificateurs, un pour chaque bande détectée par l'AN/APR-25. Les amplificateurs augmentent le signal jusqu'à un niveau utilisable afin qu'il puisse être transmis à l'analyseur logique.

#### Analyseurs logiques

Il existe un analyseur logique pour chaque bande. En général, les analyseurs logiques disposent de circuits complexes pour mesurer les caractéristiques des signaux entrants.

Les principales caractéristiques qui peuvent être mesurées sont la fréquence de répétition des impulsions et le modèle de balayage des signaux entrants. Si la fréquence de répétition des impulsions et le modèle de balayage correspondent à ceux de la menace sur cette bande, la [lumière] (#band-indications-indiagolfecho) correspondante est déclenchée sur le panneau d'affichage.

#### Générateur audio

Les impulsions des amplificateurs sont directement traduites en audio. Cela peut entraîner un environnement bruyant lorsque de nombreux radars sont en fonctionnement, bien que la [désactivation de la bande x](#x-band-disable-button) et la [défaite aaa](#aaa-defeat) puissent toutes deux être utilisées pour réduire les indications de menace indésirables et leur audio respectif.

## Commandes et indicateurs

L'ensemble RHAW comprend trois parties principales. L'indicateur d'azimut qui affiche les signaux entrants et leurs directions, ainsi que le commutateur de désactivation de la bande X et le panneau d'affichage qui sont tous deux utilisés pour contrôler

![rhaw-set-labeled](./img/rhaw-set-labels.png)

1. [Indicateur d'azimut](#azimuth-indicator)
2. [Bouton de désactivation de la bande X](#x-band-disable-button)
3. [Panneau d'affichage](#billboard)

### Panneau d'affichage

![Image de contrôle du panneau d'affichage](./img/billboard.png)

1. [Indication/Bouton SAM Inde](#band-indications-indiagolfecho)
2. [Indication IA](#band-indications-indiagolfecho)
3. [Indication/Bouton Golf SAM](#band-indications-indiagolfecho)
4. [Indication/bouton Golf SAM Lobe-on-receive-only (LORO)](#band-indications-indiagolfecho)
5. [Indication/bouton Echo SAM](#band-indications-indiagolfecho)
6. [Indication/Bouton AAA/AI](#band-indications-indiagolfecho)
7. [Indication de lancement](#launch)
8. [Indication d'activité](#actpwr-activitypower)
9. [Indication/bouton de défaite AAA](#aaa-defeat)
10. [Indication d'alimentation/Bouton](#power)
11. [Bouton de volume audio](#audio-knob)
12. [Bouton de variateur de luminosité](#brightness-knob)

#### POUVOIR

Ce bouton allume le système, le préchauffage du système peut prendre environ 10 à 30 secondes (vérifier).

#### Indications de bande (Inde, Golf, Echo)

Les indications de menace sont divisées en trois bandes India, Golf et Echo. Pour chaque bande, il y a deux boutons et sur chaque bouton il y a jusqu'à deux lumières.

Les boutons/voyants du haut correspondent aux radars connus des systèmes de missiles sol-air, les boutons/voyants du bas correspondent à d'autres menaces dans la même bande.

Chaque menace indiquée pour chaque bande est répertoriée ci-dessous.

| Groupe          | Bouton supérieur | Bouton inférieur | Menace du bouton supérieur   | Menaces du bouton inférieur |
|---------------|--------------|--------------|-----------------------|----------------------|
| **Je** (Inde) | JE SAM        | IA           | Coup bas (SA-3)       | AI WX (intercepteurs tous temps – avec radars à balayage conique) et AI DAY (intercepteurs de jour avec radars à portée uniquement) |
| **G** (Golf)  | G-SAM        | G LORO       | Fan-Chanson E (SA-2)     | Fan-Song E (SA-2) en mode lobe en réception uniquement (LORO) |
| **E** (Écho)  | E SAM        | AAA/IA       | Chanson de fan (AD) (SA-2) | Intercepteurs aériens d'artillerie anti-aérienne ou à bande Echo uniquement |

Pour une description plus détaillée de chaque indicateur de menace, voir ci-dessous.

##### Boutons/Indicateurs supérieurs

Les indications de menace du système de missiles sol-air se présentent sous la forme de deux voyants sur le bouton, un en haut et un en bas. Le voyant supérieur indique une fréquence de répétition d'impulsions élevée pour la menace donnée et le voyant inférieur indique une fréquence de répétition d'impulsions faible.

En règle générale, une faible fréquence de répétition des impulsions est utilisée pour l'acquisition ou le suivi à longue portée et une fréquence de répétition d'impulsions élevée est utilisée pour le ciblage et le lancement à plus courte portée.

Chaque indication de menace s'affiche lorsqu'un radar est détecté qui correspond à la fréquence de répétition des impulsions du réglage haut ou bas de la menace. Cependant, d'autres radars peuvent déclencher par erreur la détection de menace si leur fréquence de répétition d'impulsion coïncide avec les fréquences de fil ou si le système est submergé par de nombreux signaux simultanés.

En appuyant sur ces boutons, vous lancez leur [test intégré] correspondant (#built-in-tests-bit).

!!! note
    Actuellement, le Fan-Song de la bande Echo n'est pas présent dans le jeu, car les indications de menace de la bande Echo sont erronées.

##### Boutons/Indicateurs inférieurs

###### AAA/AI (artillerie antiaérienne/interception aérienne)

Ce voyant s'allume lorsque la moitié inférieure de la bande Echo est déclenchée, cela indique généralement des radars de contrôle de tir d'artillerie anti-aérienne ou des radars d'interception aéroportés à bande Echo.

###### G LORO

Habituellement, le Fan-Song balaie son faisceau de gauche à droite 16 fois par seconde, produisant le son caractéristique du serpent à sonnette. Cependant, cela peut être facilement suivi et émulé par un équipement de brouillage afin de confondre les circuits de suivi. Pour contrer cela, l'opérateur Fan-Song peut passer à Lobe-On-Receive-Only qui change le faisceau pour qu'il soit stationnaire et scanne uniquement dans les antennes de réception. De cette façon, il est plus difficile pour les brouilleurs de suivre le mouvement de balayage du Fan-Song.

Ce voyant s'allume lorsque le Fan-Song E (Golf Band Fan-Song) passe en mode Lobe-On-Receive-Only, ce qui fait passer le son du son caractéristique du serpent à sonnette à une tonalité constante.

En appuyant sur ce bouton, vous démarrez le [Test intégré de Golf Band LORO] (#built-in-tests-bit).

###### IA (interception aérienne)

Cela indique si un radar d'interception aéroporté de la bande indienne a été détecté et quel type le système a classé.

| Indicateur  | Description |
|------------|-------------|
| **IA WX**  | S’allume lorsqu’un radar à balayage conique est détecté. Ceci indique généralement un chasseur tous temps. |
| **JOURNÉE DE L'IA** | Représente les chasseurs de jour équipés de radars à portée uniquement (comme le F-100D). L'équipement RHAW a été créé avant l'utilisation généralisée de radars monopulses plus avancés qui ne déclenchent pas les circuits de détection AI WX, ce qui les a conduits à être classés à tort comme chasseurs AI DAY, malgré la présence de radars plus avancés capables d'intercepter tous les temps. |

#### ACT/PWR (Activité/Puissance)

Cela indique s'il y a des signaux de bande Charlie détectés qui correspondent à ceux d'un Fan-Song émettant des signaux de guidage. S'il y a une chanson de ventilateur corrélée sur [Affichage d'azimut] (#azimuth-indicator), le signal corrélé clignotera à 3 Hz avec le [voyant de lancement] (#launch) allumé.

#### LANCEMENT

L'indication de lancement est donnée lorsque l'activité de lancement et de guidage de la bande Charlie est détectée

#### Défaite AAA

Ce bouton masque la moitié inférieure de la bande Echo, désactivant ainsi les radars d'artillerie anti-aérienne que l'on trouve couramment dans cette bande. Avec un environnement de signal suffisamment dense, ce circuit peut être déclenché, ce qui entraîne l'affichage de signaux AAA malgré l'activation de l'AAA Defeat.

Le voyant correspondant sur le bouton indique si AAA Defeat est demandé.

#### Bouton audio

Règle le volume de l'audio produit par l'AN/APR-25.

#### Bouton de luminosité

Règle la luminosité des indications sur le panneau d'affichage.

### Bouton de désactivation de la bande X

Déclenche le circuit de désactivation de la bande indienne, supprimant toutes les indications de la bande indienne de l'oscilloscope et de l'audio, et allumant le voyant du bouton. Appuyez sur le bouton pour réactiver le circuit et éteindre le voyant du bouton.

### Indicateur d'azimut

L'indicateur d'azimut est l'affichage principal de l'AN/APR-25, et il indique les différentes menaces qui pèsent sur le pilote, leur force relative et leur azimut entrant.

![Image de l'affichage de l'azimut](./img/azimuth-indicator.png)

L'indicateur d'azimut affiche les menaces sous forme de lignes sur leur azimut relatif par rapport à l'avion. Il existe trois types de lignes correspondant aux trois types de bandes.

| Groupe          | Type de ligne |
|---------------|-----------|
| **Je** (Inde) | En pointillés    |
| **G** (Golf)  | Pointé    |
| **E** (Écho)  | Solide     |

Le haut de l'indicateur correspond aux signaux frontaux reçus de l'avant de l'avion. Les autres directions gauche, droite, bas représentent respectivement gauche, droite et arrière. Il y a des marques gravées à intervalles de 15° pour donner au pilote une indication de l'azimut relatif exact de chaque signal entrant.

La longueur d'une ligne correspond à la puissance reçue de l'émetteur sur une échelle logarithmique. Les émetteurs de plus grande puissance produisent des stroboscopes plus longs qui s'étendent jusqu'aux bords de l'écran. La puissance reçue dépend à la fois de la puissance de transmission et de la distance.

Contrairement aux équipements modernes, l'AN/APR-25 n'a pas de mémoire des signaux entrants et les signaux ne sont donc affichés que lorsqu'ils sont activement reçus via les antennes. Lorsqu'un signal est reçu, l'audio correspondant peut être entendu.

## Tests intégrés (BIT)

L'AN/APR-25 dispose d'une série de tests intégrés pour vérifier à tout moment le bon fonctionnement de l'équipement. Ces tests vérifient tout l'équipement à l'exception des antennes. Pour ce faire, il injecte des signaux dans les préamplificateurs.

### Groupe indien

Appuyer puis relâcher le bouton I SAM démarre le test India Band. Le test commence par un court signal PRF India bas, puis un signal PRF haut pendant 3 secondes suivi d'un court signal PRF India bas. Pour chaque partie du test, l'indication **G SAM** correspondante (**HI** ou **LO**) doit s'allumer sur le panneau d'affichage.

Pendant le test, un X clignotant ou solide composé de lignes pointillées (et le son qui l'accompagne) s'affiche, les 4 bras du X étant de même longueur et atteignant au moins le troisième anneau de l'écran, comme indiqué ci-dessous :

![Photo du test en Inde](./img/i-bit.png)

### Groupe de golf

Le test Golf Band comporte deux modes différents, un pour le fonctionnement normal du Fan-Song E et un pour le fonctionnement lobe-on-receive-only (LORO) du Fan-Song E.

#### Test G-SAM

Appuyer puis relâcher le bouton **G SAM** démarre le test Golf Band. Le test commence par un court signal PRF Golf faible, puis un signal PRF élevé pendant 3 secondes suivi d'un court signal PRF Golf faible. Pour chaque partie du test, l'indication **G SAM** correspondante (**HI** ou **LO**) doit s'allumer sur le panneau d'affichage.

Pendant le test, un X clignotant composé de points en forme de perle (et le son du serpent à sonnette qui l'accompagne) doit être affiché, les 4 bras du X étant de même longueur et atteignant au moins le troisième anneau de l'écran, comme indiqué ci-dessous.

![Photo du test de golf](./img/g-bit.png)

#### Test G LORO

Appuyer puis relâcher le bouton **G LORO** démarre le test Golf Band. Le test affichera un signal PRF Golf Band solide et élevé (et un son d'accompagnement constant) pendant environ 3 secondes. Pour chaque partie du test, l'indication **G SAM** correspondante (**HI**) doit s'allumer sur le panneau d'affichage.

Pendant le test, un X solide composé de points en forme de perle (et le son du serpent à sonnette qui l'accompagne) doit être affiché, les 4 bras du X étant de longueur égale atteignant au moins jusqu'au troisième anneau, comme pour le [Test G SAM] (#g-sam-test).

### Bande d'écho

Appuyer puis relâcher le bouton E SAM démarre le test Echo Band. Le test commence par un court signal d'écho PRF faible, puis un signal d'écho PRF élevé pendant 3 secondes, suivi d'un signal d'écho PRF faible pendant 3 secondes. Cependant, ce signal doit être masqué par le circuit de défaite AAA qui est automatiquement activé pendant ce test. Pour chaque partie du test, l'indication **E SAM** correspondante (**HI** ou **LO**) doit s'allumer sur le panneau d'affichage.

Au cours de la première partie du test, un X clignotant composé de lignes pleines (et le son du serpent à sonnette qui l'accompagne) doit être affiché, les 4 bras du X étant de même longueur et atteignant au moins le troisième anneau de l'écran, comme indiqué ci-dessous. Pendant la deuxième partie du test, aucune indication ne doit être présente sur l'indicateur d'azimut et aucun son ne doit être entendu, cependant l'indication **E SAM LO** doit s'allumer.

![Photo du test de golf](./img/e-bit.png)