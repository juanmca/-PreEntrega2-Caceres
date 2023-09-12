import React from "react";
import { Metronome } from '@uiball/loaders'
import "./LoaderComponent.module.scss"


const LoaderComponent = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
   

<Metronome 
 size={40}
 speed={1.6} 
 color="white" 
/>
    </div>
  );
};

export default LoaderComponent;