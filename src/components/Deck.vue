<template>
    <div class="flex flex-col flex-1 gap-10" tabindex="0" @keydown.left.prevent="go(index - 1)" @keydown.right.prevent="go(index + 1)" @wheel="wheel">
        <div class="flex flex-1 items-center overflow-hidden relative">
            <Transition mode="out-in" :enter-active-class="motion ? 'transition duration-500 ease-out' : ''" enter-from-class="opacity-0 translate-x-6" :leave-active-class="motion ? 'transition duration-300 ease-in' : ''" leave-to-class="opacity-0 -translate-x-6">
                <div class="gap-10 grid items-center lg:grid-cols-2 lg:gap-16" :key="slide.title">
                    <div class="flex justify-center" :class="{ 'lg:order-2': index % 2 }">
                        <Panel :bar="index % 2 ? '-translate-x-14' : 'translate-x-14'">
                            <Dredge v-if="slide.figure === 'dredge'" />
                            <Figure v-else :label="slide.alt" :name="slide.figure" />
                        </Panel>
                    </div>

                    <div class="flex flex-col gap-8 relative">
                        <Label>{{ slide.label }}</Label>
                        <h1 class="flex font-extrabold gap-10 leading-none text-5xl tracking-tight md:text-6xl xl:text-7xl">
                            <span class="lg:whitespace-nowrap">{{ slide.title }}</span>
                            <span aria-hidden="true" class="hidden text-ghost whitespace-nowrap lg:inline">{{ next.title }}</span>
                        </h1>
                        <Prose>
                            <p v-html="slide.body" />
                        </Prose>
                        <Anchor class="self-start" is="router-link" :to="slide.to">{{ slide.cta }}</Anchor>
                    </div>
                </div>
            </Transition>

            <button class="absolute flex flex-col gap-3 items-center right-0 top-1/2 -translate-y-1/2 hidden lg:flex" type="button" @click="go(index + 1)">
                <span class="bg-ink h-5 w-px" />
                <Label class="[writing-mode:vertical-rl]">Scroll</Label>
            </button>
        </div>

        <ol class="flex max-w-sm mx-auto w-full">
            <li v-for="(item, i) in slides" class="flex-1" :key="item.title">
                <button class="flex flex-col gap-3 group label w-full" type="button" :aria-current="i === index ? 'step' : null" @click="go(i)">
                    <span class="transition-colors" :class="i === index ? 'text-ink' : 'text-mute group-hover:text-ink'">{{ String(i + 1).padStart(2, '0') }}</span>
                    <span class="bg-rule block h-px relative w-full">
                        <span class="absolute bg-ink h-px inset-y-0 left-0 transition-all duration-500" :class="i === index ? 'w-full' : 'w-0'" />
                    </span>
                </button>
            </li>
        </ol>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue';

    import Anchor from './Anchor.vue';
    import Dredge from './Dredge.vue';
    import Figure from './Figure.vue';
    import Label from './Label.vue';
    import Panel from './Panel.vue';
    import Prose from './Prose.vue';

    const props = defineProps({
        slides: {
            required: true,
            type: Array,
        },
    });

    const index = ref(0);
    const motion = !matchMedia('(prefers-reduced-motion: reduce)').matches;

    let busy = 0;

    const slide = computed(() => props.slides[index.value]);
    const next = computed(() => props.slides[(index.value + 1) % props.slides.length]);

    const go = (to) => index.value = (to + props.slides.length) % props.slides.length;

    const wheel = (event) => {
        if (Math.abs(event.deltaY) < 24 || Date.now() < busy) {
            return;
        }

        busy = Date.now() + 900;

        go(index.value + Math.sign(event.deltaY));
    };
</script>
