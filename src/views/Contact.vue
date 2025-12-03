<template>
    <h2 class="font-display font-semibold text-6xl md:text-7xl lg:w-2xl text-zinc-950 dark:text-white">Quick, catch the bird!</h2>
    <div class="flex flex-col font-light gap-8 leading-relaxed text-2xl lg:w-3xl">
        <p>You've seen the work, you've survived the website, now here we are. If there's even a flicker that we could build something great together, don't hesitate to get in touch.</p>
        <p>Even though this website was built with a little help from AI, I promise a real person will reply to your email… for at least a few more years to come.</p>
    </div>

    <div class="flex flex-col items-center self-stretch">
        <IconKiwiLetter class="pointer-events-none -mb-3 rotate-6 h-auto w-32 z-10" />
        <Anchor class="self-stretch sm:self-auto" href="mailto:contact@nottaboss.co.nz?subject=Wire%20Me%20In%21">Phew, still safe from Skynet. Wire me in!</Anchor>
    </div>
</template>

<script setup>
    import Anchor from '../components/Anchor.vue';
    import IconKiwiLetter from "../components/IconKiwiLetter.vue";
</script>
