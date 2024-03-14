let DATA = "Website information";
class User 
{
    constructor(name,email)
    {
        this.name = name;
        this.email = email;
    }
    viewData()
    {
        console.log("View Website data",DATA);
    }

}

class Admin extends User{
    constructor(name,email)
    {
        super()
    }
    editData()
    {
        console.log("Can edit website information");
    }
}
let user = new User("Vineeth Reddy B","vineethreddyys@gmail.com");
user.viewData();

let admin = new Admin("Zama","zama@gmail.com");
admin.editData();