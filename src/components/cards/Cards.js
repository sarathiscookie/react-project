import './Cards.css'

function Cards(props) {

  const clickHandler = () => {
    console.log("Clicked");
  }

  return (
    <div>
      <div className="card text-dark bg-light mb-3 maxWidthClass">
        <div className="card-header">Product</div>
        <div className="card-body">
          <h5 className="card-title">{props.name} <button type="button" className="btn btn-primary" onClick={clickHandler}>Click Here!</button></h5>
          <p className="card-text">
            {props.description}
          </p>
        </div>
        <div className="card-footer">
          ${props.price}
        </div>
      </div>
      
    </div>
  );
}


export default Cards;