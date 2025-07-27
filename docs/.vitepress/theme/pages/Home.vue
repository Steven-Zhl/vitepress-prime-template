<template>
  <div class="p-2" data-name="page-home">
    <recommends/>
  </div>
</template>


<script setup lang="ts">
import Recommends from "../components/Recommends.vue";
import { data as posts } from "../data/posts.data";

console.log(posts.map(post => {
  return post.frontmatter?.date;
}));
</script>
