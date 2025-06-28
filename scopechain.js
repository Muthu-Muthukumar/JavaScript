let gv = 30;
// second();
function first(){
    let lv = 40;
    let second = function(){
        console.log(lv);
    }
    let third = function(){
        console.log(gv);}
    second();
    third();
}
first();
//second();
