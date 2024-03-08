import { d as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'packrup';
import 'nitropack/dist/runtime/plugin';
import 'vue';
import 'node:fs';
import 'node:url';
import 'ipx';

const defineSitemapEventHandler = defineEventHandler;

function asSitemapUrl(url) {
  return url;
}

const urls = defineSitemapEventHandler(async () => {
  const data = await fetch(`https://keshmed.uz:443/api/products?expand=images`);
  const products = await data.json();
  return products.results.map(
    (p) => asSitemapUrl({
      loc: `/product/${p.slug}`,
      images: p.images,
      lastmod: p.created_at
    })
  );
});

export { urls as default };
