<template>
    <div class="grid justify-items-stretch place-items-stretch min-h-dvh p-4">
        <div class="bg-linear-to-b from-white to-zinc-50 dark:bg-linear-to-b dark:from-zinc-950 dark:to-zinc-900 flex flex-col items-center p-6 lg:p-20">
            <div class="flex flex-col gap-20 text-center">
                <div class="font-display flex flex-col items-center text-zinc-950 dark:text-white">
                    <Menu />

                    <span class="font-normal text-zinc-500 uppercase">This is</span>
                    <h1 class="font-black text-4xl">Notta Boss</h1>
                </div>

                <div class="flex flex-col gap-12 items-center justify-center">
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Menu from '../components/Menu.vue';
</script>
