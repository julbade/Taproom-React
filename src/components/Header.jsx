import React from 'react';
import { Link } from 'react-router-dom';



function Header() {

    return (
      <div>
        <style jsx>{`
          font-family: Helvetica;
          

          .homeLinks {
            text-align: right;

            margin-right: 20px;
          }
          p {
            float: right;
            padding: 20px;
          }
        `}</style>
          <h2>Tap Room</h2>
            <div className="homeLinks">
              <p><Link to="/">Home</Link></p>
              <p><Link to="/beers">Beers</Link></p>
              <p><Link to="/about">About</Link></p>

          </div>

      </div>
    );
  }


  export default Header;
