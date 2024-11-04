/////////////////////////////////////////////////////////////LOGIN IMPLEMETION //////////////////////////////////////
btnLogin.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form from submitting
  
    // Find the account with the matching username
    const currentacc = accounts.find(acc => acc.username === inputLoginUsername.value);
  
    if (currentacc?.pin === Number(inputLoginPin.value)) {
        // Display welcome message
        labelWelcome.textContent = `Welcome back, ${currentacc.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;
  
        // Display movements and balance for the logged-in account
        displayMovements(currentacc.movements);
        calcDisplayBalance(currentacc.movements);
    }
  });
  ///////////////////////////////////////////////////////////TRANSFER USERS AND MONEY LOGIC///////////////////////
  btnTransfer.addEventListener('click',function(e){
    e.preventDefault()
    const amount = Number(inputTransferAmount.value)
    const receiverAcc = accounts.find()(acc=>acc.username=== TransferAmount.value)
    console.log(amount,receiverAcc)
})