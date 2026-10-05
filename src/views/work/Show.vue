<template>
    <article class="flex flex-col gap-16">
        <header class="flex flex-col gap-6 max-w-3xl">
            <p class="font-display text-graphite">{{ client }}, {{ year }}</p>
            <h1 class="font-display font-extrabold leading-none text-5xl tracking-tight md:text-6xl">{{ title }}</h1>
            <Prose>
                <p>{{ summary }}</p>
            </Prose>
            <Link class="font-display self-start" :href="url">Visit the site</Link>
        </header>

        <img v-for="image in images" :alt="image.alt" class="bg-plate rounded-xl w-full dark:bg-ink" :key="image.src" :src="image.src" />

        <div class="gap-12 grid lg:grid-cols-3">
            <div v-for="part in parts" class="flex flex-col gap-4" :key="part.title">
                <h2 class="font-display font-extrabold text-2xl tracking-tight">{{ part.title }}</h2>
                <Prose>
                    <p>{{ part.body }}</p>
                </Prose>
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <h2 class="font-display font-extrabold text-2xl tracking-tight">Built with</h2>
            <ul class="flex flex-wrap font-display gap-x-6 gap-y-2 text-graphite">
                <li v-for="tool in stack" :key="tool">{{ tool }}</li>
            </ul>
        </div>

        <Anchor class="self-start" href="mailto:contact@nottaboss.co.nz?subject=I%20want%20one%20of%20these">Want something like this? Email Eddie</Anchor>
    </article>
</template>

<script setup>
    import { computed } from 'vue';

    import Anchor from '../../components/Anchor.vue';
    import Link from '../../components/Link.vue';
    import Prose from '../../components/Prose.vue';

    const props = defineProps({
        approach: {
            required: true,
            type: String,
        },

        client: {
            required: true,
            type: String,
        },

        images: {
            required: true,
            type: Array,
        },

        outcome: {
            required: true,
            type: String,
        },

        problem: {
            required: true,
            type: String,
        },

        stack: {
            required: true,
            type: Array,
        },

        summary: {
            required: true,
            type: String,
        },

        title: {
            required: true,
            type: String,
        },

        url: {
            required: true,
            type: String,
        },

        year: {
            required: true,
            type: String,
        },
    });

    const parts = computed(() => [
        { body: props.problem, title: 'The problem' },
        { body: props.approach, title: 'The approach' },
        { body: props.outcome, title: 'The outcome' },
    ]);
</script>
