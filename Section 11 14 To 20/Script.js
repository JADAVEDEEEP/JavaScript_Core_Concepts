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
  owner: 'Steven Thomas Williams',
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

//////////////////////////////////////////////// IMPLEMENT DOM LOGICS OF BANK LIST /////////////////////////////////////////////

/////////////////////////////// FAKE USER ACCOUNT 1 MOVEMENTS ///////////////////////////////
// We pass that data directly into the function `displayMovements` where it will store the deposits and withdrawals
const displayMovements = function (movements) { // Function to store the movements
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) { // Used to store the current movement  
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
displayMovements(account1.movements);

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
const calcDisplayBalance = function (accounts) {
  accounts.balance = accounts.movements.reduce((acc, mov) => acc + mov, 0);
  accounts.balance=balance
  labelBalance.textContent = `${accounts.balance}€`;
};
calcDisplayBalance(account1.movements);

/////////////////////////////////////////////// EVENT HANDLERS USER LOGIN  ///////////////////////////
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
//////////////////////////////////////////////TRANSFER MONEY USING NAME//////////////////////
btnTransfer.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default form submission

  const amount = Number(inputTransferAmount.value); // Get the transfer amount
  const receiverAcc = accounts.find(acc => acc.username === inputTransferAmount.value); // Get the receiver account based on the input username

  console.log(amount, receiverAcc); // Log the amount and receiver account

  
});
