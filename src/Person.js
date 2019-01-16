import React, { Component } from 'react';

class Person extends Component {

  render() {
    const personObj = this.props.person;
    return (
      <div className="yhmac-person" onClick={() => this.props.handleClick(personObj)}>
        <img className="yhmac-person__image" src={personObj.user_photo} alt={personObj.name} />
        {personObj.name}
      </div>
    );
  }
}

export default Person;
