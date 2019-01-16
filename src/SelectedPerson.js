import React, { Component } from 'react';

class SelectedPerson extends Component {

  render() {
    console.log('render')
    const personObj = this.props.person;
    const fade = "fade";
    return (
      <div className="yhmac-person--selected">
        {personObj.name}
        <img className="fit" src={personObj.user_photo} alt={personObj.name}/>
      </div>
    );
  }
}

export default SelectedPerson;
