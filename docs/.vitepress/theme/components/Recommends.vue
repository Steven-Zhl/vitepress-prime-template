<template>
  <Carousel
    :value="recommends"
    :autoplay-interval="6000"
    :responsive-options="recommendsResponsiveOptions"
    :circular="true"
    data-name="recommends">
    <template #item="slotProps">
      <article class="p-2 flex flex-col rounded-xl overflow-hidden">
        <a :href="slotProps.data.url">
          <div class="flex flex-col h-64 md:h-80 relative group">
            <img
              v-if="slotProps.data.frontmatter?.image || slotProps.data.frontmatter?.folder"
              :src="slotProps.data.frontmatter?.image || slotProps.data.frontmatter?.folder"
              :alt="slotProps.data.frontmatter?.title"
              class="w-full h-full object-cover rounded-xl absolute left-0 top-0"/>

            <div data-name="shader"
                 class="absolute left-0 top-0 h-1/3 w-full p-2 rounded-t-xl bg-linear-to-b from-[#222222] to-transparent flex flex-col">
              <span class="text-white text-lg font-bold">{{ slotProps.data.frontmatter?.title }}</span>

              <p class="text-white line-clamp-2 text-ellipsis">{{ slotProps.data.frontmatter?.description }}</p>
            </div>
          </div>
        </a>

        <div class="flex justify-between items-center p-2 gap-x-2" data-name="article-info">
          <div class="flex items-center justify-start flex-wrap gap-x-4 gap-y-2">
            <div class="flex flex-nowrap items-center justify-start gap-x-2">
              <img
                v-if="!slotProps.data.frontmatter?.author"
                :src="defaultAuthor.avatar"
                alt="author-avatar"
                class="w-8 h-8 rounded-2xl bg-gray-400"/>
              <span class="text-nowrap">{{ slotProps.data.frontmatter?.author || defaultAuthor.name }}</span>
            </div>

            <Tag v-for="category in slotProps.data.frontmatter?.categories">{{ category }}</Tag>

            <Tag v-for="tag in slotProps.data.frontmatter?.tags" severity="secondary">{{ tag }}</Tag>
          </div>
        </div>
      </article>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { data as recommends } from "../data/recommend.data";
import { useData } from "vitepress";
import { ref } from "vue";

const { theme } = useData()

const recommendsResponsiveOptions = ref([
  {
    breakpoint: '1920px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  },
])
const defaultAuthor = ref<{ name: string, avatar?: string }>(theme.value.author)
</script>
