import React, { Component } from 'react';

class IssueNo extends Component {


  render() {
    const personObj = this.props.person;

    return (
      <div className="yhmac-issue__container">
          <div className="yhmac-issue__number">
            <div className="typewriter" key={`${personObj.yhmac_id}--issueNo`}>
              {personObj.issueNo}
            </div>
          </div>
      </div>
    );
  }
}

export default IssueNo;
