import { useState } from "react";

const Header = ({ products, filteredProducts, setFilteredProducts }) => {
  const [currentSearch, setCurrentSearch] = useState("");
  function handleSearch(event) {
    event.preventDefault();
    if (currentSearch !== "") {
      const newFilter = products.filter(
        (product) =>
          product.name.toLowerCase().match(currentSearch) ||
          product.category.toLowerCase().match(currentSearch)
      );
      setFilteredProducts(newFilter);
    }
  }

  return (
    <div>
      <div>
        <span>Burguer</span>
        <span>KENZIE</span>
      </div>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) =>
            setCurrentSearch(event.target.value.toLowerCase())
          }
        />
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
};

export default Header;
