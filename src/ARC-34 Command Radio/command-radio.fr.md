# Radio de commande UHF ARC-34

##Présentation
<!-- Link the AN/AIC-10 Amp to its own page -->
La radio embarquée est alimentée par le bus principal de l'avion et permet une communication vocale entre 225,0 et 399,9 MHz. Les signaux audio sont traités via l'amplificateur de communication AN/AIC-10. Le système dispose d'un panneau de commande avec accès à 20 canaux prédéfinis. La sélection de fréquence peut également être réglée manuellement.

Ce système radio utilise deux récepteurs :

- Récepteur principal (responsable des communications standard)
- Récepteur de garde (fixé à une fréquence d'urgence dédiée)

!!! note
  La fréquence de garde est réglée en usine et ne peut être modifiée sans retirer la télécommande de l'avion. Lors de la sélection d'une nouvelle fréquence, un mécanisme de réglage automatique synchronise à la fois l'émetteur et le récepteur, complétant le cycle de réglage en 4 secondes environ.

## Contrôles

![image radio](./img/command_radio.png)

1. [Boutons de fréquence](#frequency-knobs)
2. [Sélecteur coulissant manuel-préréglé-garde](#manual-preset-guard-sliding-selector)
3. [Contrôle du volume](#volume-control)
4. [Sélecteur de canal préréglé](#preset-channel-selector-switch)
5. [Commutateur de fonction](#function-switch)
6. [Bouton de tonalité](#tone-button)
7. [Carte de fréquence](#frequency-card)

### Boutons de fréquence

En haut du panneau radio, juste en dessous des quatre fenêtres d'affichage de fréquence, se trouvent quatre petits boutons de sélection de fréquence qui règlent les incréments de 100, 10, 1 et 0,1 de la fréquence, permettant la sélection manuelle de l'une des 1 750 fréquences disponibles dans la plage de 225,0 à 399,9 MHz. 243,0 MHz est réservé comme canal de garde.
<!-- Is there a way to change this in the mission editor? If so are other mentions of 243.0 MHz on this page variable and accounted for? -->

### Sélecteur coulissant à préréglage manuel

Le sélecteur coulissant contrôle la méthode de sélection de la fréquence radio de commande. Il est actionné en faisant glisser la commande sur un arc limité sur la face du panneau. Cette commande a trois positions disposées de telle sorte que lorsqu'elle est dans une position quelconque, les deux autres positions sont masquées par un verre vert semi-transparent :

| Sélection      | Description |
|----------------|-------------|
| **MANUEL**     | Le canal prédéfini est désactivé et un masque est retiré devant les quatre petites fenêtres en haut du panneau, révélant les chiffres qui composent une fréquence de fonctionnement définie par les [boutons de fréquence] (#frequency-knobs). |
| **PRÉRÉGLAGE**     | Masque les 4 petites fenêtres au-dessus des [boutons de fréquence] (#frequency-knobs) et désactive la fréquence sélectionnée manuellement. Cela active les [20 canaux prédéfinis] (#default-preset-channels) contrôlés par le sélecteur de canal. |
| **GARDE**      | Règle l'émetteur et le récepteur principal sur la fréquence de garde par défaut (243,0 MHz). |

### Contrôle du volume

Le contrôle du volume régule le niveau sonore du signal dans le casque provenant des deux récepteurs de commandes. Un contrôle adéquat du volume est fourni, mais le son ne peut pas être réduit au silence.

### Sélecteur de canal préréglé

Le sélecteur de canal contrôle la sélection de [20 fréquences prédéfinies] (#default-preset-channels) par numéro de canal. Lors de la rotation, les numéros de canal de 1 à 20 apparaissent dans la fenêtre d'indicateur de canal au-dessus du sélecteur. Cette fenêtre est masquée lorsque le [commande de sélection coulissante](#manual-preset-guard-sliding-selector) est placé dans une position autre que la position PRESET.

### Commutateur de fonction

| Sélection     | Description |
|---------------|-------------|
| **DÉSACTIVÉ**       | Système inopérant |
| **PRINCIPAL**      | Récepteur principal audible |
| **LES DEUX**      | Garde et récepteurs principaux audibles |
| **ADF**       | Active la recherche automatique de direction (ADF) et déconnecte les signaux envoyés à l'[indicateur radiomagnétique](../DirectionGyroCompass/direction-gyro-and-compass.md#direction-gyro) du [boussole radio AN/ARN-6](../ARN-6%20Radio%20Compass/radio-compass.md). |

### Bouton de tonalité

Lorsque la radio de commande fonctionne, appuyer et maintenir enfoncé le bouton de tonalité transmet une tonalité continue à la fréquence réglée et interrompt la réception. Une tonalité secondaire est audible dans le casque lorsque le bouton est enfoncé. Cette fonctionnalité peut être utilisée pour des opérations de radiogoniométrie en conjonction avec d’autres aéronefs et stations au sol.

### Carte de fréquence

![carte de fréquence](./img/freqcard.png)

La carte de fréquence note les préréglages des canaux et leurs fréquences.

#### Canaux prédéfinis par défaut

| Canal prédéfini | Fréquence (MHz) |
|----------------|-----------------|
| **Canal 1**  | 225,0           |           
| **Canal 2**  | 226,0           |           
| **Canal 3**  | 227,0           |           
| **Canal 4**  | 228,0           |           
| **Canal 5**  | 229,0           |           
| **Canal 6**  | 230,0           |           
| **Canal 7**  | 231.0           |           
| **Canal 8**  | 232,0           |           
| **Canal 9**  | 233,0           |           
| **Canal 10** | 234,0           |
| **Canal 11** | 235,0           |
| **Canal 12** | 236,0           |
| **Canal 13** | 237,0           |
| **Canal 14** | 238,0           |
| **Canal 15** | 239,0           |
| **Canal 16** | 240,0           |
| **Canal 17** | 241,0           |
| **Canal 18** | 242,0           |
| **Canal 19** | 243,0           |
| **Canal 20** | 244,0           |

!!! note
  Vous pouvez définir de nouveaux préréglages pour chaque unité F-100D dans l'éditeur de mission DCS.

### Indicateur de canal distant

L'indicateur de canal distant est synchronisé avec le panneau de commande radio. Lorsque la radio ne fonctionne pas, ses quatre fenêtres d'affichage sont vides. Lorsque la radio est en fonctionnement, elle affiche des informations basées sur la position de la [commande de sélection](#manual-preset-guard-sliding-selector) :

| Sélection  | Description |
|------------|-------------|
| **PRÉRÉGLAGE** | Canal radio de commande prédéfini |
| **MANUEL** | Fréquence (en MHz) du canal sélectionné |
| **GARDE**  | DG |

![image radio](./img/remote-channel-indicator.png)

## Fonctionnement normal

Un contrôle opérationnel complet de la radio de commande est effectué comme suit :

1. Avant le décollage, vérifiez les fréquences à utiliser par rapport à celles répertoriées sur la [carte de fréquence] (#frequency-card).
2. Vérifiez les paramètres des boutons sur le tambour de contrôle de fréquence avec la carte de fréquence. Pour ce faire, ouvrez la porte à laquelle la carte de fréquence est attachée. Le numéro de canal qui correspond à la fréquence préréglée apparaît dans une fenêtre à gauche des boutons. Les numéros de fréquence de ce canal sont répertoriés au-dessus des boutons.
3. Vérifiez le fonctionnement de l'émetteur et du récepteur principal avec [commande de sélection coulissante] (#manual-preset-guard-sliding-selector) dans chaque position.
4. Vérifiez le fonctionnement du récepteur de garde en utilisant la position **DEUX** du [commutateur de fonction] (#function-switch).
5. Pour la sélection initiale du canal, sélectionnez un canal autre que celui à utiliser jusqu'à ce que l'échauffement soit terminé, ou après l'échauffement, passez à un autre canal puis revenez à celui souhaité. Si le canal souhaité est sélectionné avant la fin du préchauffage, une performance réduite en raison d'un mauvais réglage peut en résulter.
6. Ajustez le [volume](#volume-control) comme vous le souhaitez.
7. Pour la sélection manuelle d'une fréquence qui n'est pas incluse dans les canaux prédéfinis, déplacez [commande de sélection coulissante] (#manual-preset-guard-sliding-selector) sur **MANUEL**. Utilisez les boutons de fréquence en haut du panneau pour établir la fréquence souhaitée. (Le commutateur de fonction
doit être sur **MAIN** ou **BOTH** pour cette opération.)
8. Pour obtenir la transmission et la réception de la fréquence de garde uniquement, déplacez [le sélecteur coulissant] (#manual-preset-guard-sliding-selector) sur **GUARD** et tournez le [commutateur de fonction] (#function-switch) sur **MAIN**. Cela évite une réception inégale ou brouillée en coupant le récepteur de garde qui fonctionne lorsque le [commutateur de fonction] (#function-switch) est sur **BOTH**.

## Opération d'urgence

### Perte soudaine de transmission et de réception

Si la transmission ou la réception n'est pas satisfaisante, ajustez l'attitude ou le cap de l'avion pour améliorer l'alignement de la ligne de visée avec l'antenne.

### Sélection des canaux après l'arrêt du moteur

S'il est nécessaire de sélectionner un autre canal de fréquence, la sélection doit être effectuée dès que possible après l'arrêt ou la panne du moteur, afin que
l’alimentation électrique est disponible pour compléter la sélection.

### La radio ne fonctionne pas

En cas de panne apparente de la radio de commande, essayez d'utiliser des positions alternatives de [commande de sélection coulissante] (#manual-preset-guard-sliding-selector) ou des positions alternatives de [commutateur de fonction] (#function-switch). Éteignez l'équipement pendant plusieurs minutes ; puis tournez [le commutateur de fonction] (#function-switch) sur le type d'opération souhaité. Si le relais de protection du mécanisme de réglage était responsable, cette action rétablit le fonctionnement. Vérifiez le panneau de disjoncteurs pour vérifier l'état déclenché de l'amplificateur AN/AIC-10.