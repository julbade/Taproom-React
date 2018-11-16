import React from 'react';
import homePicture from '../assets/image/Taproom.jpg';




function Home() {

    return (
      <div>
        <style jsx>{`
          font-family: Helvetica;
          img {
            width: 100%;
            height: auto;
          }
        `}</style>
          <img src={homePicture}/>


      </div>
    );
  }


  export default Home;
