import React from 'react';
import PropTypes from 'prop-types';


function Kegs(props) {

  return (
    <div>


      <p>{props.name}</p>
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
