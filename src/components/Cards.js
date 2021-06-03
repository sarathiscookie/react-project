import './Cards.css';

function Cards(props) {
    return (
        <div className="backgrounds">{ props.children }</div>
    )
}

export default Cards;