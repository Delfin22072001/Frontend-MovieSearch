import { Link } from "react-router-dom"

export default function MovieCards( {id, original_title, title, release_date, poster_path}) {

  return (
    <div>
      <div className="card bg-dark text-white">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <div className='px-2 py-3'>
          <h5 id="movie-title" className="card-title">{original_title}</h5>
          <p className="card-text">Release Date: {release_date}</p>
          <Link to={`/moviedetails/${id}`}><button className="my-btn text-decoration-none text-dark">View Details</button></Link>
        </div>
      </div>
    </div>
  )
}
