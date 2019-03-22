<template>
  <div id="app">
    <SevenSegmentDisplay />
    
  </div>
</template>

<script>
import SevenSegmentDisplay from './components/SevenSegmentDisplay.vue'

export default {
  name: 'app',
  components: {
    SevenSegmentDisplay
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
