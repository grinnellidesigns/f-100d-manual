# Liste de contrôle

## Usage

La liste de contrôle peut par défaut être ouverte avec `LShift + C`.

### Procédures

![procédures](./img/categories.png)

Cette page affiche les procédures réparties dans leurs différentes catégories. En cliquant sur une procédure, vous y accédez.

### Page de procédure

![éléments-cochés](./img/checked-items.png)

Ceci est un exemple montrant la page de procédure avec certaines procédures déjà terminées.

### Bouton Liste de contrôle

![liste de contrôle](./img/checklist.png)

Cela agit comme un bouton d'accueil pour accéder à la page des procédures.

### Barre de navigation

![barre de navigation](./img/navigation-bar.png)

La barre de navigation affiche la procédure en cours au centre et les procédures précédente (à gauche) et suivante (à droite) de chaque côté. Vous pouvez cliquer sur les procédures suivantes et précédentes pour y accéder.

### Montre-moi

![montre-moi](./img/show-me.png)

Le bouton Afficher-moi met en évidence l'élément actuel dans le cockpit.

### Détail de la liste de contrôle

![liste de contrôle-détail](./img/detail.png)

Cela bascule entre les trois types de détails.

| Détail      | Description |
|-------------|-------------|
| Obligatoire   | Nécessaire pour terminer la procédure actuelle de la liste de contrôle. |
| Abrégé | Comprend des contrôles qui seraient effectués dans la réalité mais qui peuvent également l'être dans le jeu. |
| Réaliste   | Comprend des contrôles qui seraient effectués dans la réalité mais qu'il n'est pas possible de vérifier en jeu : serrer le harnais par exemple. |

### Commande de liste de contrôle avancée

La commande Advance checklist est utilisée pour vérifier manuellement les éléments qui ne sont pas automatiquement vérifiés ou pour contourner un élément. La commande Advance Checklist vérifie manuellement l’élément non coché le plus élevé (élément actuel) sur la liste de contrôle. Une fois tous les éléments vérifiés, utilisez la commande Advance Checklist pour passer à la procédure suivante. S'il n'y a pas de procédure suivante, la commande Advance Checklist ne fait rien.

![éléments-cochés](./img/checked-items.png)

## Personnalisation de la liste de contrôle

La structure de la checklist est réalisée à partir d'un fichier json listant les procédures et catégories. Lorsqu'un `checklist.json` est fourni dans `C:/users/<you username>/Saved Games/DCS: F-100D`, cette liste de contrôle personnalisée est utilisée. Comme point de départ, vous pouvez copier la liste de contrôle intégrée qui se trouve `DCS World/Mods/Aircraft/f-100d/checklist/default.json`.

Si cette liste de contrôle ne parvient pas à se charger en raison d'une erreur de syntaxe, cette erreur est signalée dans votre journal DCS situé dans `C:/users/<you username>/Saved Games/DCS/Logs/dcs.log`.

Voici un exemple d'erreur :

```text
ERROR   F100 (Main): [Checklist Load Error]: [json.exception.parse_error.101] parse error at line 26, column 35: syntax error while parsing object - unexpected string literal; expected '}'
```

La structure générale du fichier pour `checklist.json` est la suivante.

```json
[ // list of categories
    { // category
        "name" : "your category name 1",
        "procedures" : [
            { // procedure
                "name" : "your procedure name 1",
                "items" : [
                    // list of items
                ]
            }
        ]
    }
]
```

Il peut y avoir n'importe quel nombre de catégories, n'importe quel nombre de procédures dans chaque catégorie et n'importe quel nombre d'éléments dans chaque procédure. La structure d'un élément est présentée ci-dessous.

```json
{
    "text" : "Item to be set",
    "value" : "State pilot should set: On or Off etc",
    "priority" : 1, // (optional) 1,2,3 for mandatory, abbreviated, realistic respectively. With this key/value omitted the priority defaults to 1.
    "clickable" : "PNT_FLAP_SELECT", // (optional) the clickable point for show me, for how to find these see below.
    "condition" : 0, // (optional) either a number or string, see the conditions section
    "once" : true // (optional) applies to only conditions see conditions section
}
```

### Trouver des éléments cliquables

Le moyen le plus simple de trouver des éléments cliquables consiste à utiliser un outil pour inspecter le modèle de cockpit appelé visualiseur de modèles. Cela peut être trouvé dans les fichiers d'installation de DCS. En exécutant `DCS World/bin/ModelViewer2.exe` puis `File >> Load Model`, le modèle de cockpit du F-100D peut être trouvé `DCS World/Mods/Aircraft/f-100d/cockpit/shape/cockpit_f100.edm`.

Une fois chargés, les connecteurs doivent être affichés.

![afficher les connecteurs](./img/show-connectors.png)

Cela affiche tous les connecteurs sur chaque commutateur. Le survol de votre souris sur le commutateur pour lequel vous souhaitez ajouter une condition affiche alors le nom de son connecteur. Il s'agit du nom à utiliser dans l'entrée `"clickable"` de l'élément.

### Conditions

Les conditions vérifient si l'élément en cours est terminé. Une fois qu'une condition est remplie, elle est marquée comme remplie en étant barrée sur la liste de contrôle.

L'entrée de condition peut être un [nombre (entier)](#number-integer) ou une [chaîne](#string). Quand la condition est un nombre

En cas d'échec de l'une ou l'autre méthode de condition en raison d'une configuration incorrecte, la condition reste fausse et doit être vérifiée manuellement.

#### Nombre (entier)

Cela représente la position du commutateur. Il **doit** y avoir un [cliquable](#finding-clickables) correct correspondant pour que cela fonctionne. La position de n'importe quel interrupteur est sa position entière comptée à partir de sa valeur minimale (généralement complètement vers l'arrière, vers le bas ou dans le sens inverse des aiguilles d'une montre). Il existe des exceptions à cette règle, mais cela devrait fonctionner pour la plupart des commutateurs.

Un exemple est présenté ci-dessous.

![mode-sel](./img/mode-sel.png)

| Position        | Condition |
|-----------------|-----------|
| **DÉSACTIVÉ**         | 0         |
| **RADAR DE VUE** | 1         |
| **MANUEL**      | 2         |
| **LABORATOIRES**        | 3         |
| **LABORATOIRES ALT**    | 4         |

Les conditions peuvent facilement être testées en voyant à quelle position la liste de contrôle coche automatiquement votre article, cela peut ensuite être utilisé pour confirmer que votre index est correct.

#### Chaîne

Ce sont des conditions spéciales préprogrammées qui peuvent être utilisées. Toutes ces conditions sont présentées ci-dessous.

- `"cartridge_installed"`
- `"engine_running"`
- `"engine_spooling"`
- `"air_connected"`
- `"air_applied"`
- `"chocks_removed"`

#### Une fois

Il existe deux méthodes de vérification des conditions, la méthode par défaut vérifie toujours les conditions, quel que soit l'élément actuel dans la liste de contrôle. Si once est défini sur true, la condition n'est vérifiée que lorsque cet élément est l'élément actuel. Ceci est utile pour les éléments qui doivent se produire une fois et qui sont ensuite réinitialisés. Un exemple est la cartouche de démarrage.

| Article                 | État |
|----------------------|-------|
| Cartouche de démarrage    | Installer |
| Interrupteur principal du moteur | Sur |
| Démarrage et allumage   | Appuyez momentanément |

La cartouche est brûlée lorsque le bouton d'allumage est enfoncé, donc si nous la vérifions continuellement, elle se décocherait d'elle-même. Nous ajoutons donc la paire clé-valeur `"once" : true` à cet élément. Il en va de même pour le bouton Démarrer et Allumage.