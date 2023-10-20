// Compnentes de React

// Estilos
import "./style.css";

// Components propios


// Componente propiamente dicho

const SubTitle = (props) => {
    const {texto} = props;
    
    return (
        <h2 className="subTitle">
            {texto}
        </h2>
    );
};

export default SubTitle;