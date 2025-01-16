module.exports = {
  pathPrefix: "/my_profile",
  siteMetadata: {
    title: '한지웅의 프로필 페이지입니다.',
    description: 'FE개발자 한지웅의 포트폴리오 사이트입니다.'
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`, // 이미지 경로
      },
    },
  ]
}