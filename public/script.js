/* LOAD PRODUCTS */

function loadProducts() {

fetch("/products")
.then(res => res.json())
.then(data => {

let container = document.getElementById("productList");

if(!container) return;

container.innerHTML = "";

data.forEach(product => {

container.innerHTML += `
<div class="product-card">

<h3>${product.name}</h3>

<p>Price: ₹${product.price}</p>

<button onclick="addToCart('${product.name}',${product.price})">
Add to Cart
</button>

</div>
`;

});

});

}


/* SEARCH PRODUCT */

function searchProduct(){

let input=document.getElementById("search").value.toLowerCase();

fetch("/products")
.then(res=>res.json())
.then(data=>{

let container=document.getElementById("productList");

container.innerHTML="";

data
.filter(p=>p.name.toLowerCase().includes(input))
.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<h3>${product.name}</h3>

<p>Price: ₹${product.price}</p>

<button onclick="addToCart('${product.name}',${product.price})">
Add to Cart
</button>

</div>

`;

});

});

}


/* ADD TO CART */

function addToCart(name,price){

fetch("/add-cart",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
product_name:name,
price:price
})

})

.then(res=>res.text())
.then(data=>{
alert("Added to Cart");
});

}


/* LOAD CART */

function loadCart(){

fetch("/cart")
.then(res=>res.json())
.then(data=>{

let table=document.getElementById("cartTable");

if(!table) return;

table.innerHTML="";

let total=0;

data.forEach(item=>{

total+=item.price;

table.innerHTML+=`

<tr>

<td>${item.product_name}</td>

<td>₹${item.price}</td>

<td>1</td>

<td>₹${item.price}</td>

</tr>

`;

});

document.getElementById("totalPrice").innerText="₹"+total;

});

}