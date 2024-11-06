//sorting : sorting used to arrange the string or mumerice array order in sequietal way 
//sorting will arrange the all the elements in alphabetic format 
//sorting will do effect the orginal array and retrun new array
const owners = ['Abdul maqsad','lawrance bishnoi','deep','sidarth sir','surajbhai','selmon bhoi']
console.log(owners.sort())
console.log(owners)

////////////////////////////////////////////SORTING MOVMENTS ///////////////////////////
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted; 
  displayMovements(currentAccount.movements, sorted); 
});