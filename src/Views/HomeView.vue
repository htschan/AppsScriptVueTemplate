<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Home View');
const message = ref('Welcome to the Home View!');
</script>

<style scoped>
/* Add your styles here */
</style>