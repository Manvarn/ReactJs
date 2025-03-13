export const NetflixCard = (props) => {

    const { name,id,rating,description,cast,genre,watch_url} = props.currElem
    return(
        <li >
          <img src="maxresdefault.jpg" height= "40%" width= "40%"/>
     <h1>Name : {name}</h1>
     <h2>id: {id}</h2>
     <h3>Rating : {rating}</h3>
     <p>summary : {description}</p>
     <p>cast: {cast}</p>
     <p>genre: {genre}</p>
      <a href={watch_url} target="_blank">
     <button>Watch now</button>
      </a>
        </li>
    )
}
