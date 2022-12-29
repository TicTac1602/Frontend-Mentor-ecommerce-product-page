const elementCount = document.getElementById("count-value");
const displayImageElement = document.getElementById("displayed-image");

function add() {
  let value = elementCount.value;
  value++;
  elementCount.value = value;
}

function sub() {
  let value = elementCount.value;
  value--;
  if (value < 0) {
    value = 0;
  }
  elementCount.value = value;
}

function changeFocus(number, event) {
  thumbElements = document.getElementsByClassName("image-container");
  for (let i = 0; i < thumbElements.length; i++) {
    const element = thumbElements[i];
    element.classList.remove("selected");
  }
  event.target.parentNode.classList.add("selected");
  const source = "./images/image-product-" + number + ".jpg";
  displayImageElement.children[0].src = source;
}

dstElement = document.getElementById("lightbox-box");

function getFocus(event) {
  element = event.target;
  var image = document.createElement("img");
  image.setAttribute("src", element.src);
  image.setAttribute("draggable", "false");
  dstElement.appendChild(image);
  dstElement.classList.toggle("active");
}
function looseFocus() {
  dstElement.children[0];
  if (dstElement.childElementCount > 0) {
    dstElement.children[0].remove();
  }
  dstElement.classList.toggle("active");
}

function showElement(name) {
  //event.target.classList.toggle("active");
  // if cart styling ...
  element = document.getElementById(name);
  element.classList.toggle("active");
}

function buildCartElement(number) {
  if (number == 0) {
    return;
  }
  var element = document.createElement("div");
  element.classList.add("cart-element");
  var image = document.createElement("img");
  image.setAttribute("src", "./images/image-product-1-thumbnail.jpg");
  element.appendChild(image);
  var div_text = document.createElement("div");
  var content = document.createTextNode("Fall Limited Edition Sneakers");
  result = 125 * number;
  var content2 = document.createTextNode("$125 x " + number);
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const span = document.createElement("span");
  span.appendChild(document.createTextNode(" $" + result));
  p2.appendChild(content2);
  p2.appendChild(span);
  p.appendChild(content);
  div_text.appendChild(p);
  div_text.appendChild(p2);
  element.appendChild(div_text);
  var trash_can = document.createElement("img");
  trash_can.setAttribute("src", "./images/icon-delete.svg");
  trash_can.setAttribute("onclick", "deleteParent(event)");
  element.appendChild(trash_can);
  return element;
}

list = document.getElementById("checkout-resume");
function addToCart() {
  element = buildCartElement(elementCount.value);
  if (!element) {
    return;
  }
  if (list.innerText == "You cart is empty") {
    list.innerText = "";
  }
  list.appendChild(element);
  updateCart();
}

function updateCart() {
  const cart = document.getElementById("cart");
  if (list.childElementCount == 0) {
    list.innerText = "You cart is empty";
    cart.parentNode.classList.add("hidden");
    return;
  }
  cart.parentNode.classList.remove("hidden");
  const container = document.getElementById("checkout-resume");
  if (list.childElementCount > 2) {
    container.style.overflowY = "scroll";
  } else {
    container.style.overflowY = "auto";
  }
  cart.parentNode.setAttribute("data-value", list.childElementCount);
}
updateCart();

function deleteParent(event) {
  event.target.parentNode.remove();
  updateCart();
}
