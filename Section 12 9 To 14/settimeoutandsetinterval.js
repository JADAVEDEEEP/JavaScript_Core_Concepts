//settimeout: it is the buikt in js function that allows us to manage our userinterfance acroing to timeout you can add delay or loding 
btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
  //set interval : its basically used to run function repedatly like banaccound time clicking verye seond 
    // Find the account with the matching username
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display welcome message
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
      containerApp.style.opacity = 100;
      //define current date 
      const updateTime = function(){
      const now = new Date()
      const day = `${now.getDate()}`.padStart(2,'0')
      const Month = `${now.getMonth()+1}`.padStart(2,'0')
      const Year = now.getFullYear()
      const hour =now.getHours()
      const min = now.getMinutes()
      labelDate.textContent=`${day}/${Month}/${Year} Time: ${hour}:${min}`
      }
      setInterval(updateTime, 1000);  
      // Display movements and balance for the logged-in account
      displayMovements(currentAccount.movements);
      calcDisplayBalance(currentAccount);
    }
  });
  //set time out used to diplay the delay of any functio nafter seconds 
  setTimeout(() => {
    console.log('This will be logged after 3 seconds');
  }, 3000)