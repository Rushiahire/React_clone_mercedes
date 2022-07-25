import React from 'react';

const Cars = (props) => {
    return(
        <>
            <img src={props.image} alt="image not found" />
           <div>
           <p>{props.text}</p>
            <button>{props.buy}</button>
           </div>
        </>
    )
};

export default Cars;