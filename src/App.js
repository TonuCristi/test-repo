import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Product from "./components/Product";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsOpen(!isOpen);
    const fetchData = async () => {
      await axios
        .get("http://localhost:3030/products")
        .then((res) => setData(res.data));
    };
    fetchData();
  }, []);

  const close = {
    opacity: "0",
    pointerEvents: "none",
    visibility: "none",
    transition: "all 0.3s ease",
    transform: "translateX(110%)",
  };

  const open = {
    opacity: "1",
    transition: "all 0.3s ease",
    transform: "translateX(0%)",
  };

  return (
    <div className="container">
      <div className="greet" style={isOpen ? open : close}>
        Welcome to Capitalist!
        <div className="close-btn" onClick={() => setIsOpen(!isOpen)}>
          ❌
        </div>
      </div>
      <Header />
      <div className="products">
        {!!data &&
          data.map((product) => (
            <Product key={product.product_name} product={product} />
          ))}
      </div>
    </div>
  );
}

export default App;
