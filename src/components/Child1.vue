<template>
  <h1>{{ msg }}</h1>
  <a v-link="{ path: '/father2Page' }">tofather2</a>
  <button @click="goFather2">tofather2</button>
</template>

<script>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
