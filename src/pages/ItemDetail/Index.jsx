//Componentes de react
import { useState, useEffect, React } from 'react';
import { useParams } from 'react-router-dom'; 
import { doc, getDoc } from "firebase/firestore"; 
/* doc sirve para marcar una referencia directa a un elemento de la base de datos y Get Doc es el FETCH para esa url*/

// Estilos
import "./ItemDetail.css";

//Componentes propios
import { Layout, ProductDetail } from "../../components/componentBarrel";
import { db } from "../../firebase/config"



const ItemDetail = () => {

  // Parametros
  const [producto, setProducto] = useState ([]);
  const [isLoading, setIsLoading] = useState(true);
  const { productid } = useParams();

  // Logica
  useEffect(() => {
    const refDoc = doc (db, "productos", productid)
    
    getDoc(refDoc)
      .then((res) => {
        setIsLoading(false);
        setProducto ({...res.data(), id: res.id});
      })
      .catch ((err) => {
          setIsLoading(false);
          console.log (err);
      })       
  }, []);

  // Renderizado
  return (   
      <Layout >
        {isLoading ? <h2> Cargando... </h2> : <ProductDetail product= {producto}/>}
      </Layout>
    
  )
}

export default ItemDetail;