<template>
  <div>
    {{ msg }}
    <child1></child1>
    <br />
    <child2></child2>
  </div>
</template>

<script>
import commonFunction from '../commonFunction/commonFunction.js';

import child1 from './Child1.vue';
import child2 from './Child2.vue';

export default {
  data () {
    return {
      msg: 'Father1'
    }
  },
  components:{
    child1,
    child2
  },
  ready(){
    commonFunction.log('aa');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
