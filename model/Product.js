class Product {
  constructor(id, categoryId, productName, imageUrl, description, price) {
    (this.id = id),
      (this.categoryId = categoryId),
      (this.productName = productName),
      (this.imageUrl = imageUrl),
      (this.description = description),
      (this.price = price);
  }
}

export default Product;
