var user = {
    firstname: "alex",
    lastname: "carry",
    role: "admin",
    logincount: 32,
    facebooksignedin: false,
    courselist: [],
    
    buycourse: function (coursename) {
        this.courselist.push(coursename);
    },

    getcoursecount: function () {
        return `${this.firstname} is enrolled in a total of ${this.courselist.length} course(s)`;
    },

    getinfo:function () {
        console.table({
             Firstname:this.firstname,
             Lastname:this.lastname,
             Role:this.role,
             Logincount:this.logincount,
             Facebooksignedin:this.facebooksignedin,
             Coursecount:this.courselist.length,
             Courses:this.courselist.join(",") || "None"
        });
        
    }
}; 

user.buycourse("Flutter");
user.buycourse("React");

console.log(user.getcoursecount());


user.getinfo();