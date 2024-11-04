
//////////////////////////////////////////////TRANSFER MONEY USING NAME//////////////////////
btnTransfer.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default form submission
  
    const amount = Number(inputTransferAmount.value); // Get the transfer amount
    const receiverAcc = accounts.find(acc => acc.username === inputTransferAmount.value); // Get the receiver account based on the input username
  
    console.log(amount, receiverAcc); // Log the amount and receiver account
  
    
  });
  