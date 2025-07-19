import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress Prime template",
  description: "A VitePress Blog template with PrimeVue components and Tailwind CSS",
  lang: "zh", // 同 <html lang="zh">

  themeConfig: {
    logo: ".vitepress/theme/logo.jpg",
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            placeholder: '搜索'
          }
        }
      }
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
      Components({ resolvers: [PrimeVueResolver()] })
    ]
  }
})
