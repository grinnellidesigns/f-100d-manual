# Rechercher le système de silence

## Introduction

Le système de recherche de silence permet soit le fonctionnement normal de la [radio de commande AN/ARC-34](../ARC-34%20Command%20Radio/command-radio.md), soit le décodage et le codage des communications vocales via la radio de commande. La capacité de décodage et de codage empêche l’interception des messages lorsque cela est nécessaire. Le système est alimenté par le bus principal.

## Contrôles

![rechercher l'image du silence](./img/seek_silence.png) <!-- REPLACE THIS IMAGE -->

1. [Interrupteur d'alimentation](#power-switch)
2. [Commutateur de fonction](#function-switch)
3. [Voyants de fonction](#function-indicator-lights)
4. [Commutateur de retransmission](#retransmit-switch)
5. [Commutateur de remise à zéro](#zeroize-switch)

### Interrupteur d'alimentation

Lorsque l'interrupteur d'alimentation est déplacé de **OFF** à **ON**, l'alimentation est appliquée au système de recherche de silence. La radio de commande peut être utilisée de manière normale avec l'interrupteur d'alimentation sur **OFF**.

### Commutateur de fonction

Le commutateur de fonction contrôle le décodage et le codage de la réception et de la transmission vocales des commandes radio.

| Sélection        | Description |
|------------------|-------------|
| **PLAINE**        | Le fonctionnement normal de la radio de commande est disponible, et seules la réception et la transmission non codées sont possibles. |
| **C/RAD1**      | Le système décode les communications vocales entrantes et code les communications vocales sortantes via la radio de commande. |
| _C/RAD2 (INOP)_ | Inutilisable dans ce F-100D simulé. Une butée mécanique empêche le déplacement de l'interrupteur dans cette position. |

### Voyants de fonction

Trois voyants à intensité variable de type appuyer pour tester indiquent la position sélectionnée par le [commutateur de fonction](#function-switch). Lorsque le système est sous tension, le voyant gauche (vert) s'allume lorsque la position **C/RAD 1** du commutateur de fonction est sélectionnée ; le voyant central (orange) s'allume lorsque la position **PLAIN** du commutateur de fonction est sélectionnée.

*Le feu droit (vert) est inopérant sur ces avions.*

### Commutateur de retransmission

Cet interrupteur n'a aucune fonction dans ces avions. L'interrupteur doit toujours être vers l'arrière (**OFF**), quelle que soit la position de l'interrupteur de fonction.

### Mettre à zéro le commutateur

L'interrupteur de mise à zéro est protégé dans la position normale arrière **OFF**. S'il devient nécessaire d'éjecter, la protection doit être relevée et l'interrupteur maintenu momentanément en position avant **ON**. Cela remet à zéro les codes définis au sol dans le système de recherche de silence.

## Fonctionnement normal

1. Allumez la [radio de commande](../ARC-34%20Command%20Radio/command-radio.md) **ON**. (Voir Fonctionnement normal de la radio de commande.)
2. Déplacez l'[interrupteur d'alimentation](#power-switch) sur **ON**.
3. Tournez le [commutateur de fonction](#function-switch) sur **PLAIN** et établissez les communications via les procédures de transmission normales lorsque cela est possible.
4. Tournez le [commutateur de fonction](#function-switch) sur **C/RAD 1** et écoutez une tonalité constante et ininterrompue dans le casque pendant environ 2 secondes, suivie d'une tonalité brisée à double hauteur. Si une tonalité continue et prolongée est audible, cela indique un réglage incorrect du code ou un dysfonctionnement de l'équipement, et le [commutateur de fonction](#function-switch) doit être tourné sur **PLAIN** et le [commutateur d'alimentation](#power-switch) doit être tourné sur **OFF**.
5. Appuyez et maintenez le bouton du micro pendant plusieurs secondes, puis relâchez. La tonalité brisée à double hauteur devrait s'arrêter et aucun autre son n'est entendu dans les écouteurs. Si la tonalité interrompue persiste, appuyez à nouveau sur le bouton du micro et maintenez-le enfoncé pendant plusieurs secondes. Si la tonalité interrompue persiste après trois tentatives pour l'effacer, déplacez le [commutateur de fonction](#function-switch) sur **PLAIN** et le [commutateur d'alimentation](#power-switch) sur **OFF**.
6. Appuyez et maintenez le bouton du micro. Attendez ½ à 2 secondes pour entendre un seul bip dans les écouteurs. Si aucun bip n'est entendu, appuyez à nouveau sur le bouton du micro et attendez ½ à 2 secondes. Si le bip n'est toujours pas entendu, déplacez [l'interrupteur d'alimentation](#power-switch) sur **OFF**, puis sur **ON**, et répétez les étapes 5 et 6. Si cela ne parvient pas à produire le bip, tournez [l'interrupteur de fonction](#function-switch) sur **PLAIN** et [l'interrupteur d'alimentation](#power-switch) sur **OFF**.
7. Lorsque le bip sonore est audible, commencez la transmission.
