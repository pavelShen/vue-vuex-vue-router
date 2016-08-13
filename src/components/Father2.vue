<template>
  <div>
    <a v-link="{ path: '/father1Page' }">{{ msg }}</a>
    count={{ getStoreCount }}
    <img src="../assets/logo.png" alt="" />
  </div>
</template>

<script>
import commonFunction from '../commonFunction/commonFunction.js';

export default {
  data () {
    return {
      msg: 'Father2'
    }
  },
  vuex:{
    getters:{
      getStoreCount(state){
        return state.count
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div{
  a{
    color:#456782;
  }
}
</style>
