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
    logo: "/logo.jpg",
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
    ],
    author: {
      name: "Steven-Zhl",
      avatar: "/logo.jpg",
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            placeholder: '搜索'
          }
        }
      }
    },
  },
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark"
    },
    plugins: [
      tailwindcss(),
      Components({ resolvers: [PrimeVueResolver()] })
    ]
  }
})
