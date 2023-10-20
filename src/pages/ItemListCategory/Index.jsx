// Componentes de react
import React from 'react';

// Estilos
import "./ItemListCategory.css";

// Componentes propios
import { Layout, ItemListConteiner } from "../../components/componentBarrel";

const ItemListCategory = () => {
  return (
    <Layout >
      <ItemListConteiner greetings="pepe" />     
    </Layout>
  )
}

export default ItemListCategory;