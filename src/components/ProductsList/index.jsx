import Product from "../Product";

const ProductList = ({ products, handleClick }) => {
  return products.map((product) => (
    <Product product={product} handleClick={handleClick} key={product.id} />
  ));
};

export default ProductList;
