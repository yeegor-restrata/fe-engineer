## Restrata Front End Engineer Assignment

`yarn start` in both subdirs -> run BE, then FE

### TODO

- Set up state management, fetch data about people and zones there
  - Use Redux (any wrapper allowed) or React.Context
- Render people on the map
  - Safe -> green dot
  - Unknown -> yellow dot
  - Not safe -> red dot
- Render zones on the map
  - risk_lvl == 0 -> green
  - risk_lvl == 1 -> yellow
  - risk_lvl == 2 -> red
- On person click
  - highlight the person on the map - change dot color, add a border or something
  - show a tooltip with lat / lng position
- On zone click - show a tooltip with area (area calculation is not required to implement manually)