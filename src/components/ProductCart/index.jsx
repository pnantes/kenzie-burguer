import "./style.css";
const ProductsCart = ({ currentSale, total, removeItem, removeAll }) => {
  if (currentSale.length > 0) {
    return (
      <section className="comprando">
        <ul>
          {currentSale.map(({ id, name, category, img }, index) => (
            <li key={id}>
              <div className="div-figure">
                <figure>
                  <img src={img} alt={name} />
                </figure>
              </div>
              <div className="produto">
                <h2>{name}</h2>
                <span>{category}</span>
              </div>
              <div onClick={() => removeItem(id)}>
                <p>Remover</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="total">
          <div className="container-total">
            <p>Total</p>{" "}
            <span>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>

          <button onClick={removeAll}>Remover todos</button>
        </div>
      </section>
    );
  } else {
    return (
      <section className="vazia">
        <h2>Sua sacola está vazia</h2>
        <span>Adicione itens</span>
      </section>
    );
  }
};

export default ProductsCart;
