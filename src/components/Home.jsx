import React from 'react';
import homePicture from '../assets/image/Taproom.jpeg';

function Home() {

  return (
    <div>
      <style jsx>{`

          @import url('https://fonts.googleapis.com/css?family=Bubbler One');
          font-family: Helvetica;
          img {
            width: 100%;
            height: 800px;
          }
          .welcomePage {
            position: absolute;
            top: 200px;
            left: 400px;
            color: white;
            text-align: center;
            border: 5px solid white;
            padding: 100px;
            marging: 100px;
            border-radius: 20px;
            opacity: 0.5;
            background-color: black;
          }
          h1 {
            margin-bottom: 50px;
            font-size: 50px;
            font-weight: bold;
            font-family: 'Bubbler One';
          }
          p {
            font-size: 30px;

          }
        `}</style>

      <img className="mySlides" src={homePicture}/>
        <div className="welcomePage">
          <h1>Welcome to Tap Room</h1>
            <p>The best among the rest</p>
        </div>
    </div>
  );
}

export default Home;
