<template>
    <article class="gap-10 grid items-center lg:grid-cols-2 lg:gap-16">
        <RouterLink class="bg-wash block p-6 relative md:p-10" :to="path">
            <span aria-hidden="true" class="absolute bg-mark h-[118%] left-1/2 rounded-full rotate-[24deg] top-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-28 w-2.5" />
            <img :alt="images[0].alt" class="aspect-[16/10] object-cover object-top relative shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] w-full" :src="images[0].src" />
        </RouterLink>

        <div class="flex flex-col gap-6">
            <Label class="text-mute">{{ client }}, {{ year }}</Label>
            <h3 class="font-extrabold leading-none text-4xl tracking-tight md:text-5xl">
                <RouterLink :to="path">{{ title }}</RouterLink>
            </h3>
            <Prose>
                <p>{{ summary }}</p>
            </Prose>
            <Anchor class="self-start" is="router-link" :to="path">Read the case study</Anchor>
        </div>
    </article>
</template>

<script setup>
    import Anchor from './Anchor.vue';
    import Label from './Label.vue';
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
