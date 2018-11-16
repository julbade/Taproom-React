import React from 'react';
import homePicture from '../assets/image/Taproom.jpg';
import homePicture2 from '../assets/image/Taproom2.jpeg';
import homePicture3 from '../assets/image/Taproom3.jpg';




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
          <img className="mySlides" src={homePicture2}/>
          <img className="mySlides" src={homePicture3}/>


      </div>
    );
  }

  export default Home;
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}
