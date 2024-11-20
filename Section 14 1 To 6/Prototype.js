//



const Person1 = function (firstname, birthyear) {
    //this keword create initlize the objects values in console 
    this.birthyear = birthyear;
    this.firstname = firstname;
  };
  
  const deep = new Person1('deep', 1999);
  //we inherit the property peron1 object birthyear in to calage object  
  Person1.prototype.calage = function () {
    console.log(2037 - this.birthyear);
  };
  
  // Log prototype after adding `calage`
  console.log(Person1.prototype);
  console.log(deep);
  
  deep.calage(); // Call the method
  