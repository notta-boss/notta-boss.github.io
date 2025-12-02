<template>
    <RouterLink exact-active-class="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950" class="border-2 px-2 py-0.5 rounded-md hover:border-amber-300 transition-colors" inactive-class="border-zinc-950 text-zinc-950 dark:border-white dark:text-white" :to="to">
        <slot />
    </RouterLink>
</template>

<script setup>
    defineProps({
        to: {
            required: true,
            type: String,
        },
    });
</script>
