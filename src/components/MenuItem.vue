<template>
    <RouterLink v-bind="binds" class="border-2 px-2 py-0.5 rounded-md hover:border-amber-300 transition-colors" inactive-class="border-zinc-950 text-zinc-950 dark:border-white dark:text-white" :to="to">
        <slot />
    </RouterLink>
</template>

<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        to: {
            required: true,
            type: String,
        },
    });

    const binds = computed(() => {
        const classes = {};
        const property = props.to === '/' ? 'exact-active-class' : 'active-class';

        classes[property] = 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950';

        return classes;
    });
</script>
