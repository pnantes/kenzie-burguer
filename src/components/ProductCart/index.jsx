const ProductsCart = ({ currentSale, total, removeItem, removeAll }) => {
  if (currentSale.length > 0) {
    return (
      <section>
        <ul>
          {currentSale.map(({ id, name, category, img }, index) => (
            <li key={id}>
              <div>
                <figure>
                  <img src={img} alt={name} />
                </figure>
              </div>
              <div>
                <h2>{name}</h2>
                <span>{category}</span>
              </div>
              <div onClick={() => removeItem(id)}>
                <p>Remover</p>
              </div>
            </li>
          ))}
        </ul>

        <div>
          {" "}
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
          <button onClick={removeAll}>Remover todos</button>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <h2>Sua sacola está vazia</h2>
        <span>Adicione itens</span>
      </section>
    );
  }
};

export default ProductsCart;
