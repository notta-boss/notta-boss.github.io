<template>
    <component class="label text-ink" :is="is">
        <slot />
    </component>
</template>

<script setup>
    defineProps({
        is: {
            default: 'span',
            type: String,
        },
    });
</script>
