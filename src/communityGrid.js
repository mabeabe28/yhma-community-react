import React, { Component } from 'react';

import Person from './Person';
import SelectedPerson from './SelectedPerson';

class communityGrid extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.myRef = React.createRef();
    this.state = {
      selected : {}
    }
  }

  handleClick(id){
    if(id.yhmac_id !== this.state.selected.yhmac_id){
      this.setState({selected:id});
      document.getElementById(`person-${id.yhmac_id}`).scrollIntoView({behavior: "smooth", block: "center"});
    }
    else{
      this.setState({selected:{}});
    }
  }

  render(props) {
    //console.log(this);
    return (
      <div>
        <div className="yhmac-grid">
              <ul className="gridWrapper">
              {this.props.data.map((person, i) => (
                  <li key={i} className="gridItem">
                    <Person
                      person={person}
                      handleClick={this.handleClick}
                      selected={this.state.selected}
                      ref={this.myRef}
                    />
                  </li>
              ))}
              </ul>
        </div>
        <div className="yhmac-selected">
          <SelectedPerson
            person={this.state.selected}
          />
        </div>
      </div>
    );
  }
}

export default communityGrid;
