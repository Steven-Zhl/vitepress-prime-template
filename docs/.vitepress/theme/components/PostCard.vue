<script setup lang="ts">
import { ContentData, useData } from "vitepress";
import { transformTime } from "../util/time";

const data = useData()
const props = defineProps({
  post: {
    type: Object as () => ContentData,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <a :href="post.url" target="_blank">
    <div class="rounded-xl border p-2 backdrop-opacity-30">
      <span class="text-xl font-bold line-clamp-1">{{ post.frontmatter.title }}</span>
      <p class="text-md line-clamp-2 text-ellipsis">{{ post.frontmatter?.description }}</p>

      <div class="flex items-center text-sm text-gray-600">
        {{ post.frontmatter.author || data.theme.value?.author?.name }}
        |
        {{ transformTime(post.frontmatter.date) }}
      </div>
      <div class="flex items-center flex-wrap gap-2">
        <Tag v-for="category in post.frontmatter?.categories" :key="category" class="text-nowrap">
          {{ category }}
        </Tag>

        <Tag v-for="tag in post.frontmatter?.tags" :key="tag" class="text-nowrap" severity="secondary">
          {{ tag }}
        </Tag>
      </div>
    </div>
  </a>
</template>
