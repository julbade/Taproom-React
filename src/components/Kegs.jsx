import React from 'react';
import PropTypes from 'prop-types';


function Kegs(props){

  return (
    <div>
      <style jsx>{`
      
        p { 
          font-size: 20px;
          margin-left: 20px;
          text-shadow: 2px 1px red;
        }
      
      
      `}</style>
      
      <ul>
        <li><h2>{props.name}</h2></li>
        <p>Brewer: {props.brewer}</p>
        <p>Description: {props.description}</p>
        <p>ABV: {props.abv}</p>
        <p>Price: {props.price}$</p>
        <p>Pints: {props.remaining}</p>
      </ul>
    </div>
  );
}

Kegs.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,

};


export default Kegs;
