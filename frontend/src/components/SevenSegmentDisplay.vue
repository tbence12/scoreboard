<template>
  <div>
    <div v-bind:id="idLetter" class="seven-segment">
      <div class="upper"></div>
      <div class="lower"></div> 
    </div>
    {{id}} {{idLetter}}
    <button @click="idLetterIncrease">Gól</button>
  </div>
</template>

<script>
export default {
  name: 'SevenSegmentDisplay',
  props: {
    
  },
  data() {
    return{
      id: '0',
      idLetter: 'null'
    }
  },
  methods: {
    idLetterIncrease: function(){
      this.id++;
      this.idLetter = this.idWithLetter(this.id)
    },
    idWithLetter: function(id){
      if(id =='') return 'null'
      if(id == 0) return 'zero'
      if(id == 1) return 'one'
      if(id == 2) return 'two'
      if(id == 3) return 'three'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seven-segment{
  background-color: grey;
  width: 100px;
  height: 200px;
  margin-bottom: 100px
}
#null .upper{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
#null .lower{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-bottom: 10px dotted lime;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
}
#one .upper{
  border-right: 10px dotted lime;
  width: 80px;
  height: 80px;
  padding-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
#one .lower{
  border-right: 10px dotted lime;
  width: 80px;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
}
#two .upper{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  margin-left: 10px;
}
#two .lower{
  border-top: 10px dotted lime;
  border-bottom: 10px dotted lime;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
  margin-right: 10px;
}
#three .upper{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-bottom: 10px dotted transparent;
  border-left: 10px dotted transparent;
  width: 80px;
  height: 80px;
}
#three .lower{
  border-top: 10px solid lime;
  border-bottom: 10px solid lime;
  border-right: 10px solid lime;
  border-left: 10px solid transparent;
  width: 80px;
  height: 80px;
}
</style>
