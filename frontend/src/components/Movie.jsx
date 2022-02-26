import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { MdDownloadForOffline } from "react-icons/md"
import { AiTwotoneDelete } from "react-icons/ai"
import { BsFillArrowUpRightCircleFill } from "react-icons/bs"

import { client, urlFor } from "../client"

const Movies = ({ movie: { poster, _id, releaseDate, posterAspect } }) => {
  const [postHovered, setPostHovered] = useState(false)
  const navigate = useNavigate()
  // const { postedBy, image, _id, destination } = pin

  return (
    <div className="m-2">
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => navigate(`/movie-detail/${_id}`)}
        className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
        <img
          src={urlFor(poster).ignoreImageParams().width(200)}
          className="rounded-lg "
          height={100 / posterAspect}
        />

        {postHovered && (
          <div
            className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
            style={{ height: "100%" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href={`${releaseDate}?dl=`}
                  download
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  className="bg-white w-9 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                >
                  <MdDownloadForOffline />
                </a>
              </div>
            </div>
            <div className=" flex justify-between hover:bg-white items-center  w-full text-dark">
              {releaseDate.substr(0, 4)}
            </div>
          </div>
        )}
      </div>
    </div>

    // <div className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
    //   {title}
    // {/* <img className="rounded-lg w-full " src={urlFor(image).width(250).url()} alt="user-post" /> */}

    //   {
    //     <img
    //       src={urlFor(poster).ignoreImageParams().width(200)}
    //       className="rounded-lg "
    //       height={100 / posterAspect}
    //     />
    //   }

    //   <li key={_id} className="list__item">
    //     <Link to={`/movie-detail/${_id}`}>
    //       <a>
    //         <div style={{ paddingTop: "0.2em" }}>{releaseDate.substr(0, 4)}</div>
    //         <h3>{title}</h3>
    //         {director && <span className="movies-list__directed-by">Directed by {director}</span>}
    //       </a>
    //     </Link>
    //   </li>
    // </div>
  )
}

export default Movies

// import React, { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { v4 as uuidv4 } from "uuid"
// import { MdDownloadForOffline } from "react-icons/md"
// import { AiTwotoneDelete } from "react-icons/ai"
// import { BsFillArrowUpRightCircleFill } from "react-icons/bs"
// import { urlFor, client } from "../client"
// import { fetchUser } from "../utils/fetchUser"

// const Pin = ({ movies, posterAspect, releaseDate, title, _id, director, poster }) => {
//   const [postHovered, setPostHovered] = useState(false)
//   const navigate = useNavigate()
//   console.log(title)
//   const user = fetchUser()

//   return (
//     <div className="m-2">
//       <div
//         onMouseEnter={() => setPostHovered(true)}
//         onMouseLeave={() => setPostHovered(false)}
//         className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
//       >
//         {movies.map((movie) => (
//           <li key={movie._id} className="list__item">
//             <Link href={`/movies/${movie._id}`}>
//               <a>
//                 {movie.poster}
//                 <div style={{ paddingTop: "0.2em" }}>{movie.releaseDate.substr(0, 4)}</div>
//                 <h3>{movie.title}</h3>
//                 {movie.director && (
//                   <span className="movies-list__directed-by">Directed by {movie.director}</span>
//                 )}
//               </a>
//             </Link>
//           </li>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Pin
