const selectAllButtons = document.querySelector(".buttons");
const screenInput = document.querySelector(".screen");
const btnClear = document.querySelector(".btn-clear");
const selectEqualBtn = document.querySelector(".btn-equal");

selectAllButtons.addEventListener("click", function (event) {
  event.preventDefault();
  const currentElement = event.target;
  // console.log(currentElement.classList, "currentElement");
  //agar current element me class exist karti hogi to true
  if (currentElement.classList.contains("btn")) {
    // console.log("clicked on btn class");
    const dataNumAttr = currentElement.getAttribute("data-num");
    //previous value ko add kardo with new value
    screenInput.value += dataNumAttr;
    // console.log(dataNumAttr, "dataNumAttr");
  }
});

btnClear.addEventListener("click", function (event) {
  event.preventDefault();
  screenInput.value = "";
});

selectEqualBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log(eval(screenInput.value), "equal btn clicked!");
  screenInput.value = eval(screenInput.value);
});

screenInput.addEventListener("input", function (e) {
  e.preventDefault();
  const currentElement = e.target;
  if (testOnlyLetters(currentElement.value)) {
    currentElement.value = "";
  }
});

function testOnlyLetters(string = "") {
  return /[a-zA-Z]+$/.test(string);
}
