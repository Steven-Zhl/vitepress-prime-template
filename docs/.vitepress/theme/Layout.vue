<script setup lang="ts">
import { useData } from 'vitepress'
import PageHeader from './components/PageHeader.vue';
import Home from './pages/Home.vue';
import Post from './pages/Post.vue';
import PageFooter from "./components/PageFooter.vue";

const { frontmatter } = useData()
</script>

<template>
  <div class="layout">
    <PageHeader/>
    <main>
      <Home v-if="frontmatter.home"/>
      <Post v-else/>
    </main>
    <PageFooter/>
  </div>
</template>
