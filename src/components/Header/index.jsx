import { useState } from "react";
import "./style.css";

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
    <header className="header">
      <div className="container-header">
        <div>
          <h1>
            Burguer
            <span>KENZIE</span>
          </h1>
        </div>

        <form className="pesquisa" onSubmit={handleSearch}>
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
    </header>
  );
};

export default Header;
