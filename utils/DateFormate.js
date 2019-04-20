function DateFormate(str){
  var list1=str.substr(0,4)
  var list2=str.substr(4,2)
  var list3=str.substr(6,2)
  return list1+"年"+list2+"月"+list3+"日"
}

module.exports ={
  DateFormate
}