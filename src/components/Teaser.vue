<template>
    <article class="flex flex-col gap-4 max-w-prose">
        <h3 class="font-display font-extrabold leading-tight text-3xl tracking-tight">
            <RouterLink class="decoration-2 decoration-amber-300 underline-offset-4 hover:underline" :to="path">{{ title }}</RouterLink>
        </h3>
        <time class="font-display text-graphite">{{ date }}</time>
        <Prose>
            <p>{{ excerpt }}</p>
        </Prose>
        <RouterLink class="decoration-2 decoration-amber-300 underline underline-offset-4 hover:decoration-wavy font-display font-medium self-start" :to="path">Read the article</RouterLink>
    </article>
</template>

<script setup>
    import Prose from './Prose.vue';

    defineProps({
        date: {
            required: true,
            type: String,
        },

        excerpt: {
            required: true,
            type: String,
        },

        path: {
            required: true,
            type: String,
        },

        title: {
            required: true,
            type: String,
        },
    });
</script>
