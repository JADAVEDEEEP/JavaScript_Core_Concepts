/////////////////////////////////////////////////FAKE USER LOGIN /////////////////////////////////////////
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'deep jadav',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

////////////////////////////////////////////////// STORE USER PROFILE INSIDE OF ARRAY ////////////////////////////////////////
const accounts = [account1, account2, account3, account4];

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
  displayMovements(acc.movements,sorted);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
};

//////////////////////////////////////////////// IMPLEMENT DOM LOGICS OF BANK LIST /////////////////////////////////////////////

// We pass that data directly into the function `displayMovements` where it will store the deposits and withdrawals
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

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

// Convert euros to USD using arrow function
const movmentusd = movements.map(mov => mov * euroTOusd);
console.log(movements);
console.log(movmentusd);

// Convert euros to USD using a for loop
const movementsUsdFor = [];
for (const mov of movements) movementsUsdFor.push(mov * euroTOusd);
console.log(movementsUsdFor);

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
  labelBalance.textContent = `${account.balance}€`;
};
calcDisplayBalance(account1); // Pass the account object instead of movements

/////////////////////////////////////////////// EVENT HANDLERS USER LOGIN  ///////////////////////////

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  // Find the account with the matching username
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

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

  const amount = Number(inputLoanAmount.value);

  // Check if the loan amount is greater than 0 and at least 10% of the loan is covered by past deposits
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add the loan amount to the current account movements
    currentAccount.movements.push(amount);

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