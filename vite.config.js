import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import { ViteAliases } from 'vite-aliases'

export default defineConfig({
  plugins: [Vue(), Icons(), ViteAliases(), ViteComponents()]
})
