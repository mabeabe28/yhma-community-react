import React, { Component } from 'react';

class IssueNo extends Component {


  render() {
    const personObj = this.props.person;
    let videoClass = "";
    if(this.props.person.videoBG !== undefined){
      videoClass = "yhmac-issue__number--video";
    }

    return (
      <div className="yhmac-issue__container">
          <div className={`yhmac-issue__number ${videoClass}`}>
            <div className="typewriter" key={`${personObj.yhmac_id}--issueNo`}>
              {personObj.issueNo}
            </div>
          </div>
      </div>
    );
  }
}

export default IssueNo;
