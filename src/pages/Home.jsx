import MovieCards from '../components/MovieCards'
import { useState, useEffect } from 'react'

export default function Home() {

  const [movies, setMovies] = useState([])
  const [searchvalue, setSearchValue] = useState("")
  const filteredValue = movies.filter(movie => movie.title.toLowerCase().includes(searchvalue.toLowerCase()))

  useEffect(() => {

    const apiKey = import.meta.env.VITE_API_KEY
    const fetchMovies = async () =>{

      try{       
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        const data = await response.json()
        const movieResult = data.results
        setMovies(movieResult)
      }

      catch(error){
        console.log(error)
      }
    }
    fetchMovies()
  }, [])


  return (
    <div>
      <div className='d-flex justify-content-center'>
        <form className="d-flex py-4 pb-5" role="search">
          <input value={searchvalue} onChange={(e) =>setSearchValue(e.target.value)} className="search-bar me-2" type="search" placeholder=" Search for movies" aria-label="Search" />
        </form>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {
          filteredValue.map((movie, _) =>(
            <MovieCards key={movie.id} {...movie}/>
          ))
        }      
      </div>
    </div>
  )
}
