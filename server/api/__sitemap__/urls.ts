import { defineSitemapEventHandler, asSitemapUrl } from '#imports'

export default defineSitemapEventHandler(async () => {
  const data = await fetch(`https://keshmed.uz:443/api/products?expand=images`)
  const products: { results: { slug: string, created_at: string, images: [] }[] } = await data.json()
  return products.results.map(p => asSitemapUrl({
      loc: `/product/${p.slug}`,
      images: p.images,
      lastmod: p.created_at
    })
  )
})