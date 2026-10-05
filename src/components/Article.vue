<template>
    <article class="flex flex-col gap-12 max-w-3xl">
        <header class="flex flex-col gap-4">
            <time class="font-display text-graphite">{{ date }}</time>
            <h1 class="font-display font-extrabold leading-none text-5xl tracking-tight md:text-6xl">{{ title }}</h1>
            <ul class="flex flex-wrap font-display gap-x-4 text-graphite" v-if="tags.length">
                <li v-for="tag in tags" :key="tag">{{ tag }}</li>
            </ul>
        </header>

        <img :alt="title" class="rounded-xl w-full" :src="image" />

        <div class="prose prose-xl prose-headings:font-display prose-headings:font-extrabold prose-headings:tracking-tight prose-a:decoration-amber-300 prose-a:decoration-2 hover:prose-a:decoration-wavy prose-zinc dark:prose-invert">
            <component :is="component" />
        </div>
    </article>
</template>

<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        component: {
            required: true,
            type: Object,
        },

        date: {
            required: true,
            type: String,
        },

        path: {
            required: true,
            type: String,
        },

        tags: {
            default: () => [],
            type: Array,
        },

        title: {
            required: true,
            type: String,
        },
    });

    const image = computed(() => props.path + '/og-image.png');
</script>
