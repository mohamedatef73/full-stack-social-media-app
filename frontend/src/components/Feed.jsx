import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from "./Spinner"
import LoadingDelay from "react-loading-delay"
import MasonryLayout from "./MasonryLayout"
import { feedQuery, searchQuery } from "../utils/data"
import { client } from "../client"

const Feed = () => {
  const [loading, setLoading] = useState(false)
  const [pins, setPins] = useState(null)

  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId) {
      setLoading(true)
      const query = searchQuery(categoryId)

      client.fetch(query).then((data) => {
        setPins(data)
        setLoading(false)
      })
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data)
        setLoading(false)
      })
    }
  }, [categoryId])

  if (loading) return <Spinner delay={3000} message="we are adding new ideas to your feed" />
  return <div className="">{pins && <MasonryLayout pins={pins} />}</div>
}

export default Feed
