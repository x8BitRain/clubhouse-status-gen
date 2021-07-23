<template>
  <Generator />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Generator from './components/Generator.vue'

export default defineComponent({
  name: 'App',
  components: {
    Generator
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}
body {
  background-color: #262626;
}
</style>
