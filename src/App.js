import React from 'react';
import { Container,Row } from 'reactstrap';
import './App.css';
import Producto from './Components/Producto.jsx'

function App() {
  return (
    <Container className="App">
      <Row>
        < Producto 
          titulo = 'Mote con Huesillo'
          imagen = 'https://www.unimarc.cl/wp-content/files_mf/1599771510600X600MOTECONHUESILLO.jpg'
          precio = '$ 3.990'
          descripcion = 'Bien Helado' />
        < Producto 
          titulo = 'Terremoto'
          imagen = 'https://www.unimarc.cl/wp-content/files_mf/1600289338600X600TERREMOTO.jpg'
          precio = '$ 3.999'
          descripcion = 'Con Harto Helado' />
        <Producto 
          titulo='Manzana Confitada' 
          imagen='https://www.unimarc.cl/wp-content/files_mf/1600288732600X600MANZANASCONFITADAS.jpg'  
          precio='$ 2.980' 
          descripcion='No esta envenenada'/>
        <Producto 
          titulo='Pan Amasado' 
          imagen='https://www.unimarc.cl/wp-content/files_mf/1600288498600X600PANAMASADO.jpg'  
          precio='$ 3.890' 
          descripcion='Justo para la Dieta'/>
        <Producto 
          titulo='Chancho En Piedra' 
          imagen='https://www.unimarc.cl/wp-content/files_mf/1599668144600X600CHANCHOENPIEDRACHAPALELE.jpg'  
          precio='$ 3.000' 
          descripcion='Bien Cuchareado'/>
        </Row>
    </Container>
  );
}

export default App;
