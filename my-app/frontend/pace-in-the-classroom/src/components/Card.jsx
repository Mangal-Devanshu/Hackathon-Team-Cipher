import '../styling/Card.css'

function Card(props) {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.img} className="img-tag img-fluid rounded-start" alt="Dhairya Prajapati" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{props.name}</h5>
                        <p className="card-text">{props.field}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;