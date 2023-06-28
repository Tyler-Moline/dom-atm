class bankUser {
  constructor(userName, pin) {
    this.userName = userName;
    this.pin = pin;
    this.balance = 1000;
  }

  deposit(money) {
    this.balance += money;
    return this.balance;
  }

  withdraw(money) {
    this.balance -= money;
    return this.balance;
  }

  balance() {
    return this.balance;
  }
}
usersArr = [];

// This is creating instances of the object
const tyler = new bankUser("tyler", "1234");
const ian = new bankUser("ian", "1234");
const james = new bankUser("james", "1234");

usersArr.push(tyler);
usersArr.push(ian);
usersArr.push(james);

logout = () => {
  location.reload();
};

loginBtn.onclick = () => atm(firstName.value, pin.value);

let currentUser = "";

function atm(first, pin) {
  for (const i in usersArr) {
    if (usersArr[i].userName === first && usersArr[i].pin === pin) {
      currentUser = usersArr[i];
      console.log(currentUser);
      mainWrapper.style.display = "none";
      options.style.display = "block";
    }
  }
  if (currentUser === "") {
    mainWrapper.style.display = "none";
    const warning = document.createElement("h1");
    warning.textContent = "Invalid login";
    header.appendChild(warning);
    setTimeout(logout, 1500);
  }
}

deposit.onclick = () => {
  let depositAmount = Number(prompt("Please input your deposit amount"));
  currentUser.deposit(depositAmount);
  atmResponse.textContent = `$${depositAmount} was deposited to your account`;
};

withdraw.onclick = () => {
  let withdrawAmount = Number(prompt("Please input your withdraw amount"));
  if (withdrawAmount > currentUser.balance) {
    atmResponse.textContent = `INSUFFICIENT BALANCE`;
  } else {
    currentUser.withdraw(withdrawAmount);
    atmResponse.textContent = `$${withdrawAmount} was withdrawn from your account`;
  }
};

viewBalance.onclick = () => {
  atmResponse.textContent = `Your current balance is $${currentUser.balance}`;
};

quit.onclick = () => {
  atmResponse.textContent = `Thank you for using this ATM!`;
  setTimeout(logout, 1500);
};
