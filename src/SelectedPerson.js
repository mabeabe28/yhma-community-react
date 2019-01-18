import React, { Component } from 'react';

class SelectedPerson extends Component {


  render() {
    const personObj = this.props.person;

    return (
      <div className="yhmac-selected__container">
      {(this.props.person.yhmac_id !== undefined) && (
        <div key={personObj.yhmac_id} className={`yhmac-person-text selected reveal-text-animation`}>
          <h1>{personObj.name}</h1>
        </div>)}
        {/*<img className="fit" src={personObj.user_photo} alt={personObj.name}/>*/}
      </div>
    );
  }
}

export default SelectedPerson;
