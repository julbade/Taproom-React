import React from 'react';
import { Link } from 'react-router-dom';



function Header() {

  return (
    <div>
      <style jsx>{`
          font-family: Helvetica;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          background-color: #663300;
          opacity: 0.7;
          color: white;
          p {
            margin-top: 18px;
            margin-right: 100px;
            color: white;

          }

          h2 {
            margin-left: 50px;
            margin-top: 10px;
          }


        `}</style>
      <h2>Tap Room</h2>
      <p><Link style={{ color: 'white' }} to="/">Home</Link></p>
      <p><Link style={{ color: 'white' }} to="/beers">Beers</Link></p>
      <p><Link style={{ color: 'white' }} to="/about">About</Link></p>


    </div>
  );
}


export default Header;
