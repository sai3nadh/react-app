import Hero from "/src/assets/hero.png"
import './Card.css' 

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={Hero} ></img>
            <h2 className="card-title">ddd</h2>
            <p className="card-title">this is the pic</p>
        </div>
    );

}

export default Card