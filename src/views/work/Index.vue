<template>
    <Section label="Work" title="Things we put our name on">
        <Prose>
            <p>The list is short on purpose. It grows as projects ship.</p>
        </Prose>

        <div class="flex flex-col gap-24 mt-8">
            <Project v-for="project in work" v-bind="project" :key="project.path" />
        </div>
    </Section>
</template>

<script setup>
    import { work } from '../../services';

    import Project from '../../components/Project.vue';
    import Prose from '../../components/Prose.vue';
    import Section from '../../components/Section.vue';
</script>
