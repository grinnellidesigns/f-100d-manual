# Système AIMS IFF AN/APX-72

## Introduction

Le système AIMS, qui utilise un récepteur/émetteur (transpondeur) AN/APX-72, est utilisé pour identifier automatiquement l'avion en réponse à des interrogations codées. Selon le mode d'interrogation, la réponse est transmise en modes 1, 2, 3/A, 4, ou le rapport d'altitude de l'avion en mode C.

## Contrôles

![image iff](./img/iff.png) <!-- REPLACE THIS IMAGE -->

<!-- Master Switch Mode Selection Switch Test Switches code selectors mode 1 code selectors mode 3A mode 4 enable switch mode 4 code select switch -->

1. [Commutateur de fonction Mode 4](#mode-4-function-switch)
2. [Commutateur principal](#master-switch)
3. [Répondre Light](#reply-light)
4. [Test lumineux](#test-light)
5. [Commutateur d'indication du mode 4](#mode-4-indication-switch)
6. [Commutateurs de sélection de mode](#mode-selection-switches)
7. [Commutateur de test de rayonnement du moniteur](#monitor-radiation-test-switch)
8. [Sélecteur de mode 4](#mode-4-selector-switch)
9. [Commutateur d'identification](#identification-switch)
10. [Sélecteurs de code mode 1](#mode-1-code-selectors)
11. [Sélecteurs de code Mode 3/A](#mode-3a-code-selectors)

!!! note
    Les paramètres du panneau IFF n'ont aucun effet dans DCS, mais ils peuvent être exposés à des outils externes (par exemple, SRS).

### Commutateur de fonction Mode 4

Le sélecteur mode 4 CODE a les positions suivantes :
| Sélection     | Fonction
|---------------|---------
| **UN**         | CodeA
| **B**         | CodeB
| **PRISE**      | Fournir un moyen de conserver le code mode 4 pour un vol supplémentaire (à moins qu'il ne soit intentionnellement conservé, le code est automatiquement remis à zéro lorsque l'alimentation est coupée après l'atterrissage)
| **ZÉRO**      | Remise à zéro manuelle du code du mode 4

!!! note
    Le bouton de sélection du code mode 4 doit être retiré pour être mis à ZÉRO.

### Interrupteur principal

| Sélection     | Fonction |
|---------------|----------|
| **DÉSACTIVÉ**       | Système éteint |
| **STDBY**     | Allumé, en veille |
| **NORME**      | Sensibilité normale du récepteur |
| **FAIBLE**       | Faible sensibilité du récepteur |
| **ÉMER**      | Active le fonctionnement d'urgence |

!!! note
    Le bouton de l’interrupteur principal doit être tiré pour être déplacé vers la position **EMER**.

### Lumière de réponse

Lorsque l'émetteur-récepteur répond correctement à une interrogation de mode 4, le voyant RÉPONSE du mode 4 (vert) s'allume.

### Lampe d'essai

Un voyant vert **TEST** s'allume pour indiquer le bon fonctionnement de chaque mode testé pendant l'autotest ou lorsque le commutateur du moniteur (de rayonnement) est réglé sur la position **MON** (moniteur).

### Commutateur d'indication du mode 4

Le commutateur audio/lumière a été déplacé de **OFF** à **AUDIO** ou **LIGHT** (aucun signal audio fourni).

### Commutateurs de sélection de mode

Les commutateurs de sélection de mode M-1, M-2, M-3/A et M-C ont trois positions :

| Sélection                     | Description |
|-------------------------------|-------------|
| **TEST** (avant, momentané) | Lance un auto-test du mode (à condition que l'ensemble de test aéroporté soit installé) |
| **ON** (center)               |  |
| **OUT** (arrière)                 |  |

### Commutateur de test de rayonnement du moniteur

La position **RAD TEST** est utilisée par le personnel de maintenance lors des contrôles au sol. En vol, laissez cet interrupteur en position **OFF**.

### Sélecteur de mode 4

Le mode 4 est sélectionné en plaçant le commutateur d'activation du mode 4 de **OUT** à **ON**. Les codes du mode 4 sont prédéfinis dans l'ordinateur du mode 4 avant les missions via une clé de changeur de code.

### Commutateur d'identification

Le commutateur d'identification permet la transmission de signaux d'identification de position (I/P) en réponse aux interrogations en modes 1, 2 ou 3/A, pendant 15 à 30 secondes. La transmission des signaux I/P peut être réalisée de trois manières :

- Lorsque l'interrupteur est momentanément placé en position **IDENT**
- Lorsque le commutateur est en position **MIC** et que le bouton du microphone est momentanément enfoncé
- Lorsque le commutateur est en position **MIC** et que le bouton de tonalité radio de commande est enfoncé (pendant que la radio de commande est allumée)

### Sélecteurs de codes mode 1

Les deux sélecteurs de mode 1 offrent 32 sélections de codes possibles.

### Sélecteurs de codes Mode 3/A

Les quatre sélecteurs de mode 3/A permettent 4096 sélections de codes.

## Fonctionnement normal

_Informations à venir._