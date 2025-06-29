// for (let i = 0; i < 10; i++) {
 //   console.log(i);
// }

const states = [
    "Tamilnadu",
    "kerala",
    "karnataka",
    "delhi",
    1789,
    "mumbai",
    "kashmir",
    "nepal",
];
for(let i=0;i<states.length;i++){
    if(typeof states[i]!=="string") continue;
    console.log(states[i]);
    
}
for(let i=0;i<states.length;i++){
    if(typeof states[i]!=="string") break;
    console.log(states[i]);
    
}