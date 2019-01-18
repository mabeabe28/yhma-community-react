import React, { Component } from 'react';

class SelectedPerson extends Component {
  render() {
    console.log('this',this);
    const personObj = this.props.person;
    return (
      <div className="yhmac-person-text__container">
      {(this.props.person.yhmac_id !== undefined) && (
        <div className="yhmac-person-text selected reveal-text">
          <h1>{personObj.name}</h1>
        </div>)}
        {/*<img className="fit" src={personObj.user_photo} alt={personObj.name}/>*/}
      </div>
    );
  }
}

export default SelectedPerson;
