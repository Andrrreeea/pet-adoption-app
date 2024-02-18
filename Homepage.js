import React from "react";
import "./Homepage.css";
import ButtonAdoptNow from "../Components/ButtonAdoptNow";

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="background">
        <div className="content">
          <h1>Welcome to Our Pet Adoption App!</h1>
          <p>Home is Where the Paw Prints Are: Adopt a Pet</p>
          <ButtonAdoptNow />
        </div>
      </div>
      
    </div>
  );
}

export default Homepage;
