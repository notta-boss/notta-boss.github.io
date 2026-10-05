<template>
    <Deck :slides="slides" />
</template>

<script setup>
    import { slides } from '../services/slides';

    import Deck from '../components/Deck.vue';
</script>
