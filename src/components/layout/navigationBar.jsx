import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    state = {
        
    }

    styleNavigationBar = {
        backgroundColor: '#000',
        color: '#fff',
        padding: '10px',
    };

    styleDiv = {
        display: 'flex',
        justifyContent: 'space-between',
    }

    styleLi = {
        display: 'inline-block',
        margin: '0 5px'
    }

    styleNavigationBarH1 = {
        fontSize: '20px',
        marginBottom: '0px'
    }

    userLink = '#'

    styleNavLinks = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 10px',
        color: '#fff',
        textDecoration: 'none',
    }

    styleNavBarSearchForm = {
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottom: '1px solid #fff',
        color: '#fff',
        padding: '0px 7px',
        background: 'transparent',
        width: '600px',
        fontSize: '14px',
    }

    styleUser = {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#fff',
        textDecoration: 'none',
    }

    render() {
        return (
            <React.Fragment>
                <nav className='navigation-bar' style={this.styleNavigationBar}>
                    <div style={this.styleDiv} className='container-fluid'>
                        <h1 style={this.styleNavigationBarH1}>Counter</h1>
                        {/* <form>
                            <input type='text' style={this.styleNavBarSearchForm} />
                        </form> */}
                        <div className='nav-links' style={this.styleNavLinks}>
                            <Link style={this.styleNavLinks} to='/'>Home</Link>
                            <Link style={this.styleNavLinks} to='/products'>Products</Link>
                            <Link style={this.styleNavLinks} to='/about'>About</Link>
                        </div>
                        <div>
                            <Link style={this.styleUser}>User</Link>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavigationBar