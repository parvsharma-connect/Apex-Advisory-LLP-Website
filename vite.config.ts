import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { enquiryApi } from './server/enquiryApi.js'
import { assistantApi } from './server/assistantApi.js'

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    base: process.env.GITHUB_PAGES === 'true' ? '/Apex-Advisory-LLP-Website/' : '/',
    plugins: [react(), enquiryApi(), assistantApi()],
  }
})
