const Product = ({ product, handleClick }) => {
  const { id, name, category, price, img } = product;

  return (
    <li>
      <div>
        <figure>
          <img src={img} alt={name} />
        </figure>
      </div>
      <div>
        <h2>{name}</h2>
        <span>{category}</span>
        <p>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={() => handleClick(id)}>Adicionar</button>
      </div>
    </li>
  );
};

export default Product;
