import React from 'react';
import homePicture from '../assets/image/Taproom.jpeg';




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
            border: 5px solid white;
            padding: 100px;
            marging: 100px;
            border-radius: 20px;
            opacity: 0.6;
            background-color: black;
            box-sizing: content-box;
            width: 420px;
            height: 300px;
            overflow: scroll;
          }
          h1 {
            margin-bottom: 40px;
            font-size: 50px;
            font-weight: bold;
            font-family: 'Bubbler One';
            text-align: center;
          }
        `}</style>
      <img src={homePicture}/>
      <div className="welcomePage">
        <h1>Add Beers</h1>
        <br/>
        
      </div>
    </div>

  );
}


export default Beers;
