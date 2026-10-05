<template>
    <article class="grid gap-8 items-start lg:grid-cols-5">
        <RouterLink class="bg-plate block lg:col-span-3 overflow-hidden rounded-xl dark:bg-ink" :to="path">
            <img :alt="images[0].alt" class="aspect-[16/10] object-cover object-top w-full" :src="images[0].src" />
        </RouterLink>

        <div class="flex flex-col gap-4 lg:col-span-2">
            <h3 class="font-display font-extrabold leading-tight text-3xl tracking-tight">
                <RouterLink class="hover:text-kiwi" :to="path">{{ title }}</RouterLink>
            </h3>
            <p class="font-display text-graphite">{{ client }}, {{ year }}</p>
            <Prose>
                <p>{{ summary }}</p>
            </Prose>
            <RouterLink class="font-display font-medium text-kiwi hover:underline underline-offset-4" :to="path">Read the case study</RouterLink>
        </div>
    </article>
</template>

<script setup>
    import Prose from './Prose.vue';

    defineProps({
        client: {
            required: true,
            type: String,
        },

        images: {
            required: true,
            type: Array,
        },

        path: {
            required: true,
            type: String,
        },

        summary: {
            required: true,
            type: String,
        },

        title: {
            required: true,
            type: String,
        },

        year: {
            required: true,
            type: String,
        },
    });
</script>
