<template>
    <div class="flex flex-col gap-40 items-center justify-center">
        <Article v-bind="article" :component="null" v-for="article in articles" :key="article.path" />
    </div>
</template>

<script setup>
    import { articles } from '../../services';
    import Article from '../../components/Article.vue';
</script>
