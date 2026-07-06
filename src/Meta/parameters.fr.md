# Paramètres

Les paramètres peuvent être utilisés par les missions et plugins DCS pour lire l'état interne de l'avion.

| Paramètre              | Description
|------------------------|--------------
| TACAN_CHANNEL          | Numéro du canal [TACAN](../ARN-72%20TACAN/tacan.md) (canaux X uniquement). |
| COMM_FREQ              | Fréquence de la [Radio UHF](../ARC-34%20Command%20Radio/command-radio.md) en Hz |
| RADIO_COMPASS_FREQ     | Fréquence du [Radio Compass AN/ARN-6](../ARN-6%20Radio%20Compass/radio-compass.md) en Hz. |
| APRÈS BURNER_STATE      | Position de postcombustion [cran d'accélérateur](../Introduction/stick-and-throttle.md#throttle) : _(0)_ Éteint ; _(1)_ Allumé (les pannes d'allumage ne sont pas indiquées.) |
| MOTEUR_RPM             | 0-100, régime moteur en %. |
| FLAP_STATE             | 0-1, position moyenne : _(0)_ Volets rentrés ; _(1)_ Volets complètement déployés |
| GEAR_STATE             | 0-1, position moyenne : _(0)_ Vitesse rentrée ; _(1)_ Vitesse étendue |
| TRANSPONDER_CODE       | Code de transpondeur donné pour le code du mode 3 donné sous forme de nombre. Si l'IFF ne parvient pas à répondre (éteint ou en veille), la valeur est 0. |
| GUN_MISSILE_SWITCH     | Position du commutateur canon/missile avec les positions : _(0)_ MISSILES ; _(1)_ SÉCURISÉ ; _(2)_HAUT ; _(3)_TOUS ; _(4)_ LWR ; _(5)_ POD |
| MODE_SELECT_SWITCH     | Position du sélecteur de mode avec positions : _(0)_ OFF ; _(1)_ VUE ET RADAR ; _(2)_ MANUEL ; _(3)_ LABORATOIRES ; _(4)_ LABORATOIRES ALT ; _(5)_ LADD |
| ARMAMENT_SELECT_SWITCH | Position du sélecteur d'armement avec positions : _(0)_ OFF ; _(1)_ RKTS ; _(2)_ BOMBES ; _(3)_ DISP ; _(4)_NAPALM ; _(5)_ MAGASINS SPL ; _(6)_ INOP/grièche-grièche ; _(7)_ JET DE RÉSERVOIR ; _(8)_ DISP JETT ; _(9)_ JETT DE PYLÔNE
