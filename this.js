let person = {
    fname : "john",
    lname : "doe",
    id    : 90,
    my:function(){
        return this;

    }
};
console.log(person.my());