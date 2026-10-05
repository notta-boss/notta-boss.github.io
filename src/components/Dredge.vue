<template>
    <div class="flex flex-col gap-2">
        <div ref="stage" />
        <p aria-live="polite" class="font-display self-end text-graphite text-sm" ref="read">rest</p>
    </div>
</template>

<script setup>
    import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue';

    import kernel from '../../figures/kernel.js?raw';
    import source from '../../figures/dredge.js?raw';

    const stage = useTemplateRef('stage');
    const read = useTemplateRef('read');

    const HL = new Function(kernel + '; return HL;')();

    const figure = (() => {
        let declared;

        new Function('HL', 'hairline', source)(HL, declaration => declared = declaration);

        return declared;
    })();

    let handle;

    onMounted(() => {
        if (!document.querySelector('[data-hairline-style]')) {
            HL.inject(document);
        }

        stage.value.setAttribute('aria-label', figure.means);
        stage.value.setAttribute('data-hairline', figure.name);
        stage.value.setAttribute('role', 'img');

        const svg = HL.mk('svg', { 'aria-hidden': 'true', viewBox: '0 0 400 320' }, stage.value);

        handle = figure.mount({ read: read.value, stage: stage.value, svg }, figure.range[1]);
    });

    onBeforeUnmount(() => handle?.destroy());
</script>
