# Boussole radio AN/ARN-6

## Introduction

Le Radio Compass ARN-6 est un récepteur de radiogoniomètre automatique (ADF) qui couvre une plage de fréquences de 100 à 1 750 kHz, séparée en quatre bandes. Il peut être utilisé comme un compas radio pour la navigation ou utilisé pour surveiller les stations pour les bulletins météorologiques et la réception des communications générales.

Le système utilise un oscillateur de fréquence de battement (BFO) en modes antenne et boucle. Pour la conversion du signal :

- La bande 1 utilise une fréquence intermédiaire fixe de 455,9 kHz
- Les bandes 2 à 4 fonctionnent à 143,4 kHz

Lorsque l'équipement est en mode boussole, un oscillateur de tonalité de 900 Hz module le signal CW lorsqu'il passe à travers les étages IF, permettant une capacité de radiogoniométrie précise.

## Contrôles

![Boussole radio AN/ARN-6](./img/radio-compass.png) <!-- REPLACE THIS IMAGE -->

1. [Commutateur CW/Voix](#cwvoice-switch)
2. [Sélecteur de bande](#band-selector-switch)
3. [Commutateur de boucle L-R](#loop-l-r-switch)
4. [Bouton de contrôle du volume](#volume-control-knob)
5. [Manivelle Tunig](#tuning-crank)
6. [Commutateur de fonction](#function-switch)

### Commutateur CW/Voix

Lorsque le commutateur Voice-CW est réglé sur la position **CW**, un oscillateur de fréquence de battement est activé dans les positions **ANT** et **LOOP**. Avec cet oscillateur, la tonalité modulée peut être réglée avec la manivelle de réglage.

### Sélecteur de bande

Ce commutateur à quatre positions règle la bande de fréquence de la station souhaitée.

Les utilisations typiques de chaque bande sont :

| Sélection        | Description |
|------------------|-------------|
| **100-200 kHz**  | Balises marines |
| **200-410 kHz**  | Portée et balises radio |
| **410-850 kHz**  | Balises radio de portée et de la Marine |
| **850-1 750 kHz** | Diffusions commerciales |

### Commutateur de boucle L-R

Ce commutateur fonctionne uniquement lorsque le commutateur de fonction est en position **LOOP**. Une commande de rhéostat permet au pointeur de roulement de tourner à des vitesses variables.

### Bouton de contrôle du volume

Cette commande régule le volume du signal vers le casque en position **COMP**. Dans les positions **ANT** et **LOOP**, il contrôle la sensibilité de l'ensemble.

### Manivelle de réglage

La manivelle de réglage est utilisée pour régler la station souhaitée pour une puissance de signal maximale.

### Commutateur de fonction

Cet interrupteur à cinq positions contrôle le fonctionnement du compas radio.

| Sélection     | Description |
|---------------|-------------|
| **DÉSACTIVÉ**       | Le récepteur est inopérant. |
| **COMP/ADF**  | Les antennes de détection et de boucle ainsi que les circuits de contrôle de boucle sont sélectionnés et la boucle tourne automatiquement de manière à ce que le pointeur de relèvement pointe vers la station. |
| **FOURMI**       | L'antenne de détection est sélectionnée et le compas radio est utilisé comme récepteur basse fréquence. |
| **BOUCLE**      | L'antenne cadre est sélectionnée. La réception du signal dépend de la position de la boucle par rapport à la station. |
| **SUITE**      | _Inopérant dans ce F-100D simulé._ |

!!! note
    **COMP/ADF** est la seule position qui permet un contrôle automatique du volume pour maintenir un niveau de volume uniforme dans le casque.

## Fonctionnement normal

1. **Vérification en amont**
—Assurez-vous que le **commutateur de fonction** est réglé sur **OFF** avant de mettre sous tension.
—Vérifiez que les cartes de fréquence et les listes de stations sont disponibles pour la zone d'opération.

2. **Allumer**
—Réglez le **Commutateur de fonction** sur **COMP/ADF**.
—Ajustez le **bouton de contrôle du volume** pour un niveau audio confortable du casque.

3. **Réglage**
—Utilisez le **Commutateur de sélection de bande** pour sélectionner la bande de fréquence appropriée pour la station souhaitée.
—Tournez la **manivelle de réglage** jusqu'à ce que la force maximale du signal soit obtenue.
—Si vous recevez une station CW, placez le **commutateur CW/Voice** sur **CW** et ajustez avec la manivelle pour obtenir la meilleure tonalité.

4. **Recherche de direction**
—Avec le **Commutateur de fonction** dans **COMP/ADF**, l'antenne cadre tourne automatiquement et le pointeur de relèvement indique la direction de la station.
—Pour un fonctionnement en boucle manuel, réglez le **Commutateur de fonction** sur **LOOP** et utilisez le **Commutateur Loop L-R** pour faire pivoter l'antenne cadre.

5. **Surveillance**
—Pour utiliser le compas radio uniquement comme récepteur, réglez le **Commutateur de fonction** sur **ANT**.
—Ajustez le **bouton de contrôle du volume** selon les besoins pour une réception claire.

6. **Fermer**
—Remettez le **commutateur de fonction** sur **OFF** après utilisation.

## Comment fonctionne un oscillateur de fréquence de battement

Un oscillateur de fréquence de battement (BFO) est utilisé dans les récepteurs radio pour rendre audibles les signaux à ondes continues (CW), permettant à l'opérateur de régler avec précision le récepteur à l'aide de la tonalité produite. Lorsqu'un signal CW est reçu, il s'agit d'une porteuse stable sans modulation. À lui seul, ce signal ne produit aucun son dans le casque. Le BFO résout ce problème en introduisant une fréquence générée localement qui est légèrement décalée par rapport à la porteuse reçue.

### Fréquences de battement

Lorsque la fréquence porteuse entrante et la fréquence BFO sont combinées, la différence entre elles produit une tonalité audible dans la plage audio (généralement 400-1 000 Hz).

Par exemple, si le signal de la station est à 300,0 kHz et que le BFO est réglé à 300,9 kHz, la différence est de 900 Hz, ce qui est audible sous forme de tonalité continue.

### Réglage fin du rythme zéro

En ajustant soigneusement la manivelle de réglage, l'opérateur rapproche la fréquence du récepteur de la fréquence exacte de la porteuse de la station. À mesure que la différence entre les deux signaux diminue, la tonalité diminue. Lorsque le signal reçu et la fréquence BFO deviennent exactement égaux, la tonalité disparaît. C'est ce qu'on appelle le "zéro battement".

Le battement nul permet un réglage précis de la fréquence porteuse exacte de la station, ce qui est essentiel pour une radiogoniométrie précise et la clarté du signal.