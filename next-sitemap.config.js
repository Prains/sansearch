module.exports = {
  siteUrl: "https://sansearch.ru",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap-index.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://sansearch.ru/server-sitemap-index.xml", // <==== Add here
    ],
  },
};
