<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';


export default {
  name: 'home',
  components: {
    navbar,
  },
};
</script>
