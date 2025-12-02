<template>
    <h2 class="font-display font-semibold text-6xl md:text-7xl lg:w-2xl text-zinc-950 dark:text-white">And, what do you do?</h2>
    <div class="flex flex-col font-light gap-8 leading-relaxed text-2xl lg:w-3xl">
        <p>You see... we can technically build anything, but only a few things are truly worth your investment. These are the areas where partnering with us actually makes sense.</p>
    </div>
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:w-3xl">
        <div class="flex flex-col gap-2 items-center">
            <IconKiwiRobot class="mb-4 h-32 w-auto" />
            <h3 class="font-display text-4xl text-zinc-950 dark:text-white">AI Workflows</h3>
            <p class="font-light leading-relaxed text-2xl">It's {{ new Date().getFullYear() }} — Artificial Intelligence can take over your repetitive, predictable tasks and save you time and money. Let us design workflows that make it genuinely useful for your business.</p>
        </div>
        <div class="flex flex-col gap-2 items-center">
            <IconKiwiCloud class="mb-4 h-32 w-auto" />
            <h3 class="font-display text-4xl text-zinc-950 dark:text-white">Cloud Infrastructure</h3>
            <p class="font-light leading-relaxed text-2xl">Your data is your crown jewel. Don't store it on a Jenga tower. We sort out AWS, Docker, CI/CD, monitoring, and automated deployments so your systems don't fall <Link href="https://youtu.be/CTZyorJVeqI">nek minnit</Link>.</p>
        </div>
        <div class="flex flex-col gap-2 items-center">
            <IconKiwiTeam class="mb-4 h-32 w-auto" />
            <h3 class="font-display text-4xl text-zinc-950 dark:text-white">People & Code Consultancy</h3>
            <p class="font-light leading-relaxed text-2xl">When hiring new talent, levelling up your team, or trying to push your solutions to the next level, don't do this alone. We provide honest assessments, practical guidance, and clear directions.</p>
        </div>
        <div class="flex flex-col gap-2 items-center">
            <IconKiwiBulb class="text-zinc-950 dark:text-white mb-4 h-32 w-auto" />
            <h3 class="font-display text-4xl text-zinc-950 dark:text-white">SaaS Development</h3>
            <p class="font-light leading-relaxed text-2xl">We specialise in building SaaS because it's one of the most sustainable ways to solve real problems efficiently. Got an idea? We can help turn it into a product that actually works.</p>
        </div>
    </div>
</template>

<script setup>
    import Link from '../components/Link.vue';

    import IconKiwiCloud from '../components/IconKiwiCloud.vue';
    import IconKiwiRobot from '../components/IconKiwiRobot.vue';
    import IconKiwiTeam from '../components/IconKiwiTeam.vue';
    import IconKiwiBulb from '../components/IconKiwiBulb.vue';
</script>
