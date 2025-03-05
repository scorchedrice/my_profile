module.exports = {
  pathPrefix: "/",
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    `gatsby-plugin-provide-react`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`, // 이미지 경로
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "icon" : "src/assets/icon.png",
      },
    },
  ]
}