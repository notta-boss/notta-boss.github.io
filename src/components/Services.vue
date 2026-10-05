<template>
    <div class="gap-x-12 gap-y-16 grid md:grid-cols-2">
        <div v-for="service in services" class="flex flex-col gap-4" :key="service.title">
            <Figure class="max-w-xs" :label="service.label" :name="service.figure" />
            <h3 class="font-display font-extrabold text-2xl tracking-tight">{{ service.title }}</h3>
            <Prose>
                <p>{{ service.body }}</p>
            </Prose>
        </div>
    </div>
</template>

<script setup>
    import Figure from './Figure.vue';
    import Prose from './Prose.vue';

    const services = [
        {
            body: 'Marketing sites, booking flows, portals. Built to be fast, easy to edit, and still standing in five years.',
            figure: 'exploded',
            label: 'An app window coming apart in layers',
            title: 'Websites and web apps',
        },
        {
            body: 'Got a product idea? We turn it into something people pay for, with the boring parts (billing, auth, deploys) done properly from day one.',
            figure: 'branches',
            label: 'A commit graph rising behind the pointer',
            title: 'SaaS products',
        },
        {
            body: 'AWS, Docker, CI/CD, monitoring. Your data is the crown jewel. We stop storing it on a Jenga tower.',
            figure: 'router',
            label: 'A router whose antennas lean toward the pointer',
            title: 'Cloud infrastructure',
        },
        {
            body: 'Hiring, levelling up a team, or deciding what to do with the old codebase. Honest assessments and clear next steps, no slide decks.',
            figure: 'terminal',
            label: 'A terminal whose history scrolls under the pointer',
            title: 'Code and people consultancy',
        },
    ];
</script>
