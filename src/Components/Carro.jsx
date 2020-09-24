import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class Carro extends Component {
    render() {
        return (
            <div>
               <Button color='info'>
               <span class="material-icons">shopping_cart</span>
                   <Badge color='secondary'>0</Badge>
              </Button> 
            </div>
        );
    }
}

export default Carro;