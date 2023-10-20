// Compnentes de React

// Estilos
import "./style.css";

// Components propios


// Componente propiamente dicho

const Title = (props) => {
    const {texto} = props;
    return (
        <h1 className="title">
            {texto}
        </h1>
    );
};

export default Title;