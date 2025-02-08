import profilePic from './assets/popcorn.jpeg'

function Card(){

    return(
    
        <div className="card">
            <img src={profilePic} alt="Popcorn" ></img>
            <h2>Tax Free popcorn</h2>
            <p>I make taxfree popcorn and eat them</p>
        </div>
    );
}

export default Card