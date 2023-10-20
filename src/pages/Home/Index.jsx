// Componentes de React
import React from 'react';

// Estilos
import "./Home.css"

//Componentes propios
import { Layout, ItemListConteiner, ItemList} from "../../components/componentBarrel"

const Home = () => {
  return (
    <Layout>
      <ItemListConteiner greetings="Pepe" />
    </Layout>
  )
}

export default Home;