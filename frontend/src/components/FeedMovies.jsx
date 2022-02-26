import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from "./Spinner"
import MasonryLayout from "./MasonryLayout"
import { moviesQuery } from "../utils/data"
import { client } from "../client"

const FeedMovies = () => {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState(null)

  const { moviesId } = useParams()

  useEffect(() => {
    if (moviesId) {
      setLoading(true)
      const query = moviesQuery(moviesId)
      client.fetch(query).then((data) => {
        setMovies(data)
        setLoading(false)
      })
    } else {
      client.fetch(moviesQuery).then((data) => {
        setMovies(data)
        setLoading(false)
      })
    }
  }, [moviesId])

  if (loading) return <Spinner delay={3000} message="we are adding new ideas to your feed" />
  return <div className="">{<MasonryLayout movies={movies} />}</div>
}

export default FeedMovies
