# 💡 핵심기능
## 프로젝트 구조
- FSD구조를 채택했습니다.

## 인터렉션 작업
- framer-motion을 활용하여 애니메이션 기능을 추가했습니다.

## 프로젝트 필터링
- 개인/팀 프로젝트를 구분하여 볼 수 있습니다, 추후 백엔드 프로젝트 경험이 생기면 기술 역할 별 필터링 기능도 추가할 예정입니다.

## React → Gatsby
- 25.01.17, 프로필페이지 특성을 고려하여, SSG 프레임워크인 Gatsby로 체제를 전환했습니다. Vite 관련된 옵션을 제거했으며, 앞으로 SEO 작업 및 오류들을 수정하며 개선할 예정입니다.


# 🪄 사용한 기술
## frontend
- Gatsby
- React
- TypeScript
- Tailwind CSS
- Framer Motion
## deployment
- Github Action
## tools
- Git
- GitHub

# 🛠️ 트러블 슈팅
## 스크롤 사이즈를 예상하는 함수를 추가하여 불필요한 스크롤 길이 변화 이슈 해결

프로젝트 필터링 기능으로 스크롤 길이가 계속 변화하는 이슈가 있었습니다.

모든 프로젝트가 표시될 때의 height를 계산하여 변화하지 않는 height를 가지도록 했습니다.

## 이미지 랜더링 404 오류 및 ES6 → CommonJS

Gatsby로 전환하는 과정에서 사소한 오류가 발생했습니다.

Gatsby의 빌드 설정을 담당하는 gatsby-config.js는 vite와 다르게 CommonJS를 활용합니다. 이를 수정하여 빌드를 진행했습니다. 이미지를 활용하는 방식 또한 다른데, 상황에 맞게 StaticImage를 활용하며 이미지 랜더링에서 발생한 404 오류를 해결했습니다.

## setTimeout을 활용하여 스크롤 처리 타이밍 변경

모바일 뷰 Smooth Scroll 기능이 동작하지 않았습니다.

console에 모든 값이 잘 나오지만, 스크롤만 동작하지 않았습니다. 원인이 smooth scroll임을 알았고, 기존 smooth 스크롤 기능을 setTimeout을(10ms) 활용한 custom 스크롤 애니메이션을 적용하여 오류를 해결했습니다.


# 🎯 성과
- framer-motion을 활용해 컴포넌트 단위로 애니메이션을 적용할 수 있었습니다. 간단한 조작으로 사용자 인터렉션을 제공할 수 있어 재미있는 경험이었습니다.

- React로 개발한 프로젝트를 Github Action을 활용하여 github pages로 배포하는 경험을 쌓았습니다.

- React로 개발한 프로젝트를 Gatsby로 전환하는 작업을 진행하며 Gatsby의 활용법을 익혔습니다.

