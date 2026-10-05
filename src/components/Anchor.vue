<template>
    <component class="bg-amber-300 border-2 border-amber-300 font-display font-medium inline-flex items-center justify-center px-6 py-3 rounded-full text-ink text-lg transition-colors hover:bg-transparent dark:hover:text-white" :is="is">
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
