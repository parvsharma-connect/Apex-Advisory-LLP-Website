import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { enquiryApi } from './server/enquiryApi.js'

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
  plugins: [react(), enquiryApi()],
  }
})
