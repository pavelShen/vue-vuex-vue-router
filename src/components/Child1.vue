<template>
  <h1>{{ msg }}</h1>
  <a v-link="{ path: '/father2Page' }">tofather2</a>
  <button @click="goFather2">tofather2</button>
  <button @click="addStoreCount">addStoreCount</button>
</template>

<script>
import commonFunction from '../commonFunction/commonFunction.js';

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'child1'
    }
  },
  methods:{
    goFather2(){
      this.$router.go({
        path: '/father2Page'
      })
    }
  },
  vuex:{
    actions:{
      addStoreCount({dispatch,state},data){
        dispatch('INCREMENT',2)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
