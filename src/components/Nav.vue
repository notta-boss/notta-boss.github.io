<template>
    <nav aria-label="Main" class="flex flex-wrap font-display font-medium gap-x-6 gap-y-2 items-center text-lg">
        <RouterLink v-for="item in items" active-class="text-kiwi" class="hover:text-kiwi transition-colors" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
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
