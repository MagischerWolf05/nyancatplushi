import React, { useState ,useEffect} from "react";
import "./App.css";
import nyancaticon from "./ressources/nyancat.svg"
import Products from "./Components/products";
export default function App() {
  // Create a state variable to store the ripple elements
  const [ripples, setRipples] = useState([]);

  // Define a function to handle mouse move events on the container
  const handleMouseMove = (event) => {
    // Get the mouse coordinates relative to the container
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    // Create a new ripple element with a unique key
    const ripple = <div key={Date.now()} className="ripple" style={{ left: x, top: y }} />;

    // Add the ripple element to the state variable
    setRipples((prevRipples) => [...prevRipples, ripple]);

    // Remove the ripple element after one second
    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
    }, 1000);
  };
    useEffect(() => {
        import('./Components/scrollHandler');
    }, []);
  return (
<div>
          <div className="container" onMouseMove={handleMouseMove}>
        <div className="background" id="RainbowBackGround" />
        {ripples}
              <h1 className="title">NYANCAT PLUSHI</h1>
      </div>
    <div className="nyancatBorder">
        <img alt="nyancat" src={nyancaticon} id="nyancaticonid"></img>
    </div>
    <Products/>
    </div>
);
}