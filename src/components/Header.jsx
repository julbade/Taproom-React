import React from 'react';
import { Link } from 'react-router-dom';



function Header() {

    return (
      <div>
        <style jsx>{`
          font-family: Helvetica;

        `}</style>
          <h2>Tap Room</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

      </div>
    );
  }


  export default Header;
