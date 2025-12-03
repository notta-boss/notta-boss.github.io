<template>
    <div class="mb-4 pt-16 relative">
        <MenuItem class="absolute rounded-bl-none -rotate-6 -translate-x-1/2 top-1" to="/">Again?</MenuItem>
        <MenuItem class="absolute rounded-br-none rotate-6 -translate-x-full top-3/12 -left-2" to="/about">Who?</MenuItem>
        <MenuItem class="absolute rounded-bl-none rotate-3 translate-x-full top-1/5 right-0" to="/services">What?</MenuItem>
        <MenuItem class="absolute rounded-br-none -rotate-6 -translate-x-full top-7/12 -left-6" to="/blog">What's Up?</MenuItem>
        <MenuItem class="absolute rounded-bl-none rotate-12 translate-x-full top-3/5 -right-4" to="/contact">How?</MenuItem>

        <Logomark class="h-auto w-32" />
    </div>
</template>

<script setup>
    import Logomark from './Logomark.vue';
    import MenuItem from './MenuItem.vue';
</script>
