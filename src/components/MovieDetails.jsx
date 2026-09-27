import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function MovieDetails() {

  const { id } = useParams()
  const [cardData, setCardData] = useState([])

  useEffect(() => {

    const apiKey = import.meta.env.VITE_API_KEY

    const displayDetails = async () =>
    {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      const data = await response.json()
      setCardData(data)
    }
    displayDetails()
    
  }, [id])

  return (
    <div>
      <div className="d-flex justify-content-center my-4">
        <div className="card bg-dark text-white" style={{width:"25rem"}}>
          <img src={`https://image.tmdb.org/t/p/w500${cardData.poster_path}`} alt={cardData.title} />
          <div className='px-2 py-3'>
            <h5 id="movie-title" className="card-title">{cardData.original_title}</h5>
            <p className="card-text">Release Date: {cardData.release_date}</p>
            <p>Overview: {cardData.overview}</p>
            <Link to="/"><button className="my-btn">Back</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
