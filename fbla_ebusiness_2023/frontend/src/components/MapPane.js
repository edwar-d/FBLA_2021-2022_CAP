import './MapPane.css';


import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Navbar,
  NavbarBrand,
} from 'reactstrap';

import '@tomtom-international/web-sdk-maps/dist/maps.css';
import * as tt from '@tomtom-international/web-sdk-maps';

const MAX_ZOOM = 17;

function MapPane(props) {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(props.long);
  const [mapLatitude, setMapLatitude] = useState(props.lat);
  const [mapZoom, setMapZoom] = useState(5);
  const [map, setMap] = useState({});

  //   var ggmarker = new tt.Marker().setLngLat([122.4783,37.8199]).addTo(map)
//   var popupOffsets = {
//     top: [0, 0],
//     bottom: [0, -70],
//     "bottom-right": [0, -70],
//     "bottom-left": [0, -70],
//     left: [25, -35],
//     right: [-25, -35],
//   }
  
//   var ggpopup = new tt.Popup({ offset: popupOffsets }).setHTML(
//     "Golden Gate Bridge, Historic Bridge"
//   )
//   ggmarker.setPopup(ggpopup).togglePopup()
  const increaseZoom = () => {
    if (mapZoom < MAX_ZOOM) {
      setMapZoom(mapZoom + 1);
    }
  };

  const decreaseZoom = () => {
    if (mapZoom > 1) {
      setMapZoom(mapZoom - 1);
    }
  };

  const updateMap = () => {
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  };

  useEffect(() => {
    let map = tt.map({
      /* 
      This key will API key only works on this Stackblitz. To use this code in your own project,
      sign up for an API key on the TomTom Developer Portal.
      */
      key: 'FrC0WQ7z3IE5Wpp8tDwFXitNwmFGKscy',
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    setMap(map);
    return () => map.remove();
  }, []);

  return (
    <div className="App">
     
      <Container className="mapContainer">
        <Row>
          <Col xs="4">
            
            <FormGroup>
              <Label for="longitude">Longitude</Label>
              <Input
                type="text"
                name="longitude"
                value={mapLongitude}
                onChange={(e) => setMapLongitude(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="latitude">Latitude</Label>
              <Input
                type="text"
                name="latitude"
                value={mapLatitude}
                onChange={(e) => setMapLatitude(e.target.value)}
              />
            </FormGroup>
            <Col xs="12">
              <Row>Zoom</Row>
              <Row>
                <Button outline color="primary" onClick={decreaseZoom}>
                  -
                </Button>
                <div className="mapZoomDisplay">{mapZoom}</div>
                <Button outline color="primary" onClick={increaseZoom}>
                  +
                </Button>
              </Row>
            </Col>
            <Col xs="12">
              <Row className="updateButton">
                <Button color="primary" onClick={updateMap}>
                  Update Map
                </Button>
              </Row>
            </Col>
          </Col>
          <Col xs="8">
            <div ref={mapElement} className="mapDiv" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MapPane;
