import React, { Component } from 'react';
import routes from './routes';
import history from '../../helpers/history';
import './navbar.css';

class NavBar extends Component {

    constructor(props){
        super(props);

        // console.log(props);
        this.state = {
            pages: routes(),
        }

        this.onPageClick = this.onPageClick.bind(this);
    }

    onPageClick(root) {
        // console.log(root);
        history.push(root);
    }

    render(){
        const pages = this.state.pages;

        return(
            <div className='navbar'>
                <div className='logo'> Seba INC.</div>
                <div className='nav-options'>
                    {pages.map( (value, index) => {
                        return(
                            <button
                                onClick={() => {history.push(value.path)}} 
                                key={index}
                            >
                                {value.name}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default NavBar;