// const student = {
//     fullName: "Vineeth Reddy B",
//     marks: 94,
//     printMarks: function()
//     {
//         console.log("marks: ",this.marks);
//     }

// }


const employee = {
    calcTax1()
    {
        console.log("The tax amount is 10%");
    },

    calcTax2 : function()
    {
        console.log("The tax amount is 20%");
    }

};

const vineeth = {
    salary:1000000,
};

vineeth.__proto__ = employee
