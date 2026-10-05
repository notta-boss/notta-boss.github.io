<template>
    <div class="grid min-h-dvh p-4">
        <div class="bg-sheet flex flex-col px-6 md:px-12 lg:px-20 dark:bg-sheet-dark">
            <header class="flex flex-wrap gap-6 items-center justify-between py-8">
                <RouterLink aria-label="Notta Boss, home" class="flex font-display font-extrabold gap-3 items-center text-2xl" to="/">
                    <Logomark class="h-10 w-auto" />
                    <span>Notta Boss</span>
                </RouterLink>

                <Nav />
            </header>

            <main class="flex flex-col flex-1 gap-32 py-16 md:py-24">
                <RouterView />
            </main>

            <footer class="flex flex-col font-display gap-2 justify-between py-12 text-graphite md:flex-row">
                <span>Notta Boss, Auckland, Aotearoa New Zealand.</span>
                <span>Figures drawn with <Link href="https://hairline.lucasmarkes.com">Hairline</Link>.</span>
            </footer>
        </div>
    </div>
</template>

<script setup>
    import Link from '../components/Link.vue';
    import Logomark from '../components/Logomark.vue';
    import Nav from '../components/Nav.vue';
</script>
