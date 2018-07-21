import React from "react";
import "./Clickgame.css";

const Clickgame = props => (
  <div className="card">
    <div className="img-container">
      <img onClick={() => props.clicked(props.id)} src={props.image} />
    </div>
  </div>
);

export default Clickgame;
