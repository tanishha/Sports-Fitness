import React,{useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import classes from './Mapbox.module.css';
const BaseMap = () => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    
    useEffect(() => {
     let map = new mapboxgl.Map({
        container: "mapContainer",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [85.314513,27.706935],
        zoom: 13,
      });
      const nav = new mapboxgl.NavigationControl();
     map.addControl(nav, "top-right");
const marker = new mapboxgl.Marker()
 
  .setLngLat([85.314513,27.706935 ])
  .addTo(map);
    }, []);
  
    return <div id="mapContainer" className={classes.Map}></div>;
  };
  export default BaseMap;
