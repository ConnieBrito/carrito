import React, { Component } from 'react';
import {Button, CardImg, Container,Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import '../Components/FichaProducto.css'


class FichaProducto extends Component {

    constructor({props}){
        super();

        this.state = {
            modal:false
        }

        this.toggle=this.toggle.bind(this);
        console.log(props.props)
    }


    toggle(){
        this.setState(prevState => ({
            modal:!prevState.modal
        }))

    }


    render() {
        return (
            <Container>
            <Button onClick={this.toggle}>
               ver ficha 
            </Button>
            <Modal isOpen={this.state.modal}>
        <ModalHeader>{this.props.props.titulo}</ModalHeader>
                <ModalBody>
                    <CardImg src={this.props.props.imagen}>
                
                    </CardImg>
                    <p>
                            El detalle es el siguiente:
                        </p>
                        {this.props.props.descripcion}
                        <p>
                            Este producto tiene un valor de : <b>{this.props.props.precio}</b> 
                        </p>
                </ModalBody>
                <ModalFooter className='modalFooter'>
                    <Button color='primary' onClick={this.toggle}> Agregar al Carrito</Button>
                    <Button color='secondary'onClick={this.toggle}> Volver Atrás</Button>
                </ModalFooter>
            </Modal>
            </Container>
        );
    }
}

export default FichaProducto;