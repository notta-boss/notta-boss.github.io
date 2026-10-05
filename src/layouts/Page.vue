<template>
    <div class="grid min-h-dvh p-4">
        <div class="bg-card flex flex-col px-6 py-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] md:px-12 md:py-10 lg:px-16">
            <header class="flex items-center justify-between">
                <RouterLink aria-label="Notta Boss, home" class="flex gap-3 items-center" to="/">
                    <Logomark class="h-9 w-auto" />
                    <Label>Notta Boss</Label>
                </RouterLink>

                <Nav />
            </header>

            <main class="flex flex-col flex-1 py-12 md:py-16">
                <RouterView />
            </main>

            <footer class="flex items-center justify-between">
                <Label class="hover:bg-mark" is="a" href="mailto:contact@nottaboss.co.nz">contact@nottaboss.co.nz</Label>
                <Label class="text-mute">Auckland, Aotearoa</Label>
            </footer>
        </div>
    </div>
</template>

<script setup>
    import Label from '../components/Label.vue';
    import Logomark from '../components/Logomark.vue';
    import Nav from '../components/Nav.vue';
</script>
