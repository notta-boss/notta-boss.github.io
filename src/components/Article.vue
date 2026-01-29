<template>
    <div class="flex flex-col gap-12 items-center justify-center">
        <header class="flex flex-col items-center justify-center font-display lg:w-2xl">
            <img :alt="title" class="mb-8 rounded-lg" :src="image" />

            <h3 class="font-semibold text-5xl md:text-6xl text-zinc-950 dark:text-white">{{ title }}</h3>
            <time class="font-light text-xl text-zinc-600 dark:text-zinc-400">{{ date }}</time>

            <div class="flex items-center justify-center gap-2 mt-8 text-sm" v-if="tags.length">
                <div class="border border-amber-300 dark:border-zinc-900 dark:bg-amber-300 bg-amber-50 text-zinc-900 rounded-full px-2 py-0.5" v-for="tag in tags">{{ tag }}</div>
            </div>
        </header>

        <div class="font-light prose prose-2xl prose-headings:font-display prose-zinc dark:prose-invert lg:w-3xl" v-if="component">
            <component :is="component" />
        </div>

        <template v-else>
            <div class="flex flex-col font-light gap-8 leading-relaxed text-2xl lg:w-3xl">
                <p>{{ excerpt }}</p>
            </div>

            <Anchor is="router-link" :to="path">Can't Believe It! Tell Me Everything</Anchor>
        </template>
    </div>
</template>

<script setup>
    import Anchor from './Anchor.vue';
    import { computed } from 'vue';

    const props = defineProps({
        component: {
            type: Object,
        },

        date: {
            type: String,
        },

        excerpt: {
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
        }
    });

    const image = computed(() => props.path + '/op-image.webp');
</script>
