import react from "react"

export const Card = (props) => {

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.imagenUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: 'bold' }} >{props.nombre}</h5>
                    <p className="card-text">{props.info} </p>
                    <a href={props.href} className="btn btn-primary" style={{ fontWeight: 'bold' }} >Ver biografia</a>
                </div>
            </div>
        </>)
}

