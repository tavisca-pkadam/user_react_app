import React, { Component } from 'react'


export class UserDetails extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props);
      this.state = {
        name: ""
      };
      this.handleChange = this.handleChange.bind(this);
  
    }
  
    handleChange(e) {
      this.setState({name: e.target.value});
    }
  
    render() {
      let current_name = this.props.user_name;
      let name = this.state.name;
      let funcChangeUserName = this.props.funcChangeUserName;
      return (
        <div className="user_details">
          <div className="div_65vw">Current User Name -: {current_name}</div>
          <div className="div_65vw">
            <input value={name} onChange={this.handleChange}></input>
          </div>
          <div className="div_65vw"
            onClick={() => {
              funcChangeUserName(name);
              this.setState({name: ""})
            }}
          >
            ChangeName
          </div>
        </div>
      );
    }
  }