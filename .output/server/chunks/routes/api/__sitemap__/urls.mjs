import { d as defineEventHandler } from '../../../runtime.mjs';
import axios from 'axios';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:async_hooks';
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
  var _a;
  try {
    const products = await axios.get("https://keshmed.uz:443/api/products?expand=images");
    console.log(products.data.results.length);
    return (_a = products.data.results) == null ? void 0 : _a.map(
      (p) => asSitemapUrl({
        loc: `/product/${p.slug}`,
        images: p.images,
        lastmod: p.created_at,
        _i18nTransform: true
      })
    );
  } catch (error) {
    console.log("Sitemap Error", error);
    return [];
  }
});

export { urls as default };
