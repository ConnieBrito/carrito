

import React from 'react'
import {Col,  Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import './Producto.css'

const Producto = ({titulo,imagen,precio,descripcion}) => {
    return (
        <Col  sm='4'>
        <Card className='Card' body outline color='primary'>
            <CardImg src= {imagen}/>
            <CardBody>
                <CardTitle> {titulo}</CardTitle>
                <CardSubtitle> <b>valor :</b> {precio}</CardSubtitle>
                <CardText>
                   {descripcion}
                </CardText>
                <Button className='Button'>Comprar</Button>
                <Button className='Button'>Ver Ficha</Button>
            </CardBody>
        </Card>
        </Col>
    )
}

export default Producto

