<template>
    <section class="grid gap-12 items-center lg:grid-cols-2">
        <div class="flex flex-col gap-8">
            <h1 class="font-display font-extrabold leading-none text-5xl tracking-tight md:text-7xl">Software built by someone who has to live with it.</h1>
            <Prose>
                <p>Notta Boss is an Auckland studio run by one senior engineer. Twenty years of shipping products and pulling legacy systems out of the swamp, now building websites and SaaS you can actually look at.</p>
            </Prose>
            <div class="flex flex-wrap gap-4 items-center">
                <Anchor is="router-link" to="/work">See the work</Anchor>
                <Link class="font-display" href="mailto:contact@nottaboss.co.nz?subject=Knock%20Knock">or email Eddie</Link>
            </div>
        </div>

        <Dredge class="w-full" />
    </section>

    <Section title="Recent work">
        <Project v-for="project in work" v-bind="project" :key="project.path" />
    </Section>

    <Section title="What we do">
        <Services />
    </Section>

    <Section title="Latest from the blog">
        <Teaser v-for="article in articles.slice(0, 1)" v-bind="article" :key="article.path" />
    </Section>
</template>

<script setup>
    import { articles, work } from '../services';

    import Anchor from '../components/Anchor.vue';
    import Dredge from '../components/Dredge.vue';
    import Link from '../components/Link.vue';
    import Project from '../components/Project.vue';
    import Prose from '../components/Prose.vue';
    import Section from '../components/Section.vue';
    import Services from '../components/Services.vue';
    import Teaser from '../components/Teaser.vue';
</script>
