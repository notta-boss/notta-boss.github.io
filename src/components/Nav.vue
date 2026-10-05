<template>
    <nav aria-label="Main" class="flex flex-wrap font-display font-medium gap-x-6 gap-y-2 items-center text-lg">
        <RouterLink v-for="item in items" active-class="underline" class="decoration-2 decoration-stone-400 underline-offset-8 hover:underline hover:decoration-amber-300 dark:decoration-stone-600" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
    </nav>
</template>

<script setup>
    const items = [
        { label: 'Work', to: '/work' },
        { label: 'Services', to: '/services' },
        { label: 'About', to: '/about' },
        { label: 'Blog', to: '/blog' },
        { label: 'Contact', to: '/contact' },
    ];
</script>
