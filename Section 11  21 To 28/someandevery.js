///////////////////////////////////////////////SOME AND EVERY REQUEST LOAN///////////////////////////////////////////////////////////////
// //includes : Check the equality of array 
// console.log(movements)
// console.log(movements.includes(-130))

// //some : it checks the condition 
// const deposits = movements.some(mov => mov > 1500);
// console.log(deposits);

// btnLoan.addEventListener('click', function (e) {
//     e.preventDefault();
  
//     const amount = Number(inputLoanAmount.value);
  
//     // Check if the loan amount is greater than 0 and at least 10% of the loan is covered by past deposits
//     if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
//       // Add the loan amount to the current account movements
//       currentAccount.movements.push(amount);
  
//       // Update the UI with the new movements and balance
//       updateUI(currentAccount);
//     }
//     inputLoanAmount.value = '';
//   });

//every : in callback function element will be pass the condtion but every is includes only postive elments 
  const deep = [430, 1000, 700, 50, 90]
  
  deep.some('').every((deep) => {
    console.log("every element:", deep);
});