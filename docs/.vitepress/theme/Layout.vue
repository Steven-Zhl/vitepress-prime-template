<script setup lang="ts">
import { useData } from 'vitepress'
import PageHeader from './components/PageHeader.vue';
import Home from './pages/Home.vue';
import Post from './pages/Post.vue';
import PageFooter from "./components/PageFooter.vue";
import Archive from "./pages/Archive.vue";

const { frontmatter } = useData()
</script>

<template>
  <div class="layout">
    <PageHeader/>
    <main>
      <div class="w-full lg:w-3/4 mx-auto" data-name="page-container">
        <Home v-if="frontmatter.home"/>
        <Archive v-else-if="frontmatter.archive"/>
        <Post v-else/>
      </div>
    </main>
    <PageFooter/>
  </div>
</template>
