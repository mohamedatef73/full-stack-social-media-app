import React from "react"
import { Link, useNavigate } from "react-router-dom"

import { urlFor } from "../client"

const Persons = ({}) => {
  return (
    <div className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
      {title}
      {
        <img
          src={urlFor(poster).ignoreImageParams().width(200)}
          className="rounded-lg "
          height={100 / posterAspect}
        />
      }

      <li key={_id} className="list__item">
        <Link to={`/movies/${_id}`}>
          <a>
            <div style={{ paddingTop: "0.2em" }}>{releaseDate.substr(0, 4)}</div>
            <h3>{title}</h3>
            {director && <span className="movies-list__directed-by">Directed by {director}</span>}
          </a>
        </Link>
      </li>
    </div>
  )
}

export default Persons
