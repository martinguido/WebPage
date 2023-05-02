import React from "react";

const CardConsejos = (props) => {
    
    return (
        <div className="card">
            <h1 className="cardTitle">Consejo<br />#{props.n}</h1>
            <h2 className="cardText">{props.text}</h2>
        </div>
    );
};

export default CardConsejos;
