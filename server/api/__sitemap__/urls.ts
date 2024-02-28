export default defineSitemapEventHandler(async () => {
  // fetch data directly in the correct type
  const config = useRuntimeConfig()
  // console.log(config.public.backUrl);
  
  const data = await fetch(`${config.public.backUrl}api/products?expand=images`)
  const products: { results: { slug: string, created_at: string, images: [] }[] } = await data.json()
  return products.results.map(p => asSitemapUrl({
      loc: `/product/${p.slug}`,
      images: p.images,
      lastmod: p.created_at
    })
  )
})