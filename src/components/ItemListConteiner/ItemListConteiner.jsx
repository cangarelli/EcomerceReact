// Compnentes de React
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
/* collection permite marcar toda una coleccion de datos de toda la base de datos definiendo una ruta y getDocs es el Fetch para esa ruta */
/* query y where */
// Estilos
import "./style.css";

// Components propios
import { ItemList } from "../componentBarrel";
import { db } from "../../firebase/config"

// Componente propiamente dicho
const ItemListConteiner = (props) => {
    // Parametros
    const { greetings } = props;
    const [ productos, setProductos ] = useState ([])
    const [isLoading, setIsLoading] = useState(true);
    const  { id }  = useParams();
    
    // Logica   
    useEffect(() => {
        // Parametros
        const refProductos = collection(db, "productos");
        const refCategory = id ? query (refProductos, where("categoria", "==", id)) : refProductos

        //Fetch
        getDocs (refCategory)
            .then((res) => {
                setIsLoading(false);       
                setProductos (res.docs.map((doc) => {return {...doc.data(), id: doc.id };}));
            })
            .catch ((err) => {
                setIsLoading(false);
                console.log (err)
            })       
    }, [id]);

    // Renderización  de componente
    return (
        <div className='ItemListConteiner'>
            <span className='--span'>¡Bienvendio {greetings}!</span>
            {isLoading ? <h2> CARGANDO... </h2> 
            : <ItemList productlist = {productos}/>}
        </div>
    )
       

};

export default ItemListConteiner;

