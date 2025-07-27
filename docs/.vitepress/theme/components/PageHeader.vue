<template>
  <header class="flex flex-row justify-between items-center px-2 py-4 sticky top-0 left-0 right-0" data-name="header">
    <Button data-name="header-logo" variant="text" rounded @click="router.go('/')">
      <Image :src="theme.logo" v-if="theme.logo" class="w-6 h-6 rounded-xl overflow-hidden" alt="icon"/>
      <h1 class="font-bold">{{ site.title }}</h1>
    </Button>

    <InputText v-if="theme.search" class="hidden md:block" :placeholder="placeholder"/>

    <div class="flex-row items-center gap-2 hidden md:flex" data-name="header-nav">
      <Button v-for="item in theme.nav" variant="link" severity="secondary" :label="item.text"
              @click="router.go(item.link)"/>

      <Button :icon="isDark?'pi pi-moon':'pi pi-sun'" variant="text" severity="secondary" rounded
              @click="toggleDark()"/>
    </div>

    <div class="flex-row items-center gap-2 flex md:hidden" data-name="header-nav-mobile">
      <Button icon="pi pi-search" variant="text" severity="secondary" rounded/>
      <Button icon="pi pi-bars" variant="text" severity="secondary" rounded/>
    </div>
  </header>
</template>


<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import { useDark, useToggle } from '@vueuse/core';
import { computed } from "vue";

const { site, theme } = useData()
const router = useRouter()
const isDark = useDark();  // 检测当前是否为深色模式
const toggleDark = useToggle(isDark);  // 用于切换深色和浅色模式

const placeholder = computed(() => {
  if (theme.value?.search?.provider === "local") {
    return theme.value.search.options.locales[site.value.lang].placeholder || "搜索"
  } else if (theme.value?.search?.provider === "algolia") {
    return theme.value.search.options.placeholder || "搜索"
  } else {
    return ""
  }
});
</script>
