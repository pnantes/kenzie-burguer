import ProductsCart from "../ProductCart";
import "./style.css";

const Cart = ({ currentSale, removeItem, removeAll }) => {
  console.log(currentSale);
  const total = currentSale.reduce((previous, currentItem) => {
    return previous + currentItem.price;
  }, 0);
  return (
    <aside>
      <div className="titulo">
        <h2>Carrinho de compras</h2>
      </div>
      <div className="sacola">
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
