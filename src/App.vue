<template>
   <div data-role="appbar" data-expand-point="md">
    <a href="#" class="brand no-hover">
      <span style="width: 55px;" class="p-2 border bd-dark border-radius">
        m<sup>4</sup>
      </span>
    </a>

    <ul class="app-bar-menu">
      <li><a href="#" @click="switchView('home')">Home</a></li>
      <li><a href="#" @click="switchView('about')">About</a></li>
    </ul>
  </div>
  <div class="container-fluid">
    <HomeView v-if="showHomeView" />
    <AboutView v-if="showAboutView" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HomeView from './Views/HomeView.vue';
import AboutView from './Views/AboutView.vue';

const showHomeView = ref(true);
const showAboutView = ref(false);

const switchView = (view) => {
  showHomeView.value = view === 'home';
  showAboutView.value = view === 'about';
};
</script>
script