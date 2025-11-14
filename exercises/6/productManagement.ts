import { Log, Authorize, Role } from "./decorators";

class ProductManagement {
  @Log
  @Role("admin")
  @Authorize("admin")
  createProduct(name: string, price: number) {
    console.log(`Product created: ${name}, Price: ${price}`);
  }

  @Log
  @Role("admin")
  @Authorize("admin")
  deleteProduct(name: string) {
    console.log(`Product deleted: ${name}`);
  }
}

export default ProductManagement;
