import React, { Component } from 'react';

import Person from './Person';
import SelectedPerson from './SelectedPerson';

class communityGrid extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      selected : {}
    }
  }

  handleClick(id){
    this.setState({selected:id});
  }

  render(props) {
    //console.log(this.props);
    return (
      <div>
        <div class="grid">
        {this.props.data.map((person, i) => (

            <div key={i} >
              <Person
                person={person}
                handleClick={this.handleClick}
              />
            </div>

        ))}
        </div>
        {(this.state.selected.yhmac_id !== undefined) && (
          <div>
            <SelectedPerson
              person={this.state.selected}
            />
          </div>

        )}


      </div>
    );
  }
}

export default communityGrid;
