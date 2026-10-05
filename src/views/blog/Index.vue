<template>
    <Section label="Blog" title="Notes from the swamp">
        <div class="flex flex-col gap-16 mt-4">
            <Teaser v-for="article in articles" v-bind="article" :key="article.path" />
        </div>
    </Section>
</template>

<script setup>
    import { articles } from '../../services';

    import Section from '../../components/Section.vue';
    import Teaser from '../../components/Teaser.vue';
</script>
