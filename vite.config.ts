import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), checker({ typescript: true })],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/utils/variables.scss";
          @import "src/utils/mixins.scss";`
      }
    }
  }
})
