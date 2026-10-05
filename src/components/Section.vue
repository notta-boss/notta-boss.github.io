<template>
    <section class="flex flex-col gap-10">
        <h2 class="font-display font-extrabold leading-none text-4xl tracking-tight md:text-5xl">{{ title }}</h2>

        <slot />
    </section>
</template>

<script setup>
    defineProps({
        title: {
            required: true,
            type: String,
        },
    });
</script>
