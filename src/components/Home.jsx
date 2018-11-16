import React from 'react';
import homePicture from '../assets/image/Taproom.jpeg';

function Home() {

  return (
    <div>
      <style jsx>{`
          font-family: Helvetica;
          img {
            width: 100%;
            height: 800px;
          }
        `}</style>

      <img className="mySlides" src={homePicture}/>



    </div>
  );
}

export default Home;
