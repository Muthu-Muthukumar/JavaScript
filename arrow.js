var f = (value)=>{
    if (value%2==0){
        return true;
    }
    return false;
}
console.log(f(20));

const res = [20,30,40,50].every(f);
console.log(res);

//call back and arrow
var a = [2,4,6,8].every((t)=>{
      return t%2 == 0;
});
console.log(a);

var w = [2,4,6,8].every((e)=>(e%2==0));
console.log(w);


