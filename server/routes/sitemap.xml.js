// import { siteMapItems } from '~/utils/data/sitemapItems'


// export default defineEventHandler(async (event) => {
//   event.node.res.setHeader('content-type', 'text/xml');

//   let result = ''

//   result += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

//   for (const item of siteMapItems) {
//     result += `  <url>`
//     result += `    <loc>${item.sitemap_xml.frontendUrl}</loc>`
//     if (item.sitemap_xml.updated_at) {
//       result += `    <lastmod>${item.sitemap_xml.updated_at}</lastmod>`
//     }
//     if (item.sitemap_xml.changefreq) {
//       result += `    <changefreq>${item.sitemap_xml.changefreq}</changefreq>`
//     }
//     if (item.sitemap_xml.priority) {
//       result += `    <priority>${item.sitemap_xml.priority}</priority>`
//     }
//     result += `  </url>`
//   }

//   result += '</urlset>'

//   return result;



// })


import { siteMapItems } from '../app/utils/siteMapItems'


export default defineEventHandler(async (event) => {
  event.node.res.setHeader('content-type', 'text/xml');

  let result = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  for (const item of siteMapItems) {
    result += `<url>`
    result += `<loc>${item.sitemap_xml.frontendUrl}</loc>`
    if (item.sitemap_xml.updated_at) {
      result += `<lastmod>${item.sitemap_xml.updated_at}</lastmod>`
    }
    if (item.sitemap_xml.changefreq) {
      result += `<changefreq>${item.sitemap_xml.changefreq}</changefreq>`
    }
    if (item.sitemap_xml.priority) {
      result += `<priority>${item.sitemap_xml.priority}</priority>`
    }
    result += `</url>`
  }

  result += '</urlset>'
  return result
})