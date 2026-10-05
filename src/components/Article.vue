<template>
    <article class="flex flex-col gap-12 max-w-3xl">
        <header class="flex flex-col gap-6">
            <Label class="text-mute">{{ date }}</Label>
            <h1 class="font-extrabold leading-none text-5xl tracking-tight md:text-6xl">{{ title }}</h1>
            <ul class="flex flex-wrap gap-4" v-if="tags.length">
                <li v-for="tag in tags" :key="tag">
                    <Highlight>{{ tag }}</Highlight>
                </li>
            </ul>
        </header>

        <img :alt="title" class="w-full" :src="image" />

        <div class="font-light prose prose-neutral prose-headings:font-extrabold prose-headings:tracking-tight prose-a:decoration-mark prose-a:decoration-2 prose-a:font-semibold prose-strong:font-semibold dark:prose-invert">
            <component :is="component" />
        </div>
    </article>
</template>

<script setup>
    import { computed } from 'vue';

    import Highlight from './Highlight.vue';
    import Label from './Label.vue';

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
