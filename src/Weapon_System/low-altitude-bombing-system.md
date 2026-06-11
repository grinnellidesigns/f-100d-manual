# AN/AJB-1 Low Altitude Bombing System

## Introduction

The low altitude bombing system was introduced to assist with nuclear weapons delivery. It helps the pilots follow a pre-determined trajectory to delivery nuclear weapons with delivery profiles to assist with escape from the effects of the blast.

## Controls and Indicators

### Pitch and Roll Indicator
![labs](./img/labs.png)

The vertical needle indicates the current desired roll from 9 degress to wings level left and right. The horizontal needle indicates both the desired G load in pullup mode and desired pitch angle(straight and level) in pre-pullup mode. You will need to keep the wings level and thus roll at 0 and be on "G" during pull up for a correct auto release for the given LABS or LADD release mode. Maintain correct G by keeping the horizontal bar centered between the lines.

### Pullup Light
![labs_light](./img/labs_release_light.png)

The LABS release light indicates when pull up should begin once extinguished. The time the light is on for is set on either the LABS and LABS ALT(left) or LADD(right) dials pictured below.

### LABS and LADD Timer Dials
![labs_dials](./img/pullup_release.png)
The dials for setting the pull up time for LABS and LABS ALT(Left) and LADD(Right) are shown above. They have a range from 0 to 28 seconds.

## Operation

All LABS delivery modes share the pullup timer. The pullup timer is the time set by the pilot to indicate the time taken for the aircraft to fly from a know identification point (IP) to the pullup point. 

There are two variables which determine what the pullup timer should be set to:

- Ground speed
- Bomb travel distance
- Distance from IP to target

The formula:

`pullup timer = (distance from ip to target - bomb travel distance) / ground speed`

can then be used to figure out what should be set for the pullup timer. Both ground speed and distance from IP to target can be easily chosen during mission planning. The identification point (IP) is chosen to be something that is easy to find and navigate to from the air and near the target area.

Bomb travel distance is determined by the exact release parameters of the bomb: including release angle, true airspeed, target altitude, aircraft altitude, bomb type and wind.

Using all this information we can begin using LABS and LADD delivery as they function similarly. Pluging in all the correct data we want to be pointed at the target and press the weapon release at the indentification point (IP), the LABS release light will then illuminate. Once it is extinguished after our LABS timer setting has ended begin pulling and maintain wings level and be on "G" using the LABS gauge. Release will then automatically occur depending on the release mode chosen. 50 degress for LABS and 120 degrees for LABS ALT.

### LABS (Loft)

The LABS mode is the one of the normal delivery types for the labs. It is intended for lofting nuclear weapons long distances. The release angle is 50 degrees which lofts the weapon a long distance towards the target.

### LABS ALT (Over the Shoulder)

The LABS ALT mode is the alternate method for a loft type delivery. It is intended for lofting a nuclear weapon vertically over the target.

The LABS and LABS ALT mode are identical with the exception of the angle of release. Below is a table of release angles:

| Mode     | Delivery Angle (degree)
|----------|-------------------------
| LABS     | 50 (LOFT)
| LABS ALT | 120 (OVER THE SHOULDER)

![Image of Loft Release](./img/labs_loft_delivery.png)

### Low Altitude Drogue Delivery (LADD)

Low Altitude drogue Delivery is for delivery drogue assisted nuclear weapons. At the pullup point the pilot is commanded into a 40 degree climb. The right yellow topped release timer determines when to begin pulling up. This mode is not used often and most employments will use LABS or LABS ALT.
