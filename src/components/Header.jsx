import React from 'react';
import { Link } from 'react-router-dom';



function Header() {

  return (
    <div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Diplomata SC');
          font-family: serif;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          background-color: black;
          color: white;
          position: sticky;
          top: 0;
          z-index: 1;
          opacity: 0.8;

          p {
            margin-top: 18px;
            margin-right: 100px;
            color: white;
            font-size: 20px;
          }

          h2 {
            margin-left: 50px;
            margin-top: 15px;
            font-family: 'Diplomata SC';
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
