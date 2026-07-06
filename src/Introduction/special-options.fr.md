# Options spéciales

Diverses options spéciales ont été ajoutées pour la qualité de vie des utilisateurs et la personnalisation. Cette section explique chaque option spéciale en profondeur.

Ces options se trouvent dans les options DCS du menu principal, ouvrez l'onglet SPÉCIAL, puis sélectionnez le F-100D dans la colonne de gauche.

## Gameplay

![image des options spéciales](./img/special_options-1.png)

### Bougé de la caméra du cockpit

Le bougé de la caméra du cockpit peut être ajusté sur ce curseur comme multiplicateur global du bougé global de la caméra du cockpit.

### Assistance à l'armement de contrôle des pylônes

Cela décide de la configuration du [panneau de contrôle de chargement du pylône](../Weapon_System/armament-control-panels.md#pylon-loading-control-panel).

| Paramètre      | Assistance au chargement des pylônes
|--------------|--------------------------
| **DÉSACTIVÉ**      | Aucun – jusqu'au pilote
| **LORS DE L'APPARITION** | Défini automatiquement à l'apparition. Après réarmement, c'est au pilote de régler
| **COMPLET**     | Réglé automatiquement à l'apparition et une fois le réarmement terminé.

### Mode de démarrage automatique

| Paramètre         | Démarrer |
|-----------------|---------|
| **COMPLET**        | Désactive toute assistance au démarrage automatique pour un démarrage complet à froid et dans l'obscurité. |
| **MOTEUR UNIQUEMENT** | règle tous les autres commutateurs, boutons et paramètres pour le démarrage ; ainsi, le moteur est le seul élément requis pour un démarrage complet. |

## Options de personnalisation externes

### Marques de victoire

Active ou désactive les marquages ​​de victoire de l'avion sur le côté de la partie avant du compte du fuselage (actuellement) pour les éliminations air-air et air-sol en solo.

## Options de configuration du poste de pilotage

### Position du siège

Le réglage de cette diapositive déplace la hauteur du siège par défaut (et le point de vue). 0 est complètement abaissé et 100 est complètement relevé.

### Sélecteur de pistolet à démarrage pneumatique

Ajuste le paramètre par défaut du [Bouton de sélection du pistolet](../Weapon_System/guns.md#gun-missile-switch).

### Sélecteur de caméra de pistolet

Définit la position par défaut du [Bouton de sélection de la caméra du pistolet](../Gun%20Camera/gun_camera.md).

## Options de personnalisation du cockpit

Définit les positions dynamiques ou personnalisées des jauges du tableau de bord.

Si vous activez le panneau d'instruments personnalisé, vous pouvez randomiser entre les dispositions historiques connues ou saisir votre propre code d'identification de panneau personnalisé à l'aide de [Grinnelli Designs F-100D Dash Creator] (https://grinnellidesigns.com/dash-creator/).


## Paramètres de la caméra du pistolet

![pistolet à options spéciales](./img/special_options-2.png)

### Désactiver l'enregistrement de la caméra du pistolet

Décocher la case désactive l'enregistrement de la caméra du pistolet, empêchant ainsi la génération de fichiers vidéo.

### Effets de caméra de pistolet

Ajuste les effets de post-traitement appliqués aux fichiers vidéo d'enregistrement de caméra d'arme à feu.

### Temps de dépassement

Ajuste la durée d'enregistrement de la caméra du pistolet après avoir appuyé sur la gâchette, de 0 à 3 secondes.

### Réglage du délai de démarrage

Ajuste le temps entre le relâchement de la gâchette et le début de la durée d'exécution prédéfinie, de 4 à 30 secondes.

### Durée d'exécution prédéfinie

Ajuste le temps d'exécution de la caméra du pistolet après le délai de démarrage, de 2 à 30 secondes.

!!! note
    La durée totale de fonctionnement de la caméra après le relâchement du déclencheur correspond au total des deux paramètres d'intervalle de temps (6 à 63 secondes), y compris le temps de dépassement prédéfini de 0 à 3 secondes.

!!! warning
    Les fichiers vidéo AVI se trouvent dans `%userprofile%/Saved Games/DCS: F-100D` dans le dossier respectif de la caméra.

## Paramètres de la caméra de frappe

![avertissement concernant les options spéciales](./img/special_options-3.png)

### Désactiver l'enregistrement de la caméra Strike

Décocher la case désactive l'enregistrement de la caméra de frappe, empêchant ainsi la génération de fichiers vidéo.

### Effets de caméra de frappe

Ajuste les effets de post-traitement appliqués aux fichiers vidéo d'enregistrement de la caméra de frappe.

### Temps de dépassement

Ajuste la durée d'enregistrement des caméras de frappe après avoir appuyé sur la gâchette, de 0 à 3 secondes.

### Élévation de la caméra avant

L'élévation de la caméra avant peut être ajustée de 0 à 20° vers le bas.

### Distance focale de la caméra avant

La caméra avant utilise un objectif à focale variable, réglable de 20 mm (large) à 80 mm (étroit).

### Délai de démarrage de la caméra arrière

Le délai du début de l'enregistrement de la caméra arrière après avoir appuyé sur le cornichon.

### Mode d'élévation de la caméra arrière

L'élévation de la caméra arrière peut être réglée de 0 à 25° pour la plage supérieure et de 45 à 60° pour la plage inférieure.

### Élévation supérieure de la caméra arrière

Modifiez l'élévation de la caméra de 0 à 25° vers le bas.

### Élévation inférieure de la caméra arrière

Modifiez l'élévation de la caméra de 45 à 60° vers le bas.

### Distance focale de la caméra arrière

La caméra arrière utilise un objectif à focale variable, réglable de 17 mm (large) à 68 mm (étroit).

### Vitesse de la caméra arrière

Ajuste la vitesse de lecture du métrage de sortie. 100 % est en temps réel.

!!! warning
    Des taux de lecture inférieurs augmentent l'utilisation de la RAM de la caméra arrière.