## Restrata Front End Engineer Assignment

`yarn start` in both subdirs -> run BE, then FE

### DOCS

- Mapbox GL JS - core map technology https://docs.mapbox.com/mapbox-gl-js/api/
- React Map GL - React wrapper for the core map technology https://visgl.github.io/react-map-gl/
- Layers visualise datasets on the map
  - React Map GL https://visgl.github.io/react-map-gl/docs/api-reference/layer
  - Mapbox Layers https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/
  - Mapbox Gallery https://docs.mapbox.com/mapbox-gl-js/example/
- Data driven stylingt https://docs.mapbox.com/mapbox-gl-js/example/data-driven-circle-colors/


### TODO

- Set up state management, fetch data about people and zones there
  - Use React.Context or Redux (any wrapper allowed)
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