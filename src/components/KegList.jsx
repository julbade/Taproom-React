import React from 'react';
import Kegs from './Kegs';


 function KegList() {
  return (
    <div>
      {masterKegList.map((kegs, index) =>
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

export default KegList;
