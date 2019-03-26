<template>
  <div id="app">
    <SevenSegmentDisplay class="floating"/>
    <div class="vs">
      <div class="upper">O</div>
      <div class="lower">O</div> 
    </div>
    <SevenSegmentDisplay class="floating"/>
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
  max-width: 800px;
  margin: 0 auto;
}
.floating{
  float: left;
}
.vs{
  background-color: black;
  width: 80px;
  height: 200px;
  margin-bottom: 100px;
  float: left;
  padding: 10px;
}
.vs div{
  color: green;
  font-size: 30px;
  margin-top: 45px;
}
</style>
