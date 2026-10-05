<template>
    <component class="group inline-flex items-center label pl-4 py-3 relative text-ink" :is="is">
        <span aria-hidden="true" class="absolute bg-mark h-7 left-0 rounded-full top-1/2 transition-transform -translate-y-1/2 w-7 group-hover:scale-125" />
        <span class="relative">
            <slot />
        </span>
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
