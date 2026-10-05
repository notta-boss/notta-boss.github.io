<template>
    <component class="bg-ink border-2 border-ink font-display font-medium inline-flex items-center justify-center px-6 py-3 rounded-full text-lg text-sheet transition-colors hover:bg-transparent hover:text-ink dark:bg-sheet dark:border-sheet dark:text-ink dark:hover:bg-transparent dark:hover:text-sheet" :is="is">
        <slot />
    </component>
</template>

<script setup>
    defineProps({
        is: {
            default: 'a',
            type: String,
        }
    });
</script>
