const commands: { [key: string]: string } = {
  'help': '> email, github, blog, skills, about, clear',
  'email': '> wldnd2977@gmail.com',
  'github': '> https://github.com/scorchedrice',
  'blog': '> https://scorchedrice.github.io',
  'skills': `> Frontend: React, Next.js, Flutter
Backend: Nest.js, Express.js
Languages: TypeScript, JavaScript, Dart, Python
Testing: Jest`,
  'clear': 'CLEAR_TERMINAL',
  'about': `> Name: Han Ji Woong
Position: Frontend Developer
`
};

export const welcomeTerminal = ['안녕하세요. 사람들과 함께 성장하는 것을 가장 큰 가치로 여기는 개발자 한지웅입니다.',
  '> 이곳에선 저에 대한 정보를 간단한 명령어를 통해 확인하실 수 있습니다',
  `> 입력 가능한 명령어를 알고 싶으시면 'help'를 입력해보세요.`,
]

// export consts welcomeTerminal = ['안녕하세요. 사람들과 함께 성장하는 것을 가장 큰 가치로 여기는 개발자 한지웅입니다.',
//   '> 새로운 기술을 배우는 과정에 큰 흥미를 가지고 있습니다. 새로운 기술을 익히고 프로젝트에 적용하는 과정이 즐거웠고 이는 개발자로 진로를 확신하게 된 계기이기도 합니다.',
//   '> 컴퓨터 공학 지식, 개발역량을 키워 어떠한 새로운 기술의 등장에도 유연하게 대처하는 개발자 되는 것이 저의 목표입니다.',
//   '> 저에 대해 알고 싶으시다면 스크롤하여 저의 이야기를 들어주세요. terminal ui도 사용 가능합니다. (help로 명령어를 확인할 수 있습니다.)',
// ]

export function terminal(command : string) {
  const trimmedCommand : string = command.trim().toLowerCase();
  return commands[trimmedCommand];
}