<template>
  <div>
    <article v-for="post in recommends" data-name="article" class="p-2 flex flex-col overflow-hidden gap-y-2 max-w-full">
      <a data-name="article-cover" :href="post.url">
        <div class="flex flex-col h-64 md:h-80 relative group">
          <img
            v-if="post.frontmatter?.image || post.frontmatter?.folder"
            :src="post.frontmatter?.image || post.frontmatter?.folder"
            :alt="post.frontmatter?.title"
            class=" object-cover rounded-xl absolute left-0 right-0 top-0"/>

          <div data-name="shader"
               class="absolute left-0 right-0 top-0 h-1/3 p-2 rounded-t-xl bg-linear-to-b from-[#444444] to-transparent flex flex-col">
            <span class="text-white text-lg font-bold">{{ post.frontmatter?.title }}</span>

            <p class="text-white line-clamp-2 text-ellipsis">{{ post.frontmatter?.description }}</p>
          </div>
        </div>
      </a>

      <div data-name="article-info" class="flex flex-col gap-y-2">
        <div class="flex items-center gap-x-4">
          <div data-name="author-info" class="flex flex-nowrap items-center justify-start gap-x-2">
            <img
              v-if="!post.frontmatter?.author"
              :src="defaultAuthor.avatar"
              alt="author-avatar"
              class="w-8 h-8 rounded-2xl bg-gray-400"/>
            <span class="text-nowrap">{{ post.frontmatter?.author || defaultAuthor.name }}</span>
          </div>

          <div data-name="categories" class="flex items-center gap-x-2">
            <Tag v-for="category in post.frontmatter?.categories">{{ category }}</Tag>
          </div>
        </div>

        <div data-name="tags" class="flex items-center gap-x-2">
          <Tag
            v-for="tag in post.frontmatter?.tags"
            :key="tag"
            severity="secondary"
            class="text-nowrap flex-shrink-0"
          >
            {{ tag }}
          </Tag>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { data as recommends } from "../data/recommends.data";
import { useData } from "vitepress";
import { ref } from "vue";

const { theme } = useData()
const defaultAuthor = ref<{ name: string, avatar?: string }>(theme.value.author)
</script>
