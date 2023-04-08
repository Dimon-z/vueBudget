import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify';
// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://dimon-z.github.io/vueBudget',
  plugins: [vue(),vuetify()],
})
