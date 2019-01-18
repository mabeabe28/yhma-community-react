import React, { Component } from 'react';
import './styles.css';
//import Person from './Person';
import CommunityGrid from './communityGrid';
import yhmacData from './data/yhma-community.json';

class App extends Component {

  getData(){
    return yhmacData;
  }


  render(props) {
    return (
      <div className="yhmac-app">
          <CommunityGrid
            data={this.getData()}
          />
      </div>
    );
  }
}

export default App;
