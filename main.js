var main = document.querySelector(".jsContainer")

var htmlStr =""

items.results.forEach(function(item){

	htmlStr += `

<div class="dataCon">

	<img class="image" src="${unescape(item.Images[0].url_fullxfull)}"/>

	<p class="title">${item.title}</p>

	<p class="madeBy"> ${item.Shop.shop_name} </p>

	<p class="price"><strong> $${item.price} </strong></p>

</div>

	`
})

main.innerHTML = htmlStr