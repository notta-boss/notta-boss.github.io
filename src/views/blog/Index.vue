<template>
    <Section title="Blog">
        <Teaser v-for="article in articles" v-bind="article" :key="article.path" />
    </Section>
</template>

<script setup>
    import { articles } from '../../services';

    import Section from '../../components/Section.vue';
    import Teaser from '../../components/Teaser.vue';
</script>
