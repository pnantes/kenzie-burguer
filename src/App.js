import "./App.css";
import ProductList from "./components/ProductsList";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import api from "./services/api";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleClick(productId) {
    const verify = currentSale.find((product) => product.id === productId);
    if (!verify) {
      const selectProducts = products.find(
        (product) => product.id === productId
      );
      setCurrentSale([...currentSale, selectProducts]);
    }
  }

  function removeItem(productId) {
    const removedItem = currentSale.filter(
      (product) => product.id !== productId
    );
    setCurrentSale(removedItem);
  }

  function removeAll() {
    setCurrentSale([]);
  }

  return (
    <main>
      <Header
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <ul>
        <ProductList products={filteredProducts} handleClick={handleClick} />
      </ul>
      <Cart
        currentSale={currentSale}
        removeItem={removeItem}
        removeAll={removeAll}
      />
    </main>
  );
}

export default App;
