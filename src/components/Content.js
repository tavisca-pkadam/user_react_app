import React, { Component } from 'react'
import {UserList} from "./UserList"
import {UserDetails} from "./UserDetails"
export class Content extends React.Component {
    constructor() {
      super();
      let users = [
        "Roger",
        "Adam",
        "Jhon",
        "Arya",
        "Paresh",
        "Arnaw",
        "Alice"
      ];
  
      this.state = {
        user_list: users,
        selected_user: 1
      };
      // this.changeUserName = this.changeUserName.bind(this);
      // this.changeSelectedUser = this.changeSelectedUser.bind(this);
    }
  
    changeUserName(changedName) {
      console.log("changeUserName");
      let currentUser = this.state.selected_user;
  
      let newUserList = this.state.user_list;
      newUserList[currentUser] = changedName;
      this.setState({
        user_list: newUserList
      });
    }
  
    changeSelectedUser(id) {
      console.log("changeSelectedUser");
  
      this.setState({
        selected_user: id
      });
    }
  
    render() {
  
      let user_list = this.state.user_list;
      let current_user = this.state.user_list[this.state.selected_user];
      return (
        <div className="content">
          <UserList
            user_list={user_list}
            funcChangeCurrentSelectedUser={this.changeSelectedUser.bind(this)}
          />
     
          <UserDetails
            user_name={current_user}
            funcChangeUserName={this.changeUserName.bind(this)}
          />
        </div>
      );
    }
  }