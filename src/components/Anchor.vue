<template>
    <component class="bg-amber-300 border border-transparent font-black font-display px-6 py-4 text-zinc-950 transition-colors hover:border-amber-300 hover:bg-transparent hover:dark:text-white" :is="is">
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
