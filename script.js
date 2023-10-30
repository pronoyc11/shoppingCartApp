const addToCartButtons = document.querySelectorAll(".add-to-cart");
const tableBodyCart = document.querySelector("#table-body-cart");
const rmvProduct = document.querySelector("#table-body-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addProducts);
});

rmvProduct.addEventListener("click", removeProducts);

function addProducts(e) {
  const name = e.target.parentElement.parentElement.children.item(0)
    .textContent;
    let allowed = true;
//making the dom element iterable starts
const liarr = Array.from(rmvProduct.children);

for(item in liarr){
    if(liarr[item].children.item(0).textContent === name){
        allowed = false ;
    };
}
//making the dom element iterable ends
if(allowed){
    const price = e.target.parentElement.parentElement.children.item(1)
    .textContent;
  const tr = document.createElement("tr");
  tr.innerHTML = `<tr>    
  <td>${name}</td>
  <td>${price}</td> 
  </tr>`;
  const buttonTd = document.createElement("td");
  const button = document.createElement("button");
  button.innerHTML = "Remove";
  button.classList.add("rmv-button");
  buttonTd.appendChild(button);
  tr.appendChild(buttonTd);
  tableBodyCart.appendChild(tr);
}else{
alert("This product is already on the cart!")
}

}

function removeProducts(e) {
  const elem = e.target;
  if (elem.className === "rmv-button") {
    elem.parentElement.parentElement.parentElement.removeChild(
      elem.parentElement.parentElement
    );
  }
}
