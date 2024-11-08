/////////////////////////////////////////////////Adding the dates in movments and currentbalance
const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = ''; // Clear previous movements
  
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  
    movs.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
  
      // Fetch and format the date for each movement
      const date = new Date(account1.movementsDates[i]);
      const day = `${date.getDate()}`.padStart(2, '0');
      const month = `${date.getMonth() + 1}`.padStart(2, '0');
      const year = date.getFullYear();
      const displayDate = `${day}/${month}/${year}`
  
      // HTML structure for each movement row
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;
  
      // Insert HTML into container
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}