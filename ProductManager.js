class ProductManager {
    products;
    constructor() {
        this.products =  [];

}
static correlativoId = 0;
addProduct (title, description, price, thumbnail, stock) {
}

if (
    title == undefined ||
    description == undefined ||
    price == undefined ||
    thumbnail == undefined ||
    code == undefined ||
    stock == undefine
){
    throw new Error("Completar todos los campos obligatorios");
}

let codeExists = this.products.some ((dato) => dato.code == code);

if (codeExists) {
    throw new Error("codigo existente, porfavor vuelta a intentarlo");
}
else { 
    ProductManager.correlativoId++;
    const newProdcut = {
        id: ProductManager.correlativoId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };
    this.products.push(newProduct);
}



getProducts () {
    return this.products;
}

getProcutById(id) {
    let product = this.product.find((dato) => dato.id ===id);
    
    if (product !==undefined) {
        return product;
    } 
    else {
        return "producto no existente";
    }

}

myFirstPRoducts.addProduct(
    "producto prueba",
    "Este es un producto de prueba",
    200,
    "sin imagen",
    "abc123",
    25
  );
}


console.log("desde getProducts", myFirstPRoducts.getProducts());
console.log("desde getProducts", myFirstPRoducts.getProducts(1));