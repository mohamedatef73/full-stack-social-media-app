import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { client, urlFor } from "../client"
import { singleMovieQuery } from "../utils/data"
import { MdDownloadForOffline } from "react-icons/md"

const MovieDetail = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(false)

  // const fetchPinDetails = () => {
  //   const query = singleMovieQuery(movieId)

  //   if (query) {
  //     client.fetch(`${query}`).then((data) => {
  //       setLoading(true)
  //       setMovie(data[0])
  //       console.log(data)
  //       {
  //       }
  //     })
  //   } else {
  //     setLoading(false)
  //   }
  // }

  useEffect(() => {
    if (movieId) {
      setLoading(true)
      const query = singleMovieQuery(movieId)
      client.fetch(`${query}`).then((data) => {
        setMovie(data)
        console.log(data)
      })
    } else {
      setLoading(false)
    }
  }, [movieId])

  return (
    <>
      {movie && (
        <div
          className="flex xl:flex-row flex-col m-auto bg-white"
          style={{ maxWidth: "1500px", borderRadius: "32px" }}
        >
          <div className="w-full p-5 flex-1 xl:min-w-620">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <div>
                  <h1 className="text-4xl font-bold break-words mt-3">{setMovie.title}</h1>
                  <p className="mt-3">{movie.title}</p>
                </div>
                <ul className="cast-list">
                  {movie.cast.map((cast) => (
                    <li key={cast._key} className="cast-list-item">
                      <Link to={`/person/${cast.person._id}`}>
                        <a className="cast-list-link">
                          <span>
                            {cast.person.image && (
                              <img src={urlFor(cast.person.image).width(64)} />
                            )}
                          </span>
                          <span>
                            <span className="cast-person-name">{cast.person.name}</span>
                            <span className="cast-character-name">{cast.characterName}</span>
                          </span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MovieDetail
