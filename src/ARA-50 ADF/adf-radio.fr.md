# Système de radiogoniométrie automatique AN/ARA-50

L'AN/ARA-50 est un système de radiogoniométrie automatique (ADF) et de télémétrie (TACAN) pour le référencement sur les signaux UHF.

Le système est alimenté par le bus principal, fonctionne dans la plage de fréquences du récepteur [radio de commande AN/ARC-34](../ARC-34%20Command%20Radio/command-radio.md) et est contrôlé via le [commutateur de fonction](../ARC-34%20Command%20Radio/command-radio.md#function-switch) sur le panneau de commande AN/ARC-34.

Le système indique automatiquement le relèvement des signaux UHF, permettant l'utilisation de ces fréquences pour le référencement et le rendez-vous, notamment :

- Stations au sol sélectionnées
- Avion équipé d'une radio UHF
- Autres sources équipées de radio UHF

Le système AN/ARA-5O peut être utilisé avec le système [AN/ARN-72 TACAN](../ARN-72%20TACAN/tacan.md) pour indiquer la portée des signaux UHF émanant d'un avion présélectionné.

Une antenne de type encastrée est installée sur la surface inférieure de l'axe du fuselage et reçoit les signaux UHF pour les roulements ADF.

!!! note
  Lorsque le [commutateur de fonction AN/ARC-34](../ARC-34%20Command%20Radio/command-radio.md#function-switch) est réglé sur la position ADF, un relais inverseur dans le système déconnecte le signal [boussole radio AN/ARN-6](../ARN-6%20Radio%20Compass/radio-compass.md) qui est envoyé à l'indicateur radiomagnétique et connecte à la place un signal directionnel du système ADF AN/ARA-50. Le relèvement relatif est indiqué par le pointeur n° 1 (relèvement ADF) sur l'indicateur. L'indication de plage est affichée sur l'[indicateur de plage TACAN AN/ARN-72](../ARN-72%20TACAN/tacan.md).


## Fonctionnement normal

1. Avec la radio de commande allumée et réchauffée, sélectionnez une fréquence commune avec la station au sol ou l'avion sur lequel vous souhaitez vous orienter.
2. Tournez le [commutateur de fonction AN/ARC-34](../ARC-34%20Command%20Radio/command-radio.md#function-switch) sur ADF et le [commutateur de fonction AN/ARN-72 TACAN](../ARN-72%20TACAN/tacan.md) sur A/A.
3. Le pointeur de relèvement ADF se déplace en réponse au signal UHF pour indiquer le relèvement, et l'[indicateur de portée TACAN](../ARN-72%20TACAN/tacan.md) indique la distance jusqu'à la station au sol ou à l'avion.

!!! note
  Pour une communication UHF normale, le [commutateur de fonction](../ARC-34%20Command%20Radio/command-radio.md#function-switch) doit être remis sur MAIN ou BOTH. Cependant, la transmission est possible lorsque le switch est sur ADF.
