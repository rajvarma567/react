import React from 'react';
import UserList from './UserList';

export class User extends React.Component {
    render() { 
       
        const ka = this.props.ja;
        const m = ka.map(user=> user.name);
        return(
          <UserList ss={m}/>
        );
    }
}
 