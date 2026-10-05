<template>
    <Section title="Work">
        <Prose>
            <p>Things we have built and are happy to put our name on. The list is short on purpose. It grows as projects ship.</p>
        </Prose>

        <Project v-for="project in work" v-bind="project" :key="project.path" />
    </Section>
</template>

<script setup>
    import { work } from '../../services';

    import Project from '../../components/Project.vue';
    import Prose from '../../components/Prose.vue';
    import Section from '../../components/Section.vue';
</script>
