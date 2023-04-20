import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import generateSitemap from 'vite-ssg-sitemap'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    host: true, // Host be set to true to use the network form to access project with ip
    port: 3001, // port number
    open: true, // Open browser automatically
    cors: true, // cross-domain setting permission
    strictPort: true, // If the port is occupied, exit directly
    proxy: {
      // '/app/api': {
      //   target: 'https://robotcp-app.abacussw.co.kr',
      //   changeOrigin: true,
      // },
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    Pages({
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
      ],
      extensions: ['vue', 'md'],
    }),
    Layouts(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/store'],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      resolvers: [ElementPlusResolver()],
      directoryAsNamespace: true,
    }),
    Unocss(),
    Inspect(),
  ],

  // SCSS 전역 사용
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',
      },
    },
  },
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() {
      generateSitemap()
    },
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
    ],
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /element-plus/],
  },
})
