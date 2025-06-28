function cal(a,b,r){
    switch(r)
    {
        case "a":
            return a+b;
            break;
         case "s":
            return a-b;
            break;
         case "m":
            return a*b;
            break;
         case "d":
            return a/b;
            break;
    }
}

var a=20;
var b=5;
var r="d";
var s=cal(a,b,r);
console.log(s); 