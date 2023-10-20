# React + Vite

E-Comerce-Garelli

Este proyecto es una plataforma de comercio on-line para el curso de react de Coder House. Además de la estructura de la configuración de de React + Vite dentro de la carpeta src estan las siguientes carpetas:
    components: Dentro estan separados en carpetas los componentes de manera individual que componen la pagina web. Además estan agrupapados dentro de componentBarrel.js: Acá los componentes estan agrupados segun su contenido. En Detalles estan los componentes que renderizan algunos elementos minimos con nada o casi nada de lógica. En Contenedores estan los componentes que renderizan un grupo de elementos mas grande sin usar lógica. En Contenedores Lógicos estan los componentes que renderizan otros componentes pero que contienen las funciones que operan con los datos.

    context: Dentro esta CartContext.
      
    routes: Dentro esta el componente navegador Navegador donde se define la lógica y las rutas para que funcione el Router-Dom.

    pages: Dentro estan los componentes que definen las paginas que renderiza el Navegador según disponga la hoja de ruta. Todas contienen algo de lógica para operar los datos. En particular el componente Loyout maneja el Sesion Storage.

    firebase: Dentro esta config.js con la configuración de base para utilizar la base de datos de firestore.

La lógica de renderización parte del componente App donde se renderiza CartContex con el Navegador como children. 
    CartContex contiene las variables y la lógica que se utiliza para renderizar el carro de compras.
    Navegador contiene el proveedor de las rutas para poder renderizar las diferentes paginas del sitio web. 

Todas las paginas renderizan el Layout que contiene la NavBar (con los botones de acceso a las diferentes paginas) y el footer (que tiene iconos decorativos) recibiendo como childrens los componentes contenedores "lógicos" a renderizar. ItemDetail contiene dentro de si la lógica para renderizar los componentes.