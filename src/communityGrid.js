import React, { Component } from 'react';

import Person from './Person';
import SelectedPerson from './SelectedPerson';
import IssueNo from './IssueNo';


class communityGrid extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.gridWindowRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      selected : {},
      showLeftScroll:false,
      showRightScroll:true
    }
  }

  componentDidMount() {
    document.getElementById(`gridWindow`).addEventListener("scroll", this.handleScroll);
  }

  handleScroll(){
    const offsetLeft = document.getElementById(`gridWindow`).offsetLeft;
    const leftPosition = document.getElementById(`gridWindow`).scrollLeft;

    if(leftPosition > 0){
      this.setState({showLeftScroll:true});
    }

    if(leftPosition === 0){
     this.setState({showLeftScroll:false});
    }

    if(leftPosition === offsetLeft){
     this.setState({showRightScroll:false});
    }
  }

  handleClick(id){
    if(id.yhmac_id !== this.state.selected.yhmac_id){
      this.setState({selected:id});
      document.getElementById(`person-${id.yhmac_id}`).scrollIntoView({behavior: "smooth", block: "center"});
    }
    else{
      this.setState({selected:{}});
    }
  }
  gridScroll(direction){
    //console.log('scroll',  this.gridWindowRef);
    //console.log(document.getElementById(`gridWindow`).getBoundingClientRect().left);
    //console.log(document.getElementById(`gridWindow`).getBoundingClientRect().right);

    if(direction === 'right')
      this.gridWindowRef.current.scrollLeft += 400;
    else if(direction === 'left')
      this.gridWindowRef.current.scrollLeft -= 400;
  }
  render(props) {
    //console.log(this);
    return (
      <div>
        <div className="yhmac-grid">
              <ul id="gridWindow" className="gridWrapper" ref={this.gridWindowRef}>
              {this.props.data.map((person, i) => (
                  <li key={i} className="gridItem">
                    <Person
                      person={person}
                      handleClick={this.handleClick}
                      selected={this.state.selected}
                    />
                  </li>
              ))}
              </ul>
              <div className="yhmac-grid__scroll">
                <div className="yhmac-grid__scroll-button-container">
                {this.state.showLeftScroll &&
                  <span className="yhmac-grid__scroll-button yhmac-grid__scroll-button--left" onClick={()=>this.gridScroll('left')}>></span>
                }
                {this.state.showRightScroll &&
                  <span className="yhmac-grid__scroll-button yhmac-grid__scroll-button--right" onClick={()=>this.gridScroll('right')}>></span>
                }
                </div>
              </div>
        </div>

        <div className="yhmac-issue">
          <IssueNo
            person={this.state.selected}
          />
        </div>
        <div className="yhmac-selected">
          <SelectedPerson
            person={this.state.selected}
          />
        </div>
      </div>
    );
  }
}

export default communityGrid;
