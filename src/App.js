import React, { Component } from 'react';
import './styles.css';
//import Person from './Person';
import CommunityGrid from './communityGrid';
import yhmacData from './data/yhma-community.json';

class App extends Component {

  getData(){
    console.log('json',yhmacData);
    return yhmacData;
  }


  render(props) {
    console.log(this.props);
    return (
      <div className="yhmac-app">
        <div className="yhmac-grid">

          <CommunityGrid
            data={this.getData()}
          />

        </div>
      </div>
    );
  }
}

export default App;
