import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import Carro from './Carro'

 class Navegacion extends Component {
    render() {
        return (
            <Navbar color ='light' light expand='md'>
                <NavbarBrand href='/'>{this.props.titulo}</NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                    <Carro/>
                    </NavItem>
                
                </Nav>
            </Navbar>
        )
    }
}

export default Navegacion
