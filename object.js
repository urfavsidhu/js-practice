let student = {
    name: "Sidharth",
    age: 19,
    city: "Kanpur",
    collage: "PSIT",
    introduce: function(){
        console.log(`Hi mai ${this.name} hu ${this.collage} me padhta hu.`)
    },
    study: function(){
        console.log(`${this.name} abhi padh raha hai.`)
    }
    
};

// console.log(student.name);
// console.log(student.age);
// console.log(student.city);
// console.log(student.collage);
// console.log(`${student.name} ${student.city} se hai jo ki ${student.age} years ka hai or ${student.collage} me pdhta hai.`);

student.introduce();
student.study();