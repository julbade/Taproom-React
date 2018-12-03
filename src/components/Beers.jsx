import React from 'react';
import homePicture from '../assets/image/Taproom.jpeg';
import KegList from './KegList';
import PropTypes from 'prop-types';


class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegListVisible: false
    };
    this.handleAddBeerConfirmation = this.handleAddBeerConfirmation.bind(this);
  }

  //Dont need this
  // handleAddBeerConfirmation() {
  //   console.log('I am in handleAddBeer');
  //   this.setState({kegListVisible: true});
  // }

  render() {
    let currentContent = null;
    console.log(this.state.kegListVisible)
      currentContent = <KegList keglist={this.props.keglist}/>; 

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
          <h1>Our Best Beers</h1>
          <br/>
          {currentContent}
        </div>
      </div>

    );
  }
}


Beers.propTypes = {
  keglist: PropTypes.array
};

export default Beers;
