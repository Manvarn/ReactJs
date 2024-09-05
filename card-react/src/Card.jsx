import profilpic from './assets/img1.jpg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilpic} alt="" />
            <h2 className='card-title'>Manvar Nikhil</h2>
            <p className='card-text'>I am a Full Stack Developer</p>
        </div>
    );
}

export default Card