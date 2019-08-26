import React, { Component } from 'react'


export class UserList extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let user_list = this.props.user_list;
      let funcChangeCurrentSelectedUser = this.props
        .funcChangeCurrentSelectedUser;
      return (
        <div className="user_list">
          {user_list.map(function(name, index) {
            return (
              <div className="div_25vw"
                key={index}
                onClick={() => {
                  funcChangeCurrentSelectedUser(index);
                }}
              >
                {name}
              </div>
            );
          })}
        </div>
      );
    }
  }
  