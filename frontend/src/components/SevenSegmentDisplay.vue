<template>
  <div>
  <div id="team-name"> {{teamName}} </div>
    <div v-bind:id="idDecimalLetter" class="seven-segment">
      <div class="upper"></div>
      <div class="lower"></div> 
    </div>
    <div v-bind:id="idSingleLetter" class="seven-segment">
      <div class="upper"></div>
      <div class="lower"></div> 
    </div>
    <div class="clear"></div>
    <span v-show="!operate">Write team names</span>

    <button v-show="operate" @click="idLetterIncrease">Gooool</button>
    <button v-show="operate" @click="idLetterDecrease">Cancel</button>
    
  </div>
</template>

<script>
import { bus } from '../main'

export default {
  name: 'SevenSegmentDisplay',
  props: {
    teamName: String,
    operate: Boolean
  },
  data() {
    return{
      id: '0',
      idDecimalLetter: 'null',
      idSingleLetter: 'null'
    }
  },
  created(){
    bus.$on('goBase', () => {
      this.idLetterBase();
    });
    bus.$on('backOff', () => {
      this.idLetterOff();
    })
  },
  methods: {
    idLetterIncrease: function(){
      if(this.id<99){
        this.id++;
        this.idSingleLetter = this.idWithSingleLetter(this.id)
        this.idDecimalLetter = this.idWithDecimalLetted(this.id)
      }
    },
    idLetterDecrease: function(){
      if(this.id>0){
        this.id--;
        this.idSingleLetter = this.idWithSingleLetter(this.id)
        this.idDecimalLetter = this.idWithDecimalLetted(this.id)
      }
    },
    idLetterBase: function(){
      this.id=0;
      this.idSingleLetter = 'zero'
      this.idDecimalLetter = 'null'
    },
    idLetterOff: function(){
      this.idSingleLetter = 'null'
      this.idDecimalLetter = 'null'
    },
    idWithSingleLetter: function(id){
      if(id == -1) return 'null'
      if(id % 10 == 0) return 'zero'
      if(id % 10 == 1) return 'one'
      if(id % 10 == 2) return 'two'
      if(id % 10 == 3) return 'three'
      if(id % 10 == 4) return 'four'
      if(id % 10 == 5) return 'five'
      if(id % 10 == 6) return 'six'
      if(id % 10 == 7) return 'seven'
      if(id % 10 == 8) return 'eight'
      if(id % 10 == 9) return 'nine'
    },
    idWithDecimalLetted : function(id){
      if(id == -1) return 'null'
      if(~~(id / 10) == 0) return 'null'
      if(~~(id / 10) == 1) return 'one'
      if(~~(id / 10) == 2) return 'two'
      if(~~(id / 10) == 3) return 'three'
      if(~~(id / 10) == 4) return 'four'
      if(~~(id / 10) == 5) return 'five'
      if(~~(id / 10) == 6) return 'six'
      if(~~(id / 10) == 7) return 'seven'
      if(~~(id / 10) == 8) return 'eight'
      if(~~(id / 10) == 9) return 'nine'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#team-name{
   background-color: black;
   color: red;
   font-size: 25px;
   border: 3px solid gray;
   height: 29px;
}
.seven-segment{
  background-color: black;
  width: 100px;
  height: 200px;
  margin-bottom: 70px;
  float: left;
  padding: 10px;
}
.clear {
    clear:both;
}
span{
  color: red;
}
#null .upper{
  border-top: 10px dotted #333333;
  border-right: 10px dotted #333333;
  border-left: 10px dotted #333333;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
#null .lower{
  border-top: 10px dotted #333333;
  border-right: 10px dotted #333333;
  border-bottom: 10px dotted #333333;
  border-left: 10px dotted #333333;
  width: 80px;
  height: 80px;
}
#zero .upper{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
#zero .lower{
  border-top: 10px dotted #333333;
  border-right: 10px dotted lime;
  border-bottom: 10px dotted lime;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
}
#one .upper{
  border-top: 10px dotted #333333;
  border-right: 10px dotted lime;
  border-left: 10px dotted #333333;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
#one .lower{
  border-top: 10px dotted #333333;
  border-right: 10px dotted lime;
  border-bottom: 10px dotted #333333;
  border-left: 10px dotted #333333;
  width: 80px;
  height: 80px;
}
#two .upper{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-left: 10px dotted #333333;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
#two .lower{
  border-top: 10px dotted lime;
  border-right: 10px dotted #333333;
  border-bottom: 10px dotted lime;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
}
#three .upper{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-left: 10px dotted #333333;
  width: 80px;
  height: 80px;
  margin-bottom: 10px
}
#three .lower{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-bottom: 10px dotted lime;
  border-left: 10px dotted #333333;
  width: 80px;
  height: 80px;
}
#four .upper{
  border-top: 10px dotted #333333;
  border-right: 10px dotted lime;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
#four .lower{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-bottom: 10px dotted #333333;
  border-left: 10px dotted #333333;
  width: 80px;
  height: 80px;
}
#five .upper{
  border-top: 10px dotted lime;
  border-right: 10px dotted #333333;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
#five .lower{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-bottom: 10px dotted lime;
  border-left: 10px dotted #333333;
  width: 80px;
  height: 80px;
}
#six .upper{
  border-top: 10px dotted lime;
  border-right: 10px dotted #333333;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
#six .lower{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-bottom: 10px dotted lime;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
}
#seven .upper{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-left: 10px dotted #333333;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
#seven .lower{
  border-top: 10px dotted #333333;
  border-right: 10px dotted lime;
  border-bottom: 10px dotted #333333;
  border-left: 10px dotted #333333;
  width: 80px;
  height: 80px;
}
#eight .upper{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
#eight .lower{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-bottom: 10px dotted lime;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
}
#nine .upper{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-left: 10px dotted lime;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
#nine .lower{
  border-top: 10px dotted lime;
  border-right: 10px dotted lime;
  border-bottom: 10px dotted #333333;
  border-left: 10px dotted #333333;
  width: 80px;
  height: 80px;
}
</style>
