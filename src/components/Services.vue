<template>
    <div class="gap-16 grid md:grid-cols-2">
        <div v-for="(service, index) in services" class="flex flex-col gap-6" :key="service.title">
            <Panel class="max-w-[14rem] md:max-w-[14rem]" :bar="index % 2 ? '-translate-x-8' : 'translate-x-8'">
                <Figure :label="service.alt" :name="service.figure" />
            </Panel>
            <h3 class="font-extrabold leading-none text-3xl tracking-tight">{{ service.title }}</h3>
            <Prose>
                <p v-html="service.body" />
            </Prose>
        </div>
    </div>
</template>

<script setup>
    import { slides } from '../services/slides';

    import Figure from './Figure.vue';
    import Panel from './Panel.vue';
    import Prose from './Prose.vue';

    const services = slides.filter(slide => slide.label === 'Expertise');
</script>
