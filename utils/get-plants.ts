import { query } from "./strapi";
const { STRAPI_URL } = process.env

export async function getPlant() {
    return query("plants?fields=title&fields=description&fields=slug&fields=price&populate[image][fields]=url")
    .then(res => {
        console.log(res)
        return res.data.map(plant => {
            const { title, slug, price, description, image: rawImage } = plant
            const image = `${STRAPI_URL}/${rawImage.url}`
            return {title, slug, price, description, image }
        })
    })
}