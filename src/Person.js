import React, { Component } from 'react';

class Person extends Component {

  render() {
    const personObj = this.props.person;
    const selectedObj = this.props.selected;
    let selectedClass = "yhmac-person not-selected";
    if(personObj.yhmac_id === selectedObj.yhmac_id){
      selectedClass = "yhmac-person selected";
    }
    return (
      <div className={selectedClass} onClick={() => this.props.handleClick(personObj)}>
        <img className="yhmac-person__image fit" src={personObj.user_photo} alt={personObj.name} />
      </div>
    );
  }
}

export default Person;
