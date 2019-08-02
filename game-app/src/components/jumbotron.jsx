import React, { Component } from 'react';
import { Jumbotron} from 'reactstrap';
import Geometry from '../img/geometry.png';

class Header extends Component {
    styles={
        textAlign: 'center',
        backgroundImage: `url(${Geometry})`
    }

    render() { 
        return ( 
            <header>
                <Jumbotron 
                    fluid
                    className="text-white"
                    style={this.styles}
                >
                    <h1>Clicky Game!</h1>
                    <h2>Click on an image to earn points, but don't
                        click on any more than once!
                    </h2>
                </Jumbotron>
            </header>
         );
    }
}
 
export default Header;