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
    if(id.yhmac_id !== this.state.selected.yhmac_id)
      this.setState({selected:id});
    else
      this.setState({selected:{}});
  }

  render(props) {
    //console.log(this.props);
    return (
      <div>
        <div class="grid">
          <div className="outer">
            <div className="table">
              <ul>
              {this.props.data.map((person, i) => (
                  <li key={i}>
                    <Person
                      person={person}
                      handleClick={this.handleClick}
                      selected={this.state.selected}
                    />
                  </li>
              ))}
              </ul>
            </div>
          </div>
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
