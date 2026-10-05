<template>
    <article class="flex flex-col gap-6 max-w-xl">
        <Label class="text-mute">{{ date }}</Label>
        <h3 class="font-extrabold leading-none text-3xl tracking-tight md:text-4xl">
            <RouterLink :to="path">{{ title }}</RouterLink>
        </h3>
        <Prose>
            <p>{{ excerpt }}</p>
        </Prose>
        <Anchor class="self-start" is="router-link" :to="path">Read the article</Anchor>
    </article>
</template>

<script setup>
    import Anchor from './Anchor.vue';
    import Label from './Label.vue';
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
