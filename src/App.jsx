import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Map() {
  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
   />
  )
}

const WrappedMap =  withScriptjs(withGoogleMap(Map));

export default function App(){
  return <div> 
    <WrappedMap googleMapURL={''}/>
  </div>;
}