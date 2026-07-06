# Pie-grièche AGM-45

## Introduction

L'AGM-45 Shrike est un missile air-sol guidé anti-rayonnement, introduit en 1965 et largement utilisé pendant la guerre du Vietnam.

Le F-100F pourrait transporter un missile Shrike sur chacun des pylônes intérieurs. Le F-100D n’a jamais strictement transporté le missile Shrike. Cependant, le pylône utilisé existait sur les deux modèles et l'avionique entre les deux est très similaire, et permettrait les mêmes modifications, justifiant sa présence dans le jeu.

Le Shrike est passif et se guide sur les signaux émis par les radars de surface ennemis. Cela en fait une arme idéale pour supprimer et détruire les radars de missiles sol-air et anti-aériens. L'antenne à l'intérieur du Shrike est fixe, mais fournit des informations de direction aux signaux radar entrants permettant au missile de se guider vers une cible à condition que le radar se trouve dans le champ de vision de l'autodirecteur.

## Paramètres de la pie-grièche

### Chercheur de radio

Le chercheur radio du Shrike détermine quels radars peuvent être suivis. Des autodirecteurs radio à bande étroite ont été utilisés avec des systèmes radar spécifiques à une cible. Ces chercheurs pourraient être échangés pour attaquer la menace spécifique dictée par la mission. L'unité de guidage RF peut être modifiée sur l'AGM-45 dans les paramètres de mission et dans le menu de réarmement de l'arme en cliquant sur le triangle orange dans le coin supérieur gauche de l'icône Shrike et en sélectionnant une unité de guidage.

![Écran de sélection du chercheur](./img/shrike_seeker_select.png)

### Contournement de plongée

En plus des chercheurs de radio. le Shrike dispose de deux modes de guidage qui affectent la trajectoire du missile : loft et dive bypass (attaque directe). Ces paramètres peuvent également être trouvés dans le même menu que les options de Guidance Seeker.

![Écran loft chercheur](./img/shrike_attack_mode.png)

#### Loft—Dive Bypass (désactivé)

Au lancement, le guidage est initialement désactivé. Si le missile monte au-dessus de 18 000 pieds (barométrique), puis descend en dessous de 18 000 pieds, l'autodirecteur et le guidage seront alors activés. À ce stade, le missile suit tout ce qui se trouve dans son champ de vision et dans la bande autodirectrice.

Ce mode est destiné à l'impasse, mais sans assistance informatique supplémentaire (par exemple, ce qui a été ajouté plus tard dans le F-4D), ce mode est difficile à atteindre avec précision.

#### Dive Bypass—Dive Bypass (activé)

En raison de la difficulté susmentionnée, une solution a été développée pour améliorer la précision du Shrike sur le terrain. La modification du contournement de plongée permet le chercheur radio et le guidage au lancement, sacrifiant la portée pour une précision améliorée.

Les pies-grièches tirées avec ce réglage guideront immédiatement. Pour de meilleurs résultats, utilisez les [aiguilles de cap et de pente de descente](#course-and-glideslope-needles) pour pointer le missile aussi près que possible de l'élévation et de l'azimut de la cible.

### Fumée de marqueur

De la fumée de marquage peut être ajoutée au Shrike pour aider à localiser les radars de surface en cas de quasi-accident. Lors de l'impact, la pie-grièche brûle une charge de phosphore blanc, produisant une colonne de fumée au point d'impact. Ce paramètre se trouve dans le même menu où se trouvent les modes de guidage et d'attaque intitulés "WP Marker Charge".

![option de fumée de marqueur](./img/shrike_white_smoke.png)

## Contrôles et indications

### Audio

Le son de la pie-grièche est généré à partir d’impulsions de rayonnement entrantes. similaire à la façon dont le [Récepteur de référence et d'avertissement radar](../RHAW/RHAW.md#audio-generator) génère l'audio.

Tout audio indique des signaux entrants détectés par le chercheur radio. Ces signaux sont utilisés par le système de guidage pour orienter le missile sur la source du signal.

### Aiguilles de parcours et de descente

Lorsqu'une Pie-grièche est alimentée et sélectionnée, les [aiguilles de cap et de pente de descente](#course-and-glideslope-needles) indiqueront l'erreur de tangage et de lacet entre l'axe de visée du chercheur et le rayonnement entrant détecté. Cela permet au pilote de diriger l'avion vers la source de rayonnement et, en gardant les barres de déviations verticales et horizontales centrées, vous êtes pointé vers le signal détecté.

![aiguilles de parcours de pie-grièche](./img/shrike_course_gauge.png)

### Bouton de volume du Sidewinder

Le bouton de volume sidewinder sur le panneau de commande du missile ajuste le son Shrike dans le casque.

## Opération

### Configuration et tir

1. [Mode Vue]()—Manuel
2. [Mode Armement]()— Pie-grièche
3. [Bras de pylône]() : armé pour chaque pylône

Une fois le Shrike installé, pointez l'avion vers une source de rayonnement pour entendre le rayonnement à travers le Shrike, indiquant une bonne trajectoire. Les [aiguilles](#course-and-glideslope-needles) s'activeront et fourniront des conseils supplémentaires vers la source.

Pour tirer, appuyez sur le bouton de déverrouillage de l'arme sur le manche de vol jusqu'à ce que le missile termine sa séquence de lancement.
