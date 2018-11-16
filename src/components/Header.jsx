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
          posistion: sticky;
          top: 0;
          opacity: 0.7;
          color: white;
          p {
            margin-top: 25px;
            margin-right: 100px;

          }
          
          h2 {
            margin-left: 50px;
          }

        `}</style>
          <h2>Tap Room</h2>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/beers">Beers</Link></p>
          <p><Link to="/about">About</Link></p>


      </div>
    );
  }


  export default Header;
