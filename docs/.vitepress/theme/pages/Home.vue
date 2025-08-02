<template>
  <div class="p-2" data-name="page-home">
    <div class="flex flex-col gap-4">
      <post-card v-for="post in postData" :post="post"/>
    </div>

    <Paginator
      :total-records="posts.length"
      v-model:first="startIndex"
      v-model:rows="deltaIndex"/>
  </div>
</template>


<script setup lang="ts">
import { data as posts } from "../data/posts.data";
import PostCard from "../components/PostCard.vue";
import { computed, ref } from "vue";
import { ContentData } from "vitepress";

const startIndex = ref(0);
const deltaIndex = ref(10);
const postData = computed<ContentData[]>(() => {
  return posts.slice(startIndex.value, startIndex.value + deltaIndex.value);
})

</script>
