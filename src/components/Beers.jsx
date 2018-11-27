import React from 'react';
import homePicture from '../assets/image/Taproom.jpeg';
import KegList from './KegList';



function Beers() {

  return (
    <div>
      <style jsx>{`

          @import url('https://fonts.googleapis.com/css?family=Bubbler One');

          img {
            width: 100%;
            height: 700px;
          }
          .welcomePage {
            position: absolute;
            top: 200px;
            left: 420px;
            color: white;
            text-align: center;
            border: 5px solid white;
            padding: 100px;
            marging: 100px;
            border-radius: 20px;
            opacity: 0.6;
            background-color: black;
            box-sizing: content-box;
            width: 400px;
            height: 300px;
            overflow: scroll;
          }
          h1 {
            margin-bottom: 40px;
            font-size: 50px;
            font-weight: bold;
            font-family: 'Bubbler One';
          }
          p {
            font-size: 10px;
            font-family: 'Bubbler One';

          }
        `}</style>
      <img src={homePicture}/>
      <div className="welcomePage">
        <h1>Our Beers</h1>
         <KegList />
      </div>
    </div>

  );
}


export default Beers;
