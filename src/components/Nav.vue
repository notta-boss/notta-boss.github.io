<template>
    <div class="flex gap-8 items-center">
        <Label class="hidden hover:bg-mark sm:inline" is="a" href="mailto:contact@nottaboss.co.nz?subject=Hire%20Us">Hire us</Label>

        <button aria-controls="menu" class="flex flex-col gap-1.5 group items-end p-1" type="button" :aria-expanded="open" @click="open = !open">
            <span class="sr-only">Menu</span>
            <span class="bg-ink h-px transition-all w-5 group-hover:w-6" :class="{ 'rotate-45 translate-y-[3.5px]': open }" />
            <span class="bg-ink h-px transition-all w-3 group-hover:w-6" :class="{ '-rotate-45 -translate-y-[3.5px] w-5': open }" />
        </button>

        <Teleport to="body">
            <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0" leave-active-class="transition-opacity duration-200" leave-to-class="opacity-0">
                <nav v-if="open" aria-label="Main" class="bg-card fixed flex flex-col inset-4 items-center justify-center z-40" id="menu">
                    <button class="absolute label p-4 right-8 top-8" type="button" @click="open = false">Close</button>
                    <ul class="flex flex-col gap-2 items-center text-center">
                        <li v-for="(item, index) in items" :key="item.to">
                            <RouterLink active-class="text-ink" class="flex font-extrabold gap-6 items-baseline leading-none text-5xl text-ghost tracking-tight transition-colors md:text-7xl hover:text-ink" :to="item.to" @click="open = false">
                                <span class="label text-mute">{{ String(index + 1).padStart(2, '0') }}</span>
                                <span>{{ item.label }}</span>
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    import Label from './Label.vue';

    const items = [
        { label: 'Home', to: '/' },
        { label: 'Work', to: '/work' },
        { label: 'Services', to: '/services' },
        { label: 'About', to: '/about' },
        { label: 'Blog', to: '/blog' },
        { label: 'Contact', to: '/contact' },
    ];

    const open = ref(false);
    const route = useRoute();

    watch(() => route.path, () => open.value = false);
</script>
