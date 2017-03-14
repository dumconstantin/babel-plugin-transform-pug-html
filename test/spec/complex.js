
var spec = {
  template: pug `
.product-item
  .product-title {{ product.title }}
  .product-details
    .inventory In Stock: {{ product.inventory }}
    button.add-button(:disabled='!product.inventory', @click='addToCart(product)') {{ product.inventory > 0 ? "Add to cart" : "Out Of Stock" }}
`,
  expected: `
<div className="product-item">
  <div className="product-title">{{ product.title }}</div>
  <div className="product-details">
    <div className="inventory">In Stock: {{ product.inventory }}</div>
    <button className="add-button" :disabled="!product.inventory"
      @click="addToCart(product)">{{ product.inventory > 0 ? "Add to cart" : "Out Of Stock" }}</button>
  </div>
</div>
`
}
