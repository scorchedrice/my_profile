module.exports = {
  pathPrefix: "/my_profile",
  siteMetadata: {
    title: `한지웅의 프로필 페이지입니다.`,
    description: `FE 개발자 한지웅의 포트폴리오입니다.`,
    siteUrl: `https://scorchedrice.github.io/my_profile`
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
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