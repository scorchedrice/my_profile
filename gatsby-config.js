module.exports = {
  pathPrefix: "/my_profile",
  siteMetadata: {
    title: '한지웅의 프로필 페이지입니다.',
    description: 'FE개발자 한지웅의 포트폴리오 사이트입니다.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss', // Tailwind를 위한 설정
  ]
}