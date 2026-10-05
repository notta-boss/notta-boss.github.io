<template>
    <div class="aspect-[3/4] max-w-xs relative w-full md:max-w-sm">
        <div class="absolute bg-wash inset-0" />
        <div aria-hidden="true" class="absolute bg-mark h-[118%] left-1/2 rounded-full rotate-[24deg] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 md:w-3" :class="bar" />
        <div class="absolute inset-x-[-14%] top-1/2 -translate-y-1/2">
            <slot />
        </div>
    </div>
</template>

<script setup>
    defineProps({
        bar: {
            default: 'translate-x-16',
            type: String,
        },
    });
</script>
