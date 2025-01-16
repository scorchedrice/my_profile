import * as React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => {
  return (
    <main>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>죄송합니다. 요청하신 페이지가 존재하지 않습니다.</p>
      <Link to="/">홈으로 돌아가기</Link>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not Found</title>