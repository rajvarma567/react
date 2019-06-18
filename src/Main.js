import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import { User } from './User';
import UserList from './UserList';
export class Main extends React.Component{
    render(){
        const data = this.props.user;
        let print = function(){
            console.log(data[0].id)
        }
        return(
            <div>
           <UserList ja ={data} ka= {print} />
            </div>
        );
    }
}