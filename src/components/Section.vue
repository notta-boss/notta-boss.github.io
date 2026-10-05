<template>
    <section class="flex flex-col gap-8">
        <header class="flex flex-col gap-6">
            <Label v-if="label">{{ label }}</Label>
            <h2 class="font-extrabold leading-none text-5xl tracking-tight md:text-6xl">{{ title }}</h2>
        </header>

        <slot />
    </section>
</template>

<script setup>
    import Label from './Label.vue';

    defineProps({
        label: {
            type: String,
        },

        title: {
            required: true,
            type: String,
        },
    });
</script>
