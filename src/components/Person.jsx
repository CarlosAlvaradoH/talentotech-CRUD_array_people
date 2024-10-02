import PropTypes from "prop-types"

export const Person = ({id, name, img, rol}) => {
    return (
        <div className="col">
            <div className="card" style={{width: "18rem;"}}>
                <img src={img} alt={name} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{rol}</p>
                    <div className="container mb-4 text-center">
                        <button className="btn btn-success mx-2">Editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

Person.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    rol: PropTypes.string,
}