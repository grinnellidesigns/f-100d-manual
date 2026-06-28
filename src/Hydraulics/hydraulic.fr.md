# Système hydraulique

## Introduction

L'avion dispose de trois systèmes hydrauliques distincts de type à pression constante : utilitaire et deux systèmes de commandes de vol. Chaque système est pressurisé individuellement par une pompe hydraulique entraînée par moteur jusqu'à 3 000 psi.

En cas de panne de la pompe entraînée par le moteur, le système de commande de vol secondaire peut être entraîné par une [Ram Air Turbine] (#ram-air-turbine-rat) (RAT) déployable.

## Système utilitaire

Ce système dispose d'un réservoir de 2,7 gallons pressurisé par une pompe moteur. Il fournit de l'énergie hydraulique aux éléments suivants :

- Gouvernail
- Train d'atterrissage et portes
- Freins de roue
- Volets d'aile
- Direction de la roue avant
- Frein de vitesse
- Système de contrôle de vol automatique (AFCS)
- Pistolet et porte de purge
- [Turbine à air dynamique](#ram-air-turbine-rat) Porte

Si la pression du système 1 est trop faible pour alimenter le gouvernail, une vanne automatique alimente le gouvernail à partir du système de commandes de vol numéro 2.

### Accumulateur à rabat d'urgence

Si le système hydraulique utilitaire ou la commande des volets tombe en panne, les volets peuvent être abaissés pour l'atterrissage à l'aide du [interrupteur de volets d'urgence] (#emergency-flap-switch).

!!! warning
    L'accumulateur de volets d'urgence dispose de suffisamment d'énergie stockée pour abaisser les volets une seule fois.

### Accumulateur de roue avant d'urgence

En cas de panne du système hydraulique utilitaire, le [déverrouillage d'urgence] (#emergency-gear-release) peut faire tomber le train principal par gravité. À lui seul, le train avant ne peut pas être largué par gravité, c'est pourquoi un accumulateur de secours est fourni pour faire tomber le train avant.

## Systèmes de commandes de vol 1 et 2

Deux systèmes hydrauliques indépendants et fonctionnant simultanément (1 et 2) actionnent les gouvernes de vol principales. Chaque système est alimenté par sa propre pompe moteur, fournissant la moitié de la demande de puissance des gouvernes.

La défaillance d’un système n’affecte pas l’autre. En cas de panne de moteur gelé ou de pompe moteur, la pression hydraulique numéro 2 peut être maintenue en déployant la [turbine RAM Air] (#ram-air-turbine-rat).

En cas de panne du [système utilitaire](#utility-system), le système numéro 2 alimente également le gouvernail.

Les éléments suivants sont alimentés par ces systèmes :

| Article                                 | Système hydraulique |
|--------------------------------------|------------------|
| Ailerons                             | 1 et 2 |
| Stabilisateur horizontal                | 1 et 2 |
| Garniture du stabilisateur horizontal           | 2 |
| Gouvernail (en cas de panne de service)  | 2 |

### Turbine à air dynamique (RAT)

Cela agit comme une pompe hydraulique de secours pour le système numéro 2. Si le régime moteur descend en dessous de 40 %, l'interrupteur centrifuge déclenche automatiquement le déploiement du RAT, sauf s'il y a du poids sur la roue du train avant. Le RAT peut également être déployé manuellement à l'aide du [levier](#ram-air-turbine-door-lever).

Si la porte du RAT est ouverte, une tonalité d'avertissement sonore retentit dans le casque et le voyant du bouton de la poignée du train d'atterrissage s'allume.

Si la pompe n'est plus nécessaire, elle doit être arrêtée manuellement à l'aide du [levier](#ram-air-turbine-door-lever) dans le cockpit.

La pression hydraulique du service public est nécessaire pour ouvrir le RAT, mais en cas de panne hydraulique du service public, l'énergie stockée dans l'accumulateur d'urgence de la porte de la turbine Ram Air est utilisée.

Vous pouvez tester le déploiement de la turbine Air Ram en vol avec le [interrupteur de test du système hydraulique des commandes de vol] (#flight-control-hydraulic-system-test-switch).

### Pompe de frein de roue d'urgence

En cas de perte de pression hydraulique du service public, une pompe à entraînement électrique met sous pression les accumulateurs de frein de roue si la pression descend en dessous de 750 psi. Lorsque l'avion est froid et sombre, si vous appuyez sur le frein de roue, le bon fonctionnement de la pompe peut être vérifié en écoutant son bruit.

## Commandes et indicateurs

### Indicateur et bouton de pression hydraulique

![manomètre-hydraulique](./img/pressure-gauge.png)

Ce bouton et cette jauge indiquent la pression du système sélectionné.

### Levier de porte de turbine à air dynamique

Déploie la [Ram Air Turbine](#ram-air-turbine-rat) manuellement et s'actionne automatiquement si elle se déploie automatiquement.

### Commutateur de test du système hydraulique des commandes de vol

Maintenir cet interrupteur sur la position SYS 2 OFF ferme la vanne de test, supprimant ainsi la pression hydraulique de ce système. Le déplacement du commutateur sur RAM TURB ON SYS 2 OFF supprime la pression hydraulique du système numéro 2, fournit une puissance hydraulique utilitaire à la turbine à air dynamique et ouvre le [levier de porte de la turbine à air dynamique] (#ram-air-turbine-door-lever).

Après avoir testé le [levier](#ram-air-turbine-door-lever), fermez les portes de la turbine à air dynamique en déplaçant le levier vers l'arrière.

!!! note
    Un interrupteur de charge du train avant empêche la coupure du système numéro 2 au sol.

!!! caution
    Puisque ce test doit être effectué en vol : un pressostat empêche l'actionnement de la vanne de test si la pression du système numéro 1 est inférieure à 650 psi, évitant ainsi une perte de puissance des commandes de vol primaires.

### Commutateur de test hydraulique du gouvernail

Cet interrupteur à ressort teste si la vanne de sommation hydraulique fonctionne correctement pour l'actionneur de gouvernail, garantissant que même en cas de pression de service insuffisante, le gouvernail fonctionne en utilisant la pression du système numéro 2.

Maintenez l'interrupteur en position ALTERNATE RUDDER pour couper la pression de service, puis le gouvernail peut être déplacé. Confirmez que la pression du gouvernail augmente de la pression nominale jusqu'à 3 000 psi, correspondant à la pression du système hydraulique numéro 2.

### Levier de décharge de frein rapide d'urgence

En cas de panne du système hydraulique utilitaire avec le frein rapide en position ouverte, rétractez le frein rapide. Sans pression hydraulique, cela n'est pas possible. Le levier de déchargement libère toute pression hydraulique, permettant au frein rapide d'être rétracté par le flux d'air.

### Déverrouillage d'urgence

En cas de panne hydraulique, ce levier déploie le train d'atterrissage par gravité. Le train avant est déployé à l'aide de la pression hydraulique stockée dans l'[accumulateur d'urgence du train avant] (#emergency-nose-wheel-accumulator).

!!! warning
    Après utilisation de ce système, l'avion doit être réparé afin de réinitialiser ce système.

### Interrupteur de volet d'urgence

En cas de panne de la commande électrique des volets ou de panne hydraulique du service public, cet interrupteur déploie les volets en position BAS.

!!! warning
    Les réserves d'énergie [accumulateur de secours des volets](#emergency-flap-accumulator) ne suffisent qu'à abaisser les volets une seule fois.
