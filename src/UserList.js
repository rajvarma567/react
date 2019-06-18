import React from 'react';

class UserList extends React.Component {
    render() { 
        return (
            <div>
                <li>
           <img onClick={this.props.ka} src={this.props.ja[1].url}></img>
           <img src={this.props.ja[0].url}></img>
           </li>
           </div>
           );
    }
}

export default UserList;