export default {
  log(str){
    console.log(str);
  },
  primaryKeyHandle(key,val,list,cb){
    let i;
    let listLength = list.length;
    for(i=0;i<listLength;i++){
      if(val == list[i][key]){
        cb(list[i],i);
        return;
      }
    }
  }
}
