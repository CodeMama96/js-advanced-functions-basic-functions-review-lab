// Your code here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!` ;
}


function mondayWork(activity= "go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(sym = "*"){
    let result = function(str = "special"){
        return `You are ${sym}${str}${sym}!`
    }
   return result
}
const Calculator = {
add: function(a,b){
return a+b
},

subtract: function(a,b){
return a-b
},

multiply: function(a,b){
return a*b
},

divide: function(a,b){
return a/b
}
}



let actionApplyer = function(int, arr){
let a = int

for (let i = 0; i < arr.length; i++ ){
    a = arr[i](a)
  }

  return a
}
