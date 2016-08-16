<template>
  <div>
    {{ msg }}
    <child1></child1>
    <br />
    <child2></child2>

    <ul>
      <li v-for="item in list">{{ item.id }}-----{{ item.class }}-----{{ item.newProp }}</li>
    </ul>
  </div>
</template>

<script>
import commonFunction from '../commonFunction/commonFunction.js';

import child1 from './Child1.vue';
import child2 from './Child2.vue';

export default {
  data () {
    return {
      msg: 'Father1',
      list: [{
        id:1,
        class:"班级1"
      },{
        id:2,
        class:"班级2"
      },{
        id:3,
        class:"班级3"
      },{
        id:4,
        class:"班级4"
      }]
    }
  },
  components:{
    child1,
    child2
  },
  methods:{
    commonFunTest(){
      var that = this;
      commonFunction.primaryKeyHandle('id',3,that.$data.list,function(item,index){
        that.list.$set(index,Object.assign({},that.list[index],{ newProp: 'Changed!'}));
      })
    }
  },
  ready(){
    commonFunction.log('aa');
    this.commonFunTest();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
