import React from 'react';
import { Container,Row } from 'reactstrap';
import './App.css';
import Producto from './Components/Producto'
import Navegacion from './Components/Navegacion'
import{listaProductos} from '../src/listaProductos.json'
console.log(listaProductos)




class App extends React.Component {
  constructor(){
    super();

    this.state ={
      listaProductos
    }

  }
  render(){
    const arregloComponentes=this.state.listaProductos.map(
    (listaProductos,i) =>{

      return(
        <Producto 
        key={i}
        titulo={listaProductos.titulo}
        imagen={listaProductos.imagen}
        precio={listaProductos.precio}
        descripcion={listaProductos.descripcion}
        stock={listaProductos.stock}
        />
      )

    }
      );
  return (
    <Container className="App">
      <Navegacion titulo='Recetas Unimarc'/> 
      <Row>
       {arregloComponentes}
        </Row>
    </Container>
  );
}
}

export default App;
