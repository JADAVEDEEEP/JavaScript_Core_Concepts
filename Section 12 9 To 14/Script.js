// /////////////////////////////////////////////////FAKE USER LOGIN /////////////////////////////////////////

// ///////////////////////////////////////////////////// BANK LIST WITH NEW SECTION /////////////////////////////
////////////////////BANK LIST PREVIOUS CODE //////////////////////////////////////////////

const account1 = {
    owner: 'deep jadav',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  
    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
  };
  
  const accounts = [account1, account2];
  
//////////////////////////////////////////////// SELECTING ALL CLASS ELEMENTS FOR DOM MANIPULATION //////////////////////////////////////
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

};

//////////////////////////////////////////////// IMPLEMENT DOM LOGICS OF BANK LIST /////////////////////////////////////////////
const formatmovmentdate = function(date){
  const caldayspassed = (date1,date2) => 
    Math.abs(date1-date2)/(1000*60*60*24)
 const day = `${date.getDate()}`.padStart(2, '0');
 const month = `${date.getMonth() + 1}`.padStart(2, '0');
 const year = date.getFullYear();
   return `${day}/${month}/${year}`

}

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // Clear previous movements

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(currentAccount.movementsDates[i]);
    const displayDate = formatmovmentdate(date);

    // Format the movement amount in the current account's currency and locale
    const formattedMov = new Intl.NumberFormat(currentAccount.locale, {
      style: 'currency',
      currency: 'INR',
    }).format(mov);

    // HTML structure for each movement row
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    // Insert HTML into container
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

///////////////////////////////// COMPUTING USERNAME ////////////////////////////////////
// Creating usernames for each account
const createUsername = function (accounts) {
  accounts.forEach(function (account) {
      account.username = account.owner
          .toLowerCase()
          .split(' ')
          .map(name => name[0])
          .join('');
  });
};

createUsername(accounts); // Call this to set up usernames
console.log(accounts);

////////////////////////////////////////// MAP USING ARROW FUNCTION //////////////////////////////////
// Here we try to convert the euro into USD using the map method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroTOusd = 1.1;

///////////////////////////////////////////////////// FILTER METHOD //////////////////////////////////////////////////
// FILTER METHOD: It will select the elements that pass the condition
const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposit);

///////////////////////////////////////////////////// REDUCE METHOD CURRENT BALANCE  //////////////////////////////////////////
// Calculate the current balance using reduce
const calcDisplayBalance = function (account) { // Accept a single account
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}INR`;



};
calcDisplayBalance(account1); // Pass the account object instead of movements

/////////////////////////////////////////////// EVENT HANDLERS USER LOGIN  ///////////////////////////

// let currentAccount = account1;
// labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
// containerApp.style.opacity = 100; 
// updateUI(currentAccount); 

////////////////////////////////////////////CREATING DATES IN ACCOUNTS AND LOGIN PART ///////////////////////////////////////////////

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

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
    const seconds = now.getSeconds()
    labelDate.textContent=`${day}/${Month}/${Year} Time: ${hour} : ${min} : ${seconds}`
    }
    setInterval(updateTime, 1000);  
    // Display movements and balance for the logged-in account
    displayMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount);
  }
});

//////////////////////////////////////////////TRANSFER MONEY USING NAME//////////////////////
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //DISPLAY THE DATW ON EVERY TRANSFER MONEYT
    currentAccount.movementsDates.push(new Date())
    receiverAcc.movementsDates.push(new Date())

    displayMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount);

    inputTransferAmount.value = inputTransferTo.value = '';

    console.log(`Transfer of ${amount}€ to ${receiverAcc.owner} completed.`);
  } else {
    console.log('Transfer invalid');
  }
});

///////////////////////////////////////////////SOME AND EVERY REQUEST LOAN///////////////////////////////////////////////////////////////
// //includes : Check the equality of array 
// console.log(movements)
// console.log(movements.includes(-130))

// //some : it checks the condition 
// const deposits = movements.some(mov => mov > 1500);
// console.log(deposits);

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  // Check if the loan amount is greater than 0 and at least 10% of the loan is covered by past deposits
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add the loan amount to the current account movements
    currentAccount.movements.push(amount);

    // ADD LOAN NEW DATE 
    //DISPLAY THE DATW ON EVERY TRANSFER MONEYT
    currentAccount.movementsDates.push(new Date())


    // Update the UI with the new movements and balance
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

////////////////////////////////////////////////FINDINDEX METHOD WITH CLOSE ACCOUNT//////////////////////////////////

btnClose.addEventListener('click', function (e) {
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
/////////////////////////////////////////////SORTING MOVMENTS ///////////////////////////
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted; 
  displayMovements(currentAccount.movements, sorted); 
});


