//its ofent to use the manully set the this keyword and store the values
//here wer can say that the member s value


const person = {
    Name: 'deep jadav',
    age: 25,
    city: 'ahmedabad',
    call: function () {
        console.log(`Name: ${this.Name} Age: ${this.age} City: ${this.city}`);
    }
};

const member = {
    Name: 'deep',
    age: 25,
    city: 'amreli',
    }


// Bind the call method from person to member and call it
const memberCall = person.call.bind(member);
memberCall(); // This will print member's details 
person.call()