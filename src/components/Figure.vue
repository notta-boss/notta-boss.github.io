<template>
    <div ref="host" />
</template>

<script setup>
    import * as hairline from '@lucasmarkes/hairline';
    import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue';

    const props = defineProps({
        intensity: {
            default: 0.5,
            type: Number,
        },

        label: {
            type: String,
        },

        name: {
            required: true,
            type: String,
        },
    });

    const host = useTemplateRef('host');

    let figure;

    onMounted(() => {
        figure = hairline[props.name](host.value, {
            intensity: props.intensity,
            label: props.label,
        });
    });

    onBeforeUnmount(() => figure?.destroy());

    watch(() => props.intensity, intensity => figure?.update({ intensity }));
</script>
