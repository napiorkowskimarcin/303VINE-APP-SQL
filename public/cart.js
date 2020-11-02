//load a btn for every product and add click option
const increaseProductArray = () => {
  console.log();
};

const btnBuy = document.getElementsByClassName("btnBuy");

//create arrays of names and prices
let productNames = [];
document.querySelectorAll(".card-title").forEach((element) => {
  productNames.push(element.innerHTML);
});
let productPrices = [];
document.querySelectorAll(".card-price").forEach((element) => {
  productPrices.push(element.innerHTML);
});
//create a array with product that we want to buy
let productQty = new Array(productPrices.length).fill(0);
//create total sum of products
let totalSum = 0;
//load space to put our shopping cart and total sum
const shoppingContainer = document.querySelector(".shoppingContainer");
const totalPrice = document.querySelector(".total");
//flag for creating sum
let firstItem = 0;
let sampleArray = [];
for (let i = 0; i < btnBuy.length; i++) {
  btnBuy[i].addEventListener("click", () => {
    //load user
    const user = document.querySelector(".user").textContent;
    productQty[i]++;
    console.log(productNames);
    console.log(productQty);
    totalSum += Number(productPrices[i]);
    console.log(`Total sum:${totalSum}`);
    sampleArray = [];
    for (let i = 0; i < productNames.length; i++) {
      sampleArray.push(
        "Product name: " +
          productNames[i] +
          "Quantity of the product:" +
          productQty[i]
      );
    }

    //created for submit
    document.querySelector(".inputNames").value = sampleArray;
    document.querySelector(".inputQty").value = productQty;
    document.querySelector(".inputSum").value = totalSum;
    document.querySelector(".inputEmail").value = user;

    if (productQty[i] === 1) {
      //create elements with names, prices and qty
      let divName = document.createElement("p");
      divName.classList.add("divName");
      divName.textContent = `Product name: ${productNames[i]}`;
      let divPrice = document.createElement("span");
      divPrice.classList.add("divPrice");
      divPrice.textContent = `  Price: ${productPrices[i]}`;
      let divQty = document.createElement("span");
      divQty.textContent = `Qty: ${productQty[i]}`;
      divQty.classList.add(`divQty${i}`);
      //adding to DOM
      shoppingContainer.appendChild(divName);
      divName.appendChild(divPrice);
      divName.appendChild(divQty);

      //create sum
      if (!firstItem) {
        firstItem = 1;
        let divTotal = document.createElement("p");
        divTotal.textContent = `Total sum: ${totalSum} Eur`;
        divTotal.classList.add(`divTotal`);
        totalPrice.appendChild(divTotal);
        document.getElementById("buy").classList.remove("none");
      } else {
        document.querySelector(
          ".divTotal"
        ).textContent = `Total sum: ${totalSum} Eur`;
      }
    } else {
      document.querySelector(
        `.divQty${i}`
      ).textContent = `Qty: ${productQty[i]}`;
      document.querySelector(
        ".divTotal"
      ).textContent = `Total sum: ${totalSum} Eur`;
    }
  });
}
