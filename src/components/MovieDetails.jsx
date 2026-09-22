
export default function MovieDetails() {

  return (
    <div>
      <div className="card">
        <img src={image} alt={alt} />
        <div className='px-2 py-3'>
          <h4 id="movie-title" className="card-title">{title}</h4>
          <p className="card-text">Year: {year}</p>
          <p className='card-text'>{genre}</p>
          <button className="my-btn text-decoration-none text-dark">View Details</button>
        </div>
      </div>
    </div>
  )
}
