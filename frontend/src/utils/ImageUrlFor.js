// import sanity from "../lib/sanity"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "@sanity/client"

const imageBuilder = imageUrlBuilder(sanityClient)

const imageUrlFor = (source) => imageBuilder.image(source)

export default imageUrlFor
