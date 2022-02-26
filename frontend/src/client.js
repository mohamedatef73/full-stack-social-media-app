import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
  projectId: "8y0j8iku",
  dataset: "production",
  apiVersion: "2021-12-25",
  useCdn: true,
  token:
    "skpwLtpEHgG5j5FUfVm39ks8lA4LNvnXdQNOs8z2WBR3YY2gM3OdIMgsAHt5SXpL0hakal0AAJDFKeJTymXivPBbNtG7n4FfKnfPdLU6nbjKhbSHfpax3PR6ks1jTRSnBZ2IeUryu8i04Gx7UhGJ7feAZrycxzcAb9HewM7TWAdRCm2RlQ6Q",
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
