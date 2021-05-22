import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'     

class SelectedBeast extends React.Component{
    
  handleClose = () => {
    this.props.handleClose()
  }

    render(){



        return(

             <Modal show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>

                    
                      <Modal.Title>{this.props.selectedAnimal.title} </Modal.Title>

                    </Modal.Header>
                    <Card.Img  variant="top" src={this.props.selectedAnimal.image_url} />
                    <Modal.Body>{this.props.selectedAnimal.description}</Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={this.props.handleClose}>
                        Close
                      </Button>
                      
                    </Modal.Footer>
                  </Modal> 
        )

    }
}


export default SelectedBeast;