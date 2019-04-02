<template>
  <div id="app">
    <Header />
    <div id="display">
      <SevenSegmentDisplay :teamName="homeTeamName" :operate="operate" class="floating"/>
      <div class="vs">
        <div class="upper">O</div>
        <div class="lower">O</div> 
      </div>
      <SevenSegmentDisplay :teamName='guestTeamName' :operate="operate" class="floating"/>
    </div>
    <div control>
      <h2>Control Panel</h2>
      <div v-show="!operate">
        <label for="homeTeamName">Home team name:</label>
        <input type="text" id="homeTeamName" v-model='homeTeamName' minlength="1" maxlength="9">
      </div>
      <div v-show="!operate">
        <label for="guestTeamName">Guest team name:</label>
        <input type="text" id="guestTeamName" v-model='guestTeamName' minlength="1" maxlength="9">
      </div>
      <button @click="go" v-if="!operate">Mehet</button>
      <button @click="back" v-else>Új csapatok</button>
    </div>
  </div>
</template>

<script>
import { bus } from './main'
import Header from './components/Header.vue'
import SevenSegmentDisplay from './components/SevenSegmentDisplay.vue'

export default {
  name: 'app',
  components: {
    Header,
    SevenSegmentDisplay
  },
  data (){
    return {
      homeTeamName: 'Home',
      guestTeamName: 'Guest',
      operate: false
    }
  },
  methods: {
    go: function(){
      bus.$emit('goBase');
      this.operate = true;
    },
    back: function(){
      bus.$emit('backOff');
      this.operate = false;
    }
  }
}
</script>

<style>
body{
  background-color: green;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#display{
  display: inline-block;
  width: 580px;
  height: 400px;
  border: 3px solid gray;
  background-color: gray;
}
.floating{
  float: left;
}
.vs{
  background-color: black;
  width: 80px;
  height: 215px;
  margin-bottom: 100px;
  float: left;
  padding: 10px;
  padding-top: 30px;
}
.vs div{
  color: green;
  font-size: 30px;
  margin-top: 54px;
}
</style>
