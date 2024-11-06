////////////////////////////////////////////////FINDINDEX METHOD WITH CLOSE ACCOUNT//////////////////////////////////
btnClose.addEventListener('click', function(e) {
    e.preventDefault();
  
    
    if (currentAccount.username === inputCloseUsername.value && 
        Number(inputClosePin.value) === currentAccount.pin) {
  
      const index = accounts.findIndex(acc => acc.username === currentAccount.username);
      console.log("Index to delete:", index);
      
      if (index !== -1) {
        accounts.splice(index, 1);
        console.log("Account deleted:", accounts);
        containerApp.style.opacity = 0;
      }
    }
  });
  