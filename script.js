let cardNum = document.querySelector(".card-num");

let submitBtn = document.querySelector(".form-submit");

let pName = document.querySelector(".pName");

let err = document.querySelectorAll(".error-msg");

let month = document.querySelector(".mm");
let year = document.querySelector(".yy");
let cvc = document.querySelector(".cvc-num");

function allErrorChecker(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains("hidden")) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function numChecker(str) {
  for (let i = 0; i < str.split("").length; i++) {
    if (Number.isFinite(+str[i])) {
      continue;
    } else {
      return true;
    }
  }
  return false;
}

function valueChecker(target, num, addOrRemove) {
  if (addOrRemove == "add") {
    target.classList.add("error--border");
    document.querySelectorAll(".error-msg")[num].classList.remove("hidden");
  } else {
    target.classList.remove("error--border");
    document.querySelectorAll(".error-msg")[num].classList.add("hidden");
  }
}

let word;

cardNum.addEventListener("input", function (e) {
  valueChecker(cardNum, 0, "remove");
  document.querySelectorAll(".error-msg")[0].textContent =
    "Wrong Format, numbers only";

  word = cardNum.value;
  numChecker(word)
    ? valueChecker(cardNum, 0, "add")
    : valueChecker(cardNum, 0, "remove");
});

month.addEventListener("input", function () {
  valueChecker(month, 1, "remove");
});

year.addEventListener("input", function () {
  valueChecker(year, 1, "remove");
});

cvc.addEventListener("input", function () {
  valueChecker(cvc, 2, "remove");
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // // console.log(month.value);
  // if (month.value == "") {
  //   // document.querySelectorAll(".error-msg")[1].classList.remove("hidden");
  //   // month.classList.add("error--border");
  //   valueChecker(month, 1, "add");
  // } else {
  //   document.querySelectorAll(".error-msg")[1].classList.add("hidden");
  //   month.classList.remove("error--border");
  //   valueChecker(month, 1, "remove");
  // }
  month.value == ""
    ? valueChecker(month, 1, "add")
    : valueChecker(month, 1, "remove");
  year.value == ""
    ? valueChecker(year, 1, "add")
    : valueChecker(year, 1, "remove");
  if (month.value == "" || year.value == "")
    document.querySelectorAll(".error-msg")[1].classList.remove("hidden");
  cvc.value == ""
    ? valueChecker(cvc, 2, "add")
    : valueChecker(cvc, 2, "remove");
  // cardNum.value == ""
  //   ? valueChecker(cardNum, 0, "add")
  //   : valueChecker(cardNum, 0, "remove");
  if (cardNum.value == "") {
    valueChecker(cardNum, 0, "add");
    document.querySelectorAll(".error-msg")[0].textContent = "Can't be blank";
  } else {
    valueChecker(cardNum, 0, "remove");
  }

  if (allErrorChecker(err)) {
    document.querySelector(".form").classList.add("hidden");
    document.querySelector(".success").classList.remove("hidden");
    document.querySelector(".credit-num").textContent = word;
    document.querySelector(".person-name").textContent = pName.value;
    document.querySelector(".month-exp").textContent = month.value;
    document.querySelector(".year-exp").textContent = year.value;
    document.querySelector(".cvc-pass").textContent = cvc.value;
  }
});

document.querySelector(".continue").addEventListener("click", function () {
  document.querySelector(".form").classList.remove("hidden");
  document.querySelector(".success").classList.add("hidden");
});
