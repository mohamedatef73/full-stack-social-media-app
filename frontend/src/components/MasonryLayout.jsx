import React from "react"
import Masonry from "react-masonry-css"
// import movie from "../../../backend/schemas/movie"
import Movie from "./Movie"
import Pin from "./Pin"

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
}

const MasonryLayout = ({ pins, movies }) => (
  <Masonry className="flex animate-slid-fwd" breakpointCols={breakpointColumnsObj}>
    {movies?.map((movie) => (
      <Movie key={movie._id} movie={movie} className="w-max" />
    ))}
    {pins?.map((pin) => (
      <Pin key={pin._id} pin={pin} className="w-max" />
    ))}
  </Masonry>
)

export default MasonryLayout
