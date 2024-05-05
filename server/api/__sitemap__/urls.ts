import axios from "axios"

export default defineSitemapEventHandler(async () => {
  try {
    const products = await axios.get<{ results: { slug: string, created_at: string, images: [] }[] }>('https://keshmed.uz:443/api/products?expand=images')
    console.log(products.data.results.length)
    return products.data.results?.map(p => asSitemapUrl({
        loc: `/product/${p.slug}`,
        images: p.images,
        lastmod: p.created_at,
        _i18nTransform: true,
      })
    )
  } catch (error) {
    console.log('Sitemap Error', error)
    return []
  }
})