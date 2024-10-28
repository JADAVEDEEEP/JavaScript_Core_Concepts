/*The call() method takes arguments separately.

The apply() method takes arguments as an array.*/

const person = {
    Name:'deep jadav',
    age : 25,
    city : 'ahemdbad',

    call : function (){
        console.log(`Name:${this.Name} Age: ${this.age} City: ${this.city}`)
    }
}
person.call.apply(person)
person.call()

//////////////////////////////////////////////EXAMPLE /////////////////////////////////
const object = {
    name : 'deep',
    age : '30',
    call : function (){
        console.log(`Name:${this.name} Age: ${this.age}`)
    }
}

object.call()