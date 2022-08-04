import ProductsCart from "../ProductCart";

const Cart = ({ currentSale, removeItem, removeAll }) => {
  console.log(currentSale);
  const total = currentSale.reduce((previous, currentItem) => {
    return previous + currentItem.price;
  }, 0);
  return (
    <aside>
      <div>
        <h2>Carrinho de compras</h2>
      </div>
      <div>
        <ProductsCart
          currentSale={currentSale}
          total={total}
          removeItem={removeItem}
          removeAll={removeAll}
        />
      </div>
    </aside>
  );
};

export default Cart;
