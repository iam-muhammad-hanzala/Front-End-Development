//DOM stands for DOCUMENT OBJECT MODEL

//console.log(document) //you have all html in this document object

const selectTaskButton = document.querySelector("#task-button");
// const selectTaskButton = document.getElementById("task-button");
console.log(selectTaskButton, "selectTaskButton");

selectTaskButton.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log("clicked!");

  // return;
  //prevent = rokna
  //default functionality
  const selectTaskListText = document.querySelector(".card-title");

  // console.log(selectTaskListText, "selectTaskListText");
  // console.log(previousText, "previousText");

  // return;

  if (selectTaskListText.innerText === "Task List") {
    selectTaskListText.innerText = "AAAAA";
    // selectTaskListText.style.color = "yellow";
  } else {
    selectTaskListText.innerText = "Task List";
    // selectTaskListText.style.color = "red";
  }
  //   console.log(selectTaskListText, "selectTaskListText");
});

let valOfDom;
valOfDom = document;
// valOfDom = document.all;
// valOfDom = document.all.length;
// valOfDom = document.body;
// valOfDom = document.head;
// valOfDom = document.doctype;
// valOfDom = document.URL;
// valOfDom = document.characterSet;
// valOfDom = document.contentType;
valOfDom = document.forms;
valOfDom = document.forms[0];
valOfDom = document.forms[1];
valOfDom = document.links; //ancor tag
valOfDom = document.links[0]; //ancor tag
valOfDom = document.links[0].className; //ancor tag
valOfDom = document.links[0].classList; //ancor tag
// valOfDom = document.links[0].classList.add("asdasd"); //ancor tag
valOfDom = document.links[0].classList.remove("asdasd"); //ancor tag
valOfDom = document.links[0];

valOfDom = document.images;

valOfDom = document.scripts;
valOfDom = document.scripts[0].getAttribute("src");

const cardTitle = document.querySelector(".card-title");
// console.log(cardTitle, "cardTitle");

cardTitle.style.color = "yellow";
cardTitle.style.background = "red";
cardTitle.style.padding = "20px";
cardTitle.style.marginBottom = "20px";
cardTitle.style.display = "none";
cardTitle.style.display = "block";
cardTitle.textContent = "Changed Text";
cardTitle.innerHTML = "<p style='color:purple'>ASDASDASDASD</p>";

// console.log(valOfDom);

// let allLiElements = document.querySelectorAll("ul li");
// let allLiElements = (document.querySelector(
//   "ul li:nth-child(2)"
// ).innerHTML = `<li class="collection-item">
//                   List Item
//                   <a href="#" class="delete-item secondary-content">
//                     <i class="fa fa-remove"></i>
//                   </a>
//                 </li>`);

//even number = 2,4,6,8
//odd number = 1,3,5,7

const selectAllLiElement = document.querySelectorAll("ul li:nth-child(even)");

//array ko ek ek kar ke access karega foreach k zariye see isko loop kehte hein
selectAllLiElement.forEach(function (singleUlElement, index) {
  singleUlElement.style.color = "red";
});

const selectOddLiElements = document.querySelectorAll("ul li:nth-child(odd)");
selectOddLiElements.forEach(function (singleElement) {
  singleElement.style.color = "yellow";
});

//Traversing in Dom

//up down in dom

const selectAllDeleteButtons = document.querySelectorAll(".fa-remove");

selectAllDeleteButtons.forEach(function (singleElement) {
  singleElement.addEventListener("click", function (event) {
    event.preventDefault(); // default functionality
    const currentElement = event.target;
    // console.log(currentElement, "currentElement");
    if (confirm("Are you sure ?")) {
      currentElement.parentElement.parentElement.remove();
    }
    // console.log(
    //   ,
    //   "currentElement.parentElement"
    // );
  });
});

//traversing in children

// document.querySelector(".collection-item").children;

//get children nodes

//node type
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node (line break)
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

let valTraversingDom;
const list = document.querySelector("ul.collection");

valTraversingDom = list.childNodes;

valTraversingDom = list.parentNode; //

//select first and last child

valTraversingDom = list.firstChild;
valTraversingDom = list.firstElementChild;

// Last child
valTraversingDom = list.lastChild; //with nodes
valTraversingDom = list.lastElementChild; //only get element

valTraversingDom = list.childElementCount; //only get element

const firstUlElement = document.querySelector("li.collection-item:first-child");

valTraversingDom = firstUlElement.nextSibling; //with nodes
valTraversingDom = firstUlElement.nextElementSibling; //with out nodes

valTraversingDom = firstUlElement.nextElementSibling.previousElementSibling;

// console.log(valTraversingDom, "valTraversingDom");

//closest
// find close element in parent element
// document.querySelector(".fa-remove").closest('.collection-item')

//Create Element In Dom

//<h1 id="print-my-name">My Name is Muzammil</h1>;
const h1Element = document.createElement("h1"); //<h1></h1>
h1Element.innerText = "My Name is Muzammil"; //<h1>My Name is Muzammil</h1>
h1Element.setAttribute("id", "print-my-name"); //<h1 id="print-my-name">My Name is Muzammil</h1>;

console.log(h1Element); //<h1 id="print-my-name">My Name is Muzammil</h1>;

//Add Html In to Dom
// document.querySelector(".collection").append(`ASDASDASD`);
// document.querySelector(".collection").append(h1Element);
// document.querySelector(".collection").appendChild(h1Element);

/*
<li class="collection-item" >
                  List Item
                  <a href="#" class="delete-item secondary-content">
                    <i class="fa fa-remove"></i>
                  </a>
                </li>
*/

//if we want to create this type of html in dom

const liElement = document.createElement("li");
liElement.className = "collection-item";
liElement.innerHTML = ` List Item
                  <a href="#" class="delete-item secondary-content">
                    <i class="fa fa-remove"></i>
                  </a>`;

// console.log(liElement, "liElement");

// REPLACE ELEMENT

const newHeading = document.createElement("h2"); //<h2></h2>
newHeading.id = "task-title"; //<h2 id="task-title"></h2>
newHeading.innerText = "NEW TEXT TEXT"; //<h2 id="task-title">NEW TEXT TEXT</h2>

//Select Parent Element
const selectParentActionElement = document.querySelector(".card-action");

//Find Old Element
const oldElement = document.querySelector("#task-title");

selectParentActionElement.replaceChild(newHeading, oldElement); //replace kardo purane element ko new wale se

//Event Listner

/* In JavaScript, an event listener is a function that waits for a specific event to occur 
and then responds to that event. Events can be various user interactions with a web page, 
such as clicking a button, moving the mouse, pressing a key, submitting a form, etc. */

const clearTaskButton = document.querySelector(".clear-tasks");
// clearTaskButton.addEventListener("click", runEvent);
// clearTaskButton.addEventListener("dblclick", runEvent);
// clearTaskButton.addEventListener("mousedown", runEvent);
// clearTaskButton.addEventListener("mouseup", runEvent);
// clearTaskButton.addEventListener("mouseenter", runEvent);
// clearTaskButton.addEventListener("mouseleave", runEvent);
// clearTaskButton.addEventListener("mouseover", runEvent);

/*
mouseover vs mouseenter
The mouseover event triggers when the mouse pointer enters the div element, 
and its child elements. The mouseenter event is only triggered 
when the mouse pointer enters the div element.

*/

//input field events
const taskInputField = document.getElementById("task");

// taskInputField.addEventListener("input", runEvent); //jab jab input aye event fire hoga
// taskInputField.addEventListener("change", runEvent); //jab jab input me change ayega event fire hoga
// taskInputField.addEventListener("keyup", runEvent);
// taskInputField.addEventListener("keydown", runEvent);
// taskInputField.addEventListener("keypress", runEvent);
// taskInputField.addEventListener("focus", runEvent);
// taskInputField.addEventListener("blur", runEvent);
// taskInputField.addEventListener("cut", runEvent);
// taskInputField.addEventListener("paste", runEvent);

function runEvent(event) {
  event.preventDefault();
  console.log(`Event Type: ${event.type}`);
  // console.log("working");
  // console.log(event.target.value, "input value");
  // const inputValue = event.target.value;
  // const taskTitle = document.querySelector("#task-title");
  // taskTitle.innerText = inputValue;
}

// const selectDropdownElement = document.querySelector("#abc-dropdown");
// selectDropdownElement.addEventListener("change", function (event) {
//   event.preventDefault();

//   // console.log(event.target.value, "dropdown is changed");
//   console.log(event.target.value);
// });

const selectSpecialDropdown = document.querySelector("#special-btn");

selectSpecialDropdown.addEventListener("click", function (e) {
  e.preventDefault();
  const selectCustomDropdownUlElement =
    document.querySelector("#custom-dropdown");
  console.log(selectCustomDropdownUlElement, "selectCustomDropdownUlElement");

  //agar active-special-dropdown class mujood hai to true warna false = contains
  if (
    selectCustomDropdownUlElement.classList.contains("active-special-dropdown")
  ) {
    selectCustomDropdownUlElement.className = "";
  } else {
    selectCustomDropdownUlElement.className = "active-special-dropdown";
  }

  // console.log("clicked special dropdown");
});
