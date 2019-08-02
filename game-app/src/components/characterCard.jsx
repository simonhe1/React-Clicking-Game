import React, { Component } from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';

class CharacterCard extends Component {

    state = {
        mouseOnTop: true
    }

    hoverStyling = () => {
        return {
            boxShadow: '5px 10px',
            cursor: 'pointer'
        }
    }

    render() { 
        const {name} = this.props.characters;
        return ( 
            <div>
            <Card className="mb-2">
                <CardBody>
                    <CardImg
                        className="img-fluid"
                        onClick={this.props.clicked}
                        src={name}
                        alt="No image sorry"
                        // style={this.styles}
                        onMouseEnter={this.hoverStyling}
                    />
                </CardBody>
            </Card>
            </div>
        );
    }
}
 
export default CharacterCard;