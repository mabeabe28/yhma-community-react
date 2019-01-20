import React, { Component } from 'react';

class SelectedPerson extends Component {


  render() {
    const personObj = this.props.person;

    let mainText = "YHMA: Community";
    let description = "Spotlighting individuals with a cause, creative and talented members from the community.";

    if(this.props.person.yhmac_id !== undefined){
      mainText = personObj.name;
      description = personObj.description;
    }


    return (
      <div className="yhmac-selected__container">
        <div className="yhmac-person-text__wrapper">
          <div key={personObj.yhmac_id} className={`yhmac-person-text selected reveal-text-animation`}>
            <h1>{mainText}</h1>
          </div>
          <div key={`${personObj.yhmac_id}--desc`} className="desc reveal-text-animation">
            {description}
          </div>
        </div>

        {/*<img className="fit" src={personObj.user_photo} alt={personObj.name}/>*/}
      </div>
    );
  }
}

export default SelectedPerson;
