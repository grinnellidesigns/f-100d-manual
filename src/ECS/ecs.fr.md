# Système de contrôle environnemental
![Image du système ECS](./img/ecs_diagram.png)

## Introduction

Le système de contrôle environnemental est tout ce qui maintient la cabine confortable et pressurisée pour le pilote.

## Contrôles
![Image du panneau ECS](./img/ecs_panel.png)

1. [Sélecteur de pression du cockpit](#cockpit-pressure-selector-switch)
2. [Levier de débit d'air de la console](#console-airflow-lever)
3. [Levier de dégivrage de l'auvent et du pare-brise](#canopy-and-windshield-defrost-lever)
4. [Sélecteur d'antenne IFF](#iff-antenna-selector-switch)
5. [Rhéostat de température du cockpit](#cockpit-temperature-rheostat)
6. [Interrupteur principal de température du cockpit](#cockpit-temperature-master-switch)
7. _Bouton de volume de la balise de marquage (INOP)_

### Sélecteur de pression dans le cockpit

Le sélecteur de pression du cockpit a quatre positions :

| Sélection | Description |
|-----------|-------------|
| **RAM AIR ACTIVÉ** | La vanne d'arrêt du système principal se ferme et la vanne d'air dynamique d'urgence s'ouvre pour admettre l'air dynamique dans le cockpit. |
| **DÉSACTIVÉ** | Ferme la vanne d'arrêt du système principal, la vanne d'air dynamique d'urgence et la vanne de décharge du cockpit, et le régulateur de pression du cockpit est réglé à 2,75 psi. |
| **2,75 PSI** | La vanne d'arrêt du système principal s'ouvre pour diriger l'air vers le cockpit, et les sorties d'air et la vanne d'air dynamique d'urgence se ferment. |
| **5,00 psi** | La vanne d'arrêt du système principal s'ouvre pour diriger l'air vers le cockpit, et les sorties d'air et la vanne d'air dynamique d'urgence se ferment. |

!!! note
    La position **OFF** évite une décompression rapide du cockpit.

!!! caution
    La sélection de ***RAM AIR ON** dépressurise le cockpit.

### Calendrier de pression dans le cockpit

Cette figure décrit le fonctionnement de la planification de la pression :

![Image programmée](./img/schedule.png)

### Levier de débit d'air de la console

Contrôle le flux d'air vers les sorties le long de la console et vers la sortie derrière le siège. Déplacer le levier vers l'avant augmente le débit d'air et le déplacer vers l'arrière le réduit.

### Levier de dégivrage de l'auvent et du pare-brise

Semblable au [Levier de débit d'air de la console] (#console-airflow-lever), ce levier contrôle la distribution de la chaleur vers la verrière et le pare-brise, empêchant ainsi la formation de buée et de condensation sur la verrière pendant la descente.

### Sélecteur d'antenne IFF

Le sélecteur d'antenne IFF a trois positions :

| Sélection  | Description |
|------------|-------------|
| **HAUT**    | Utilisez uniquement l'antenne supérieure. |
| **LES DEUX**   | Utilisez les antennes supérieure et inférieure. |
| **BAS** | Utilisez uniquement l'antenne inférieure. |

_Voir aussi : [ARN-72 Tacan](../ARN-72%20TACAN/tacan.md)_

### Rhéostat de température du cockpit

Modifiez la température du cockpit lorsque le [Cockpit Temperature Master Switch] (#cockpit-temperature-master-switch) est réglé sur la position **AUTO**. Il dispose également d'une petite plage qui contrôle la température de la combinaison de pilote.

### Interrupteur principal de température du cockpit

L'interrupteur principal de température du cockpit a quatre positions. Le réglage de cet interrupteur sur n'importe quelle position sauf **OFF** contrôle la température du flux d'air du cockpit.

| Sélection  | Description |
|------------|-------------|
| **AUTO**   | Utilisé dans les radars Doppler à impulsions modernes. Les fréquences de répétition des impulsions moyennes sont modulées, ce qui signifie que le PRF varie rapidement, leur donnant des modèles complexes. Cela peut donner des tonalités numériques complexes à partir du générateur audio de l'AN/APR-25. |
| **DÉSACTIVÉ**    | Éteindra le système de contrôle de la température. |
| **FROID**   | Réglera la température du cockpit pour qu'elle refroidisse. |
| **CHAUD**    | Réglera la température du cockpit à chaud. |

## Indicateur d'altitude-pression dans le cockpit

Indique la pression du cockpit.

![Manomètre alternatif de pression du cockpit](./img/cockpit_press.png)