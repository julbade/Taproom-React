import React from 'react';
import PropTypes from 'prop-types';


function Kegs(props){

  return (
    <div>
      <ul>
      <li><h3>{props.name}</h3></li>
      <p>Brewer: {props.brewer}</p>
      <p>Description: {props.description}</p>
      <p>Alcohol Content: {props.abv}</p>
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
