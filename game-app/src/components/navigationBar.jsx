import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

class Navbar extends Component {

    styles = {
        backgroundColor: '#5133a4',
        textAlign: 'center',
        height: '70px',
        fontWeight: 'bold',
        fontSize: 'calc(10px + 14 * (100vw - 320px)/ 800)',
        fontFamily: 'sans-serif',
    }
    
    render() { 
        return ( 
            <Container 
                fluid 
                className="text-white pt-3"
                style={this.styles}
            >
                <Row>
                    <Col xs="2" sm="4" md="2" >
                        Clicky Game
                    </Col>
                    <Col xs="3" sm="4" md="6">
                        {this.props.middleMessage}
                    </Col>
                    <Col xs="7" sm="4" md="4">
                        {`Score: ${this.props.score} | 
                        Top Score: ${this.props.highScore}`}
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default Navbar;