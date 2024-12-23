import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my_profile/', // 경로를 명확히 지정
  build: {
    outDir: 'dist',
    // 중요: assets 경로도 명시적으로 설정
    assetsDir: 'assets'
  }
})