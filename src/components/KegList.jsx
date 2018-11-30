import React from 'react';
import Kegs from './Kegs';
import PropTypes from 'prop-types';


function KegList(props) {
  return (
    <div>
      {props.kegList.map((kegs, index) =>
        <Kegs name={kegs.name}
          brewer={kegs.brewer}
          description={kegs.description}
          abv={kegs.abv}
          price={kegs.price}
          remaining={kegs.remaining}
          key={index}/>
      )} 
    </div>
  );
}


KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
