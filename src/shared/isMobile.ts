export const isMobile = typeof navigator !== 'undefined'
  ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  : false;