<template>
    <Section label="About" title="Who is behind this">
        <Prose>
            <p>Notta Boss is a small, independent software studio led by <Link href="https://eagostini.github.io">Eddie</Link>, backed by decades of building real, reliable systems for real businesses: <Highlight>kiwifruit orchards</Highlight>, <Highlight>civil-construction logistics</Highlight>, <Highlight>hospitals</Highlight>, <Highlight>real-estate workflows</Highlight>. Small on purpose, efficient by design.</p>
            <p>You get direct expertise, no layers, no noise. Just solid engineering and clear communication. Not a single basket. More like a golden kiwi egg, if you will.</p>
            <p>It is also built to grow. Maybe it becomes a muscular robotic kiwi, maybe something bigger. What matters is that the work stays sharp, honest, and built to last.</p>
        </Prose>
    </Section>
</template>

<script setup>
    import Highlight from '../components/Highlight.vue';
    import Link from '../components/Link.vue';
    import Prose from '../components/Prose.vue';
    import Section from '../components/Section.vue';
</script>
