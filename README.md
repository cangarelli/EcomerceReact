**E-Comerce-Garelli**

Este proyecto es una plataforma de comercio on-line para el curso de react de Coder House. La finalidad es aprender a utilizar la herramienta de React. Espero sea de su agrado. Para facilitar la comprensión del código recomiendo lea el siguiente texto.

Además de la estructura base de la configuración de de React + Vite dentro de la carpeta src estan las siguientes carpetas:

Elemento 1 components: Dentro estan separados en carpetas los componentes de manera individual que componen la pagina web. Además estan agrupapados dentro de componentBarrel.js: Acá los componentes estan agrupados segun su contenido. En Detalles estan los componentes que renderizan algunos elementos minimos con nada o casi nada de lógica. En Contenedores estan los componentes que renderizan un grupo de elementos mas grande sin usar lógica. En Contenedores Lógicos estan los componentes que renderizan otros componentes pero que contienen las funciones que operan con los datos.

Elemento 2 context: Dentro esta CartContext.
      
Elemento 3 routes: Dentro esta el componente navegador Navegador donde se define la lógica y las rutas para que funcione el Router-Dom.

Elemento 4 pages: Dentro estan los componentes que definen las paginas que renderiza el Navegador según disponga la hoja de ruta. Todas contienen algo de lógica para operar los datos. En particular el componente Loyout maneja el Sesion Storage.

Elemento 5 firebase: Dentro esta config.js con la configuración de base para utilizar la base de datos de firestore.

Elemento 6 assets: Dentro estan alguno de los archivos multimedia utilizados en el sitio web.

La lógica de renderización parte del componente App donde se renderiza CartContex con el Navegador como children. 
    CartContex contiene las variables y la lógica que se utiliza para renderizar el carro de compras.
    Navegador contiene el proveedor de las rutas para poder renderizar las diferentes paginas del sitio web. 

Todas las paginas renderizan el Layout que contiene la NavBar (con los botones de acceso a las diferentes paginas) y el footer (que tiene iconos decorativos) recibiendo como childrens los componentes contenedores "lógicos" a renderizar. ItemDetail y CheckOut contienen dentro de si la lógica para renderizar los componentes.

Elemento 1 **Renderizado de lista de productos**
Las pages Home y ItemListCategory renderizan el componente ItemListConteiner que recuerpa de Firebase el array de productos (usando useParams para evaluar si filtra por categoria definida en la url o pide todos los datos) para renderizar ItemList. En ItemList se utiliza el metodo map para renderizar por cada producto un componente ProductCard que contenga un boton de ver más que lleve a la pagina ItemDetail utilizando el id del producto que renderiza cada componente por separado. En ProductCard se renderizan algunos de los componentes que en el componentBarrel.js figuran debajo de // Detalles.
    
Elemento 2 **Renderizado de detalle de producto**
La page ItemDetail recupera de Firebase el array del producto que identifica por el id de la url utilizando useParams y renderiza los datos a traves del componente ItemDetail. Este ultimo contiene al componente ButtonConteiner (donde esta la logica que compara la cantidad a agregar con el stock disponible) y el boton agregar al carrito cuya logica esta en CartContext.  En ProductDetail se renderizan  los componentes que en el componentBarrel.js figuran debajo de // Detalles.

Elemento 3 **Apartados de la NavBar**
En la NavBar se renderizan los links para acceder a las diferentes paginas del sitio. 
   El link a la pagina de contacto renderiza la page Consultas dentro de la cual se renderiza el componente Contacto. En este esta la lógica y la renderización de un formulario de contacto con tres imputs/valores (nombre, email y consulta) y el submit.
    El link al carrito a través del CartWidget. Este ultimo renderiza el icono del carro de compras con un numero que lleva la cuenta de los productos agregados al carrito.

Elemento 4 **Carrito de compras**
En la page Carrito se renderiza una lista de los productos agregados a la variable carrito de CartContext: Nombre, cantidad, precio * cantidad y precio total (calculado con la logica de CartContext). Hay un boton Vaciar (cuya lógica esta en el CartWidget) y hay un boton de finalizar compra que lleva a la page CheckOut.

Elemento 5 **CheckOut**
En la page CheckOut hay un formulario para tomar el nombre y el mail del cliente y luego subirlo (con la lógica del boton comprar) con el array de carrito y el precio total a Firebase. El bonton Comprar tambien vacia la variable carrito de CartContext.