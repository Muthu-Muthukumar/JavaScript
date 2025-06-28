var t = new Array("note","pen","pencil","book");
console.log(t);
console.log(t[2]);
t[0]="ink";
console.log(t);
console.log("Length of an array: ",t.length);
t.pop();
console.log(t);

t.unshift("box");
console.log(t);
t.shift();
console.log(t);
console.log(t.indexOf("pencil"));
console.log(t.indexOf(90));

console.log(Array.from("pencil"));