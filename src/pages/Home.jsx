import EmptyState from '../components/EmptyState'
import MovieCards from '../components/MovieCards'
import { useState } from 'react'

export default function Home(props) {

  const [searchvalue, setSearchValue] = useState("")

  const movieLists = props.allMovies
  const filtered = movieLists.filter((movie) => movie.title.toLowerCase().includes(searchvalue.toLowerCase()))

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <form className="d-flex py-4 pb-5" role="search">
          <input value={searchvalue} onChange={event => setSearchValue(event.target.value)} className="search-bar me-2" type="search" placeholder=" Search for movies" aria-label="Search" />
        </form>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {
          filtered.length > 0 ? (
            filtered.map((movie, index) => (
              <MovieCards key={index} {...movie} />
            ))
          ) : (
            <EmptyState />
          )}
      </div>
    </div>
  )
}
