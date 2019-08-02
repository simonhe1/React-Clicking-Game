import React, { Component } from 'react';
import CharacterCard from './characterCard';
import { Container, Row, Col } from 'reactstrap';

class CharacterCards extends Component {
    state = { 
        characters:[
            {name:'images/Beth.png'},
            {name:'images/birdPerson.png'},
            {name:'images/evilMorty.png'},
            {name:'images/giantHead.png'},
            {name:'images/goldenFord.png'},
            {name:'images/Jerry.png'},
            {name:'images/Jessica.png'},
            {name:'images/Meeseeks.png'},
            {name:'images/Morty.png'},
            {name:'images/Mr.png'},
            {name:'images/Rick.png'},
            {name:'images/Summer.png'},
        ]
    }

    shuffle = () => {
        const copy = [...this.state.characters];
        for(let i=0;i<copy.length;i++){
            copy[i] = copy[Math.floor(Math.random()*copy.length)];
        }
        this.setState({ copy });
    }

    printValues = () => {
        this.state.characters.map(link => (
            console.log("Link: ",link)
        ));
    }

    render() { 
        return ( 
            <React.Fragment>
                <Container fluid>
                    <Row>
                        {this.state.characters.map(character => (
                            <Col sm="4" md="3">
                                <CharacterCard 
                                    key={character.name}
                                    clicked={this.shuffle}
                                    characters={character}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <button onClick={this.printValues}></button>
            </React.Fragment>
         );
    }
}
 
export default CharacterCards;