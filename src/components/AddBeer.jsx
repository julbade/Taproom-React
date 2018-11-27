import React from 'react';
import homePicture from '../assets/image/Taproom.jpeg';




function AddBeer() {

  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    _name.value = '';
    _brewer.value = '';
    _description.value = '';
    _abv.value = '';
    _price.value = '';
    _remaining.value = '';
  }

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
         input {
           
           display: flex;
         }
        `}</style>
      <img src={homePicture}/>
      <div className="welcomePage">
        <h1>Add Beers</h1>
        <br/>
        <form onSubmit={handleNewBeerFormSubmission}>
        <label>Name:</label><input
          id='name'
          type='text'
          placeholder='Name'
          ref={(input) => {_name = input;}} />
        <br />
        <br />
        <label>Brewer:</label>
        <input
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}} />
        <br />
        <br />
        <label>Description:</label>
        <input
          id='description'
          type='text'
          placeholder='Description'
          ref={(input) => {_description = input;}} />
        <br />
        <br />
        <label>ABV:</label>
        <input
          id='abv'
          type='text'
          placeholder='ABV'
          ref={(input) => {_abv = input;}} />
         <br />
         <br />
        <label>Price:</label>
        <input
          id='price'
          type='text'
          placeholder='Price'
          ref={(input) => {_price = input;}} />
        <br />
        <br />
        <label>Remaining:</label>
        <input
          id='remaining'
          type='text'
          placeholder='Remaining'
          ref={(input) => {_remaining = input;}} />
        <br />
        <br />
        <button className="btn btn-success" type='submit'>ADD!</button>
      </form>
      </div>
    </div>

  );
}


export default AddBeer;
