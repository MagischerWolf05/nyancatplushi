import React, { useState ,useEffect} from "react";
import "./App.css";
import nyancaticon from "./ressources/nyancat.svg"
import AOS from 'aos'
import Products from "./Components/products";
import UserResponseList from "./Components/UserResponseList";
import Helmet from "react-helmet";
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
        AOS.init();
    }, []);
  return (
<div>
    <Helmet>
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="images/facivon/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="images/facivon/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="images/facivon/favicon-16x16.png"
        />
        <link rel="manifest" href="images/facivon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
    </Helmet>
          <div className="container" onMouseMove={handleMouseMove}>
        <div className="background" id="RainbowBackGround" />
        {ripples}
              <h1 className="title">NYANCAT PLUSHI</h1>
      </div>
    <div className="nyancatBorder">
        <img alt="nyancat" src={nyancaticon} id="nyancaticonid"></img>
    </div>
    <Products/>
    <UserResponseList></UserResponseList>
    </div>
);
}