import React from "react";

export function Ad(props){
    if(!props.clicktrfs){
        return null;
    }
    return(
        <div>
            <img 
            style={{width:"100vw"}}
            src="https://i.postimg.cc/4dpjFwkD/Untitled.jpg"
            alt="배너"
            />
        </div>
  );
}

export default class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = { click: true };
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState((state) => ({
        click: !state.click,
      }));
    }
  
    render() {
      return (
        <div>
          <Ad clicktrfs={this.state.click} />
          <button onClick={this.handleToggleClick}>
            {this.state.click ? "광고 안보기" : "광고 보기"}
          </button>
        </div>
      );
    }
  }