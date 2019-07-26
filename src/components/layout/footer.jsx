import React, { Component } from 'react';

class Footer extends Component {

    footer = {
        background: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    footerP = {
        fontSize: '12px',
        marginBottom: '0px',
        margin: '10px 0',
    }

    render() {
        return (
            <React.Fragment>
                <footer style={this.footer}>
                    <div className='footerWrapper'>
                    <p style={this.footerP}>© Copyright 2019 Counter - All Rights Reserved</p>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;