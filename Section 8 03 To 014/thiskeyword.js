//this keyword or this variable it us



const deep = {
    fistname: 29,
    LastPage: 23,
    calage: function() {
        return this.fistname - this.LastPage; // Use 'this' to refer to properties of the object
    }
};

console.log(deep.calage()); 