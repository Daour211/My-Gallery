import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfPat: 0,

            
        }
    }

     

    addNumberOfPat = () => {
        this.setState({
            numberOfPat: this.state.numberOfPat + 1,
            
    })
    
}
renderingSelectedAnimal = () => {
    this.props.renderingSelectedAnimal(this.props.title)
}


    render() {



        return (
            // <div>
            //     <h2>{this.props.title}</h2>
            //     <img onClick={this.addNumberOfPat} src={this.props.imgsrc} alt={this.props.title}/>
            //     <p >{this.props.description} </p>
            //     <p> 😸{this.state.numberOfPat} </p>
            // </div>

           
            <Card style={{ width: '18rem', }}>
                <Card.Img  onClick={this.renderingSelectedAnimal}  variant="top" src={this.props.imgsrc} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    😸Number of Pats: {this.state.numberOfPat} 
                    </Card.Text>
                    <Button  onClick={this.addNumberOfPat}variant="primary">pick</Button>
                </Card.Body>
            </Card>

        )
    }

}

export default HornedBeast;