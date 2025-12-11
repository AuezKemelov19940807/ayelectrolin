export default defineEventHandler(async (event) => {
  event.node.res.setHeader('content-type', 'text/xml');

  const urls = [
    { url: "https://ayelectrolin-zere.kz/", priority: 1.0 },
    { url: "https://ayelectrolin-zere.kz/catalog", priority: 0.9 },
    { url: "https://ayelectrolin-zere.kz/catalog/vru-vvodno-raspredelitelnye-ustroistva", priority: 0.8 },
    { url: "https://ayelectrolin-zere.kz/catalog/shhk-shhitki-kvartirnye", priority: 0.8 },
    { url: "https://ayelectrolin-zere.kz/catalog/shho-oshhv-uoshhv-op", priority: 0.8 },
    { url: "https://ayelectrolin-zere.kz/catalog/shhs-rshhs", priority: 0.8 },
    { url: "https://ayelectrolin-zere.kz/catalog/shho-70", priority: 0.8 },
    { url: "https://ayelectrolin-zere.kz/catalog/pr-punkty-raspredelitelnye", priority: 0.8 },
    { url: "https://ayelectrolin-zere.kz/catalog/shhsn-shhity-sobstvennyx-nuzd", priority: 0.8 },
    { url: "https://ayelectrolin-zere.kz/catalog/sa-shha-skafy-i-shhity-avtomatiki", priority: 0.8 },
    { url: "https://ayelectrolin-zere.kz/catalog/avr-savr-shhavr-skafy-i-shhity-avtomaticeskogo-vvoda-rezerva", priority: 0.8 },
    { url: "https://ayelectrolin-zere.kz/catalog/suv-shhuv-skafy-i-shhity-upravleniia-ventiliaciei", priority: 0.8 },
    { url: "https://ayelectrolin-zere.kz/catalog/shhe-shhity-etaznye", priority: 0.8 },
    { url: "https://ayelectrolin-zere.kz/catalog/grshh-glavnye-raspredelitelnye-shhity", priority: 0.8 }
  ];

  let result = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  for (const item of urls) {
    result += `<url>`;
    result += `<loc>${item.url}</loc>`;
    result += `<lastmod>${today}</lastmod>`;
    result += `<changefreq>weekly</changefreq>`;
    result += `<priority>${item.priority}</priority>`;
    result += `</url>`;
  }

  result += '</urlset>';
  return result;
});


